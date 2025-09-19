const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    version: '2.0.0',
    features: ['segregated-thresholds', 'collapsible-abbreviations'],
    timestamp: new Date().toISOString() 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Agthia DOA Dashboard Enhanced v2.0 running on port ${PORT}`);
  console.log(`📊 Dashboard URL: http://localhost:${PORT}`);
  console.log(`✅ Features: Segregated Thresholds, Collapsible Abbreviations`);
});

module.exports = app;
