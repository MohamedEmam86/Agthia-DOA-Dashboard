// Agthia DOA Dashboard JavaScript - Enhanced Version
class DOADashboard {
  constructor() {
    this.currentFunction = null;
    this.currentActivity = null;
    this.searchTerm = '';
    this.abbreviationsExpanded = false;
    this.init();
  }

  init() {
    this.renderStats();
    this.renderFunctionCards();
    this.renderAbbreviations();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterActivities();
      });
    }

    // Modal close events
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.closeModal();
      }
    });

    // Close button events
    document.querySelectorAll('.close-btn').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  renderStats() {
    const statsContainer = document.getElementById('statsOverview');
    if (!statsContainer) return;

    const totalActivities = doaData.functions.reduce((sum, func) => sum + func.activities.length, 0);
    const totalFunctions = doaData.functions.length;
    const totalAbbreviations = Object.keys(doaData.abbreviations).length;

    statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-number">${totalFunctions}</span>
        <span class="stat-label">Functions</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">${totalActivities}</span>
        <span class="stat-label">Total Activities</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">${totalAbbreviations}</span>
        <span class="stat-label">Abbreviations</span>
      </div>
    `;
  }

  renderFunctionCards() {
    const functionsContainer = document.getElementById('functionsGrid');
    if (!functionsContainer) return;

    functionsContainer.innerHTML = doaData.functions.map(func => `
      <div class="function-card" data-function="${func.id}" onclick="dashboard.openFunctionModal('${func.id}')">
        <div class="function-header">
          <div class="function-icon">${func.icon}</div>
          <div class="function-info">
            <h3>${func.name}</h3>
            <p>Click to view activities</p>
          </div>
        </div>
        <div class="activity-count">${func.activities.length}</div>
        <div class="activity-label">Activities</div>
      </div>
    `).join('');
  }

  renderAbbreviations() {
    const abbreviationsContainer = document.getElementById('abbreviationsGrid');
    const toggleButton = document.getElementById('abbreviationsToggle');
    
    if (!abbreviationsContainer) return;

    const abbreviationsHTML = Object.entries(doaData.abbreviations)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([code, full]) => `
        <div class="abbreviation-item">
          <span class="abbreviation-code">${code}</span>
          <span class="abbreviation-full">${full}</span>
        </div>
      `).join('');

    abbreviationsContainer.innerHTML = abbreviationsHTML;
    
    // Set initial state
    if (!this.abbreviationsExpanded) {
      abbreviationsContainer.classList.add('collapsed');
    }
  }

  toggleAbbreviations() {
    const abbreviationsContainer = document.getElementById('abbreviationsGrid');
    const toggleButton = document.getElementById('abbreviationsToggle');
    
    this.abbreviationsExpanded = !this.abbreviationsExpanded;
    
    if (this.abbreviationsExpanded) {
      abbreviationsContainer.classList.remove('collapsed');
      toggleButton.innerHTML = '📚 Role Abbreviations Reference <span class="toggle-icon">▼</span>';
    } else {
      abbreviationsContainer.classList.add('collapsed');
      toggleButton.innerHTML = '📚 Role Abbreviations Reference <span class="toggle-icon">▶</span>';
    }
  }

  openFunctionModal(functionId) {
    const func = doaData.functions.find(f => f.id === functionId);
    if (!func) return;

    this.currentFunction = func;
    
    const modal = document.getElementById('functionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const activitiesList = document.getElementById('activitiesList');

    modalTitle.textContent = func.name;
    modalIcon.textContent = func.icon;
    modalIcon.style.color = func.color;

    this.renderActivities(func.activities);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  renderActivities(activities) {
    const activitiesList = document.getElementById('activitiesList');
    if (!activitiesList) return;

    const filteredActivities = activities.filter(activity => 
      this.searchTerm === '' || 
      activity.name.toLowerCase().includes(this.searchTerm) ||
      activity.thresholds.some(threshold => 
        threshold.range.toLowerCase().includes(this.searchTerm) ||
        threshold.preparer.toLowerCase().includes(this.searchTerm) ||
        threshold.reviewer.toLowerCase().includes(this.searchTerm) ||
        threshold.approver.toLowerCase().includes(this.searchTerm)
      )
    );

    activitiesList.innerHTML = filteredActivities.map(activity => `
      <div class="activity-item" onclick="dashboard.openActivityDetail('${activity.id}')">
        <div class="activity-name">${activity.name}</div>
        <div class="activity-thresholds">
          <strong>Thresholds:</strong> ${activity.thresholds.length} threshold range${activity.thresholds.length > 1 ? 's' : ''}
        </div>
        <div class="threshold-preview">
          ${this.renderThresholdPreview(activity.thresholds)}
        </div>
      </div>
    `).join('');

    if (filteredActivities.length === 0) {
      activitiesList.innerHTML = `
        <div class="text-center" style="padding: 2rem; color: var(--gray-500);">
          <p>No activities found matching your search.</p>
        </div>
      `;
    }
  }

  renderThresholdPreview(thresholds) {
    if (thresholds.length === 1) {
      return `<div class="threshold-range">${thresholds[0].range}</div>`;
    }
    
    return `
      <div class="threshold-ranges">
        ${thresholds.slice(0, 2).map(threshold => 
          `<div class="threshold-range">${threshold.range}</div>`
        ).join('')}
        ${thresholds.length > 2 ? `<div class="threshold-more">+${thresholds.length - 2} more</div>` : ''}
      </div>
    `;
  }

  renderWorkflowChain(threshold) {
    const steps = [];
    
    if (threshold.preparer && threshold.preparer !== 'N/A' && threshold.preparer !== '') {
      steps.push(`<span class="workflow-step preparer">📝 ${threshold.preparer}</span>`);
    }
    
    if (threshold.reviewer && threshold.reviewer !== 'N/A' && threshold.reviewer !== '') {
      steps.push(`<span class="workflow-step reviewer">👀 ${threshold.reviewer}</span>`);
    }
    
    if (threshold.approver && threshold.approver !== 'N/A' && threshold.approver !== '') {
      steps.push(`<span class="workflow-step approver">✅ ${threshold.approver}</span>`);
    }
    
    if (threshold.inform && threshold.inform !== 'N/A' && threshold.inform !== '') {
      steps.push(`<span class="workflow-step inform">📢 ${threshold.inform}</span>`);
    }

    return steps.join('<span class="workflow-arrow">→</span>');
  }

  openActivityDetail(activityId) {
    if (!this.currentFunction) return;
    
    const activity = this.currentFunction.activities.find(a => a.id === activityId);
    if (!activity) return;

    this.currentActivity = activity;
    
    const modal = document.getElementById('activityModal');
    const modalTitle = document.getElementById('activityModalTitle');
    const activityDetail = document.getElementById('activityDetail');

    modalTitle.textContent = activity.name;
    
    activityDetail.innerHTML = `
      <div class="detail-section">
        <h4>📋 Activity Information</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <div class="detail-label">Function</div>
            <div class="detail-value">${this.currentFunction.name}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Total Thresholds</div>
            <div class="detail-value">${activity.thresholds.length} threshold range${activity.thresholds.length > 1 ? 's' : ''}</div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h4>💰 Threshold-Based Workflows</h4>
        <div class="thresholds-container">
          ${activity.thresholds.map((threshold, index) => `
            <div class="threshold-card">
              <div class="threshold-header">
                <div class="threshold-range-badge">${threshold.range}</div>
              </div>
              <div class="threshold-workflow">
                <div class="workflow-grid">
                  <div class="workflow-item">
                    <div class="workflow-label">Preparer</div>
                    <div class="workflow-value">${this.formatRole(threshold.preparer)}</div>
                  </div>
                  <div class="workflow-item">
                    <div class="workflow-label">Reviewer</div>
                    <div class="workflow-value">${this.formatRole(threshold.reviewer)}</div>
                  </div>
                  <div class="workflow-item">
                    <div class="workflow-label">Approver</div>
                    <div class="workflow-value">${this.formatRole(threshold.approver)}</div>
                  </div>
                  <div class="workflow-item">
                    <div class="workflow-label">Inform</div>
                    <div class="workflow-value">${this.formatRole(threshold.inform)}</div>
                  </div>
                </div>
                <div class="visual-workflow">
                  <div class="workflow-chain">
                    ${this.renderWorkflowChain(threshold)}
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      ${activity.conditions ? `
        <div class="detail-section">
          <h4>⚠️ Special Conditions</h4>
          <div class="detail-item">
            <div class="detail-value conditions-text">${activity.conditions}</div>
          </div>
        </div>
      ` : ''}
    `;

    // Close function modal and open activity modal
    document.getElementById('functionModal').classList.remove('active');
    modal.classList.add('active');
  }

  formatRole(role) {
    if (!role || role === 'N/A' || role === '') {
      return '<span class="role-na">N/A</span>';
    }

    // Split multiple roles and format each
    const roles = role.split(/[,/]/).map(r => r.trim());
    return roles.map(r => {
      const abbreviation = doaData.abbreviations[r];
      return abbreviation ? 
        `<span class="role-with-tooltip" title="${abbreviation}">${r}</span>` : 
        `<span class="role-text">${r}</span>`;
    }).join(', ');
  }

  filterActivities() {
    if (this.currentFunction) {
      this.renderActivities(this.currentFunction.activities);
    }
  }

  closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
    
    // Reset search when closing
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = '';
      this.searchTerm = '';
    }
  }

  goBackToFunction() {
    document.getElementById('activityModal').classList.remove('active');
    document.getElementById('functionModal').classList.add('active');
  }
}

// Initialize dashboard when DOM is loaded
let dashboard;
document.addEventListener('DOMContentLoaded', () => {
  dashboard = new DOADashboard();
});

// Make dashboard globally available
window.dashboard = dashboard;
