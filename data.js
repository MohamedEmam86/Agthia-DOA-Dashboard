// Agthia DOA Dashboard Data - Enhanced with Segregated Thresholds
const doaData = {
  functions: [
    {
      id: 'governance',
      name: 'Governance & Strategy',
      color: '#1e40af',
      icon: '🏛️',
      activities: [
        {
          id: 'doa-develop',
          name: 'Develop and amend delegation of authority',
          thresholds: [
            {
              range: 'Group Level',
              preparer: 'HGRC',
              reviewer: 'ARC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'governance-policies',
          name: 'Group Policies – Governance Policies',
          thresholds: [
            {
              range: 'All',
              preparer: 'President/BUH',
              reviewer: 'HGRC, CEO',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'operating-policies',
          name: 'Group Policies – Operating Policies',
          thresholds: [
            {
              range: 'All',
              preparer: 'FM',
              reviewer: 'President, COO, GGC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'procedures-guidelines',
          name: 'Operating Procedures and Guidelines',
          thresholds: [
            {
              range: 'All',
              preparer: 'FM',
              reviewer: 'MGRC',
              approver: 'LT members',
              inform: 'N/A'
            }
          ],
          conditions: 'Only LT members will approve the procedures'
        },
        {
          id: 'policy-classification',
          name: 'Classification of policies between governance and operating',
          thresholds: [
            {
              range: 'All',
              preparer: 'FM',
              reviewer: 'MGRC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'risk-appetite',
          name: 'Risk Appetite Statement',
          thresholds: [
            {
              range: 'All',
              preparer: 'HGRC/RMC',
              reviewer: 'ARC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'risk-framework',
          name: 'Risk Framework',
          thresholds: [
            {
              range: 'All',
              preparer: 'MGRC',
              reviewer: 'HGRC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'group-strategy',
          name: 'Group Strategy & Business Plan',
          thresholds: [
            {
              range: 'All',
              preparer: 'FH/President',
              reviewer: 'CEO, LT, SIIC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'annual-plan',
          name: 'Function / BU / Country Annual Plan',
          thresholds: [
            {
              range: 'All',
              preparer: 'FM',
              reviewer: 'FH/President, CFO',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'annual-budget',
          name: 'Group Annual Budget',
          thresholds: [
            {
              range: 'All',
              preparer: 'CFO',
              reviewer: 'CEO, SIIC, LT',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'key-risk-indicator',
          name: 'Key Risk Indicator for BU/FU/Country and Corporate',
          thresholds: [
            {
              range: 'All',
              preparer: 'FH/President',
              reviewer: 'HGRC, RMC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'mergers-acquisitions',
          name: 'Mergers, Acquisition, JV, Greenfield, Divestments (Strategic decision making)',
          thresholds: [
            {
              range: 'All',
              preparer: 'SVP M&A',
              reviewer: 'FH, CFO, CEO, SIIC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'quarterly-statements',
          name: 'Quarterly / annual financial statements - Group consolidated (audited / reviewed)',
          thresholds: [
            {
              range: 'All',
              preparer: 'CFO',
              reviewer: 'CEO, ARC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'annual-standalone',
          name: 'Annual financial statements - Standalone (audited / reviewed)',
          thresholds: [
            {
              range: 'All',
              preparer: 'FC',
              reviewer: 'TRFDIR',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'directors-report',
          name: 'Approval of quarterly and annual director\'s report',
          thresholds: [
            {
              range: 'All',
              preparer: 'DIR',
              reviewer: 'CFO, CEO, ARC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'financial-amendment',
          name: 'Amendment of Financial Statement',
          thresholds: [
            {
              range: 'All',
              preparer: 'FDIR/VPGFC',
              reviewer: 'CFO, CEO, ARC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'articles-amendment',
          name: 'Amendment of the Articles and Memorandum of Association',
          thresholds: [
            {
              range: 'All',
              preparer: 'Legal Manager',
              reviewer: 'HGRC, GGC, CEO',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'license-renewal',
          name: 'Renewal/amendment of the Company License',
          thresholds: [
            {
              range: 'All',
              preparer: 'Legal Manager',
              reviewer: 'HGRC, GGC, CEO',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'listing-changes',
          name: 'Changes to the company\'s listing or its status as a PJSC (Listing or delisting)',
          thresholds: [
            {
              range: 'All',
              preparer: 'Legal Manager',
              reviewer: 'HGRC, GGC, CEO',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'capital-changes',
          name: 'Increase/ reduction/ amendment of the company\'s capital',
          thresholds: [
            {
              range: 'All',
              preparer: 'CFO',
              reviewer: 'CEO, GGC, SIIC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'corporate-strategy',
          name: 'Corporate Strategy including Values, Mission and Standards setting',
          thresholds: [
            {
              range: 'All',
              preparer: 'CGO',
              reviewer: 'CFO, CEO, SIIC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'cease-operations',
          name: 'Cease to operate all or any material part of the company\'s business activity',
          thresholds: [
            {
              range: 'All',
              preparer: 'President, FDIR',
              reviewer: 'CFO, CEO, GGC, ARC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'governance-statement',
          name: 'Annual corporate governance statement / report',
          thresholds: [
            {
              range: 'All',
              preparer: 'MGRC',
              reviewer: 'HGRC, GGC, CEO',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'chairman-appointment',
          name: 'Appointment of the Chairman of the BOD',
          thresholds: [
            {
              range: 'All',
              preparer: 'BOARD SECRETARY',
              reviewer: 'NA',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'bod-members',
          name: 'Appointment/ Dismissal of the BOD\'s members',
          thresholds: [
            {
              range: 'All',
              preparer: 'BOARD SECRETARY',
              reviewer: 'GGC, NRC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'bod-committees',
          name: 'Establishment/changes of BOD Committees',
          thresholds: [
            {
              range: 'All',
              preparer: 'BOARD SECRETARY',
              reviewer: 'NA',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'bod-charter',
          name: 'Approval of the BOD Charter',
          thresholds: [
            {
              range: 'All',
              preparer: 'BOARD SECRETARY',
              reviewer: 'As delegated by the BOD to its\' Committees, GGC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'committee-charters',
          name: 'Approval of the BOD Committees Charters',
          thresholds: [
            {
              range: 'All',
              preparer: 'BOARD SECRETARY',
              reviewer: 'GGC, RELEVANT COMMITTEE',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'secretary-appointment',
          name: 'Appointment/Removal/Remuneration of the BOD Secretary',
          thresholds: [
            {
              range: 'All',
              preparer: 'DM',
              reviewer: 'NRC',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        },
        {
          id: 'auditor-appointment',
          name: 'Appointment/ Removal of the external Auditors',
          thresholds: [
            {
              range: 'All',
              preparer: 'CFO',
              reviewer: 'ARC, Board',
              approver: '',
              inform: 'N/A'
            }
          ],
          conditions: ''
        }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      color: '#059669',
      icon: '💰',
      activities: [
        {
          id: 'coa-creation',
          name: 'Creation/Closing of New Chart of Accounts (COA), Cost Centers, GL Mapping',
          thresholds: [
            {
              range: 'All',
              preparer: 'Accountant',
              reviewer: 'FDIR, FP&A Systems Manager',
              approver: 'VPFGC (HO level only)',
              inform: 'TA/Accountant, TM, Tax Director'
            }
          ],
          conditions: 'VPFGC approves only at HO level entity'
        },
        {
          id: 'fines-penalties',
          name: 'Fines & Penalties (Excluding traffic/employee-related)',
          thresholds: [
            {
              range: 'All',
              preparer: 'FMFD, GGC',
              reviewer: 'COO, CFO, CEO',
              approver: 'VPFGC (HO), FDIR (entity)',
              inform: 'OR'
            }
          ],
          conditions: ''
        },
        {
          id: 'petty-cash',
          name: 'Petty cash',
          thresholds: [
            {
              range: 'AED 0-2K',
              preparer: 'DSN',
              reviewer: '',
              approver: '',
              inform: 'Functions shouldn\'t have PC, only BUs'
            },
            {
              range: 'Above AED 2K',
              preparer: 'DSN',
              reviewer: '',
              approver: '',
              inform: 'Functions shouldn\'t have PC, only BUs'
            }
          ],
          conditions: 'Functions shouldn\'t have PC, only BUs'
        },
        {
          id: 'insurance-policies',
          name: 'Insurance Policies – establishment and renewal',
          thresholds: [
            {
              range: 'AED 0-1M',
              preparer: 'FM',
              reviewer: 'CM/FD/BUD, FDIR',
              approver: '',
              inform: 'Function Dir'
            },
            {
              range: 'Above AED 1M',
              preparer: 'FM',
              reviewer: 'CM/FD/BUD, FDIR, BUH',
              approver: '',
              inform: 'Function Dir'
            }
          ],
          conditions: 'Function Dir means: for BU it is BUFunction Dir, for Group it is TDIR (Treasury Director)'
        },
        {
          id: 'charities-donation',
          name: 'Charities and Donation',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'FM',
              reviewer: 'FCTR, BUH/FH',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 500K',
              preparer: 'FM',
              reviewer: 'FCTR, BUH/FH',
              approver: '',
              inform: 'Treasury Group Level: Treasury Manager, Treasury Director, CEO. Entity Level: FCTR, FDIR, CFO'
            }
          ],
          conditions: 'Function Dir means: for BU it is BUFD, for Group it is TRYDIR'
        },
        {
          id: 'investment-placement',
          name: 'Placement of Funds in Investment Mandates (other than term deposits)',
          thresholds: [
            {
              range: 'Group Level',
              preparer: 'TDIR',
              reviewer: 'VPCF/CFO',
              approver: '',
              inform: 'TDIR, VPFGC'
            },
            {
              range: 'Entity Level',
              preparer: 'FCTR',
              reviewer: 'FDIR/TDIR',
              approver: '',
              inform: 'FCTR, FDIR'
            }
          ],
          conditions: ''
        },
        {
          id: 'bank-accounts',
          name: 'Opening/Closing Bank Accounts (New/Discontinued - Banking/Investments)',
          thresholds: [
            {
              range: 'Group Level',
              preparer: 'FCTR',
              reviewer: 'FDIR/TDIR',
              approver: '',
              inform: 'FCTR, TDIR'
            },
            {
              range: 'Entity Level',
              preparer: 'FCTR',
              reviewer: 'FDIR',
              approver: '',
              inform: 'FCTR, FDIR'
            }
          ],
          conditions: 'No opening/closing bank accounts without corporate treasury alignment'
        },
        {
          id: 'hedging',
          name: 'Interest Rate & Foreign Exchange Hedging/Closure',
          thresholds: [
            {
              range: 'Per Policy',
              preparer: 'Per Policy',
              reviewer: 'Per Policy',
              approver: 'Per Policy',
              inform: 'Per Policy'
            }
          ],
          conditions: 'Refer to Approved Financial Risk Management Policy'
        },
        {
          id: 'credit-utilization',
          name: 'Utilization of Credit Lines (Including WC, LC and other operating credit lines other than OD)',
          thresholds: [
            {
              range: 'Per Policy',
              preparer: 'Per Policy',
              reviewer: 'Per Policy',
              approver: 'Per Policy',
              inform: 'Per Policy'
            }
          ],
          conditions: 'Refer to Approved Financial Risk Management Policy'
        },
        {
          id: 'term-deposits',
          name: 'Placement of funds in term deposits / fixed rate instruments',
          thresholds: [
            {
              range: 'Per Board approved investment mandates',
              preparer: 'Per Policy',
              reviewer: 'Per Policy',
              approver: 'Per Policy',
              inform: 'Per Policy'
            }
          ],
          conditions: 'Per Board approved investment mandates'
        },
        {
          id: 'credit-approval',
          name: 'Approval of credit lines, borrowing mandates, and long-term intercompany loans',
          thresholds: [
            {
              range: 'All',
              preparer: 'Per Policy',
              reviewer: 'Per Policy',
              approver: 'Per Policy',
              inform: 'Per Policy'
            }
          ],
          conditions: 'Once facility approval taken, documentation follows as per PoA'
        },
        {
          id: 'tax-returns',
          name: 'TAX return Computation (VAT, Sales Tax, Corporate Tax and Excise Tax etc.)',
          thresholds: [
            {
              range: 'All',
              preparer: 'Per Policy',
              reviewer: 'Per Policy',
              approver: 'Per Policy',
              inform: 'Per Policy'
            }
          ],
          conditions: ''
        }
      ]
    },
    {
      id: 'sales',
      name: 'Sales',
      color: '#dc2626',
      icon: '📈',
      activities: [
        {
          id: 'sku-pricing',
          name: 'Standard SKU pricing',
          thresholds: [
            {
              range: 'All',
              preparer: 'TMD, SCD, CMD, CCTR',
              reviewer: '',
              approver: '',
              inform: 'Finance/CS Team updates price master'
            }
          ],
          conditions: ''
        },
        {
          id: 'trade-spend-budgeted',
          name: 'Category Trade Spend – Budgeted',
          thresholds: [
            {
              range: 'Within budget',
              preparer: 'STM',
              reviewer: 'TMD',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'trade-spend-exceeding',
          name: 'Category Trade Spend – Exceeding the budget',
          thresholds: [
            {
              range: 'Up to 20% of approved channel prices OR Estimated Gross profit margin impact up to AED 100,000',
              preparer: 'TMA',
              reviewer: 'CCTR, STM',
              approver: '',
              inform: ''
            },
            {
              range: 'Up to 30% of approved channel prices OR Estimated Gross profit margin impact up to AED 300,000',
              preparer: 'TMA',
              reviewer: 'CCTR, STM, SCD',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above 30% of approved channel prices OR Estimated Gross profit margin impact above AED 500,000',
              preparer: 'TMA',
              reviewer: 'CCTR, SCD, TMD, CC',
              approver: 'CMD',
              inform: ''
            }
          ],
          conditions: 'Based on % of approved channel prices OR gross profit margin impact'
        },
        {
          id: 'distribution-agreements',
          name: 'Distribution Agreements / Agency Contracts / Strategic Partnerships',
          thresholds: [
            {
              range: 'All',
              preparer: 'SCD',
              reviewer: 'GGC, TMD, CCTR',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'credit-assessment',
          name: 'Credit period and credit amount (Assessment, extending credit risk, or new credit limit)',
          thresholds: [
            {
              range: 'AED 0-25K',
              preparer: 'SM',
              reviewer: 'SCD, CRC, VPSC',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 25K-100K',
              preparer: 'SM',
              reviewer: 'CRC, VPSC',
              approver: 'President/BUH',
              inform: ''
            },
            {
              range: 'AED 100K-1M',
              preparer: 'SM',
              reviewer: 'SCD, CRC, VPSC',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 1M',
              preparer: 'SM',
              reviewer: 'SCD, CRC, President, FDIR, VPSC',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'price-discount',
          name: 'Price discount (Non-contractual other than Rebates, including Returns)',
          thresholds: [
            {
              range: 'Above AED 250K',
              preparer: 'SM',
              reviewer: 'FCTR, FDIR',
              approver: 'PRESIDENT',
              inform: ''
            }
          ],
          conditions: 'Refer to the relevant approved policy'
        },
        {
          id: 'credit-notes',
          name: 'Credit Notes (If CN is due to invoice correction)',
          thresholds: [
            {
              range: 'AED 0-250K',
              preparer: 'SM',
              reviewer: 'CRC, SCD',
              approver: '',
              inform: ''
            }
          ],
          conditions: 'If CN due to invoice correction with no AR impact'
        },
        {
          id: 'excess-credit',
          name: 'Sales in excess of Credit Limit',
          thresholds: [
            {
              range: 'AED 0-100K',
              preparer: 'CCTR',
              reviewer: 'SCD, FCTR',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 100K-1M',
              preparer: 'CCTR',
              reviewer: 'SCD, FDIR',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 1M-3.5M',
              preparer: 'CCTR',
              reviewer: 'SCD, FDIR',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above AED 3.5M',
              preparer: 'ACCTR',
              reviewer: 'CCTR, SCD, FDIR',
              approver: 'President, CFO',
              inform: ''
            }
          ],
          conditions: 'Refer to the approved Credit Management Policy'
        },
        {
          id: 'customer-master',
          name: 'Customer Master (Create/ Modify)',
          thresholds: [
            {
              range: 'All',
              preparer: 'CR',
              reviewer: 'FCTR',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'tender-submission',
          name: 'Tender Submission',
          thresholds: [
            {
              range: '≤ AED 5M',
              preparer: 'SM',
              reviewer: 'SCCTR, SCD, TMD',
              approver: '',
              inform: ''
            },
            {
              range: '> AED 5M',
              preparer: 'FM',
              reviewer: 'SCCTR, SCD, TMD, FDIR',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        }
      ]
    },
    {
      id: 'operations',
      name: 'Operations',
      color: '#7c3aed',
      icon: '⚙️',
      activities: [
        {
          id: 'pr-creation',
          name: 'PR Creation',
          thresholds: [
            {
              range: 'Above AED 5K',
              preparer: 'Per Policy',
              reviewer: 'Functional manager',
              approver: 'Per Policy',
              inform: ''
            }
          ],
          conditions: 'PR created for all values above AED 5K as per policy'
        },
        {
          id: 'direct-materials',
          name: 'Direct Materials Procurement (RM, PM, Co-packing)',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'CB/FM/PROJMGR',
              reviewer: 'PRM',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 500K-5M',
              preparer: 'CB',
              reviewer: 'FD/PROJDIR, FDIR, VCFD, GGC',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 5M-50M',
              preparer: 'CB',
              reviewer: 'FD/PROJDIR, FDIR, VCFD, VPSC/VPM/BHU, President/FH, GGC',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 50M',
              preparer: 'ACB',
              reviewer: 'FD/PROJDIR, FDIR/VCFD, VPSC/VPM, VPP, President/BUH, GGC',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'non-dt-capex',
          name: 'Non-D&T CAPEX',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'CB/FM/PROJMGR',
              reviewer: 'PRM',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 500K-5M',
              preparer: 'CB',
              reviewer: 'FD/PROJDIR, FDIR, D&T Dir, GGC',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 5M',
              preparer: 'ACB',
              reviewer: 'FD/PROJDIR, FDIR, D&T Dir, VPP, President/BUH, GGC',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'dt-capex',
          name: 'D&T CAPEX',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'CB/FM/PROJMGR',
              reviewer: 'PRM',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 500K-5M',
              preparer: 'CB',
              reviewer: 'FD/PROJDIR, FDIR, D&T Dir, GGC',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 5M',
              preparer: 'ACB',
              reviewer: 'FD/PROJDIR, FDIR, D&T Dir, VPP, President/BUH, GGC',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'opex-commodities',
          name: 'OPEX – Commodities',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'GGC, PCTR',
              reviewer: '',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 5M-25M',
              preparer: 'VPP, FDIR, VCFD, GGC',
              reviewer: '',
              approver: 'President',
              inform: ''
            },
            {
              range: 'AED 25M-50M',
              preparer: 'CB/ASP',
              reviewer: 'SCDIR, VCFD, FDIR, VPSC/VPM, VPP',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above AED 50M',
              preparer: 'CB/ASP',
              reviewer: 'SCDIR, VCFD, FDIR, VPP, COO',
              approver: 'President',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'mro',
          name: 'MRO (Maintenance, Repair, and Operations)',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'SP/CB',
              reviewer: 'SCM, PCTR, PRM',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 500K-5M',
              preparer: 'SP/CB',
              reviewer: 'SCDIR, VCFD, FDIR',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 5M-25M',
              preparer: 'SP/CB',
              reviewer: 'SCDIR, VCFD, FDIR, VPSC/VPM',
              approver: 'President',
              inform: ''
            },
            {
              range: 'AED 25M-50M',
              preparer: 'SP/CB',
              reviewer: 'SCDIR, VCFD, FDIR, VPSC/VPM, VPP',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above AED 50M',
              preparer: 'CB/ASP',
              reviewer: 'SCDIR, VCFD, FDIR, VPP, COO',
              approver: 'President',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'services-operations',
          name: 'Services Operations (lease/rent, facilities, logistics, transport, etc.)',
          thresholds: [
            {
              range: 'AED 0-100K',
              preparer: 'CB/FM, PRM, PCTRN',
              reviewer: '',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 100K-2.5M',
              preparer: 'FM, PRM, FCTRN',
              reviewer: '',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 2.5M-10M',
              preparer: 'FDIR, PRD',
              reviewer: '',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above AED 10M',
              preparer: 'ACB',
              reviewer: 'FDIR, VCFD, PRD, VPP, VPM',
              approver: 'President',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'services-others',
          name: 'Services Others (consultants, legal, Finance, IT, HR, etc.)',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'CB/FM, PCTRN',
              reviewer: '',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 500K-2.5M',
              preparer: 'FD, PRM, FCTR',
              reviewer: '',
              approver: 'President',
              inform: ''
            },
            {
              range: 'AED 2.5M-10M',
              preparer: 'FDIR, PRD',
              reviewer: '',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above AED 10M',
              preparer: 'ACB',
              reviewer: 'FDIR, VPP, VPSC',
              approver: 'President',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'emergency-procurement',
          name: 'Emergency Procurement/Unbudgeted',
          thresholds: [
            {
              range: 'AED 0-250K',
              preparer: 'CB',
              reviewer: 'PRM, FM',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 250K-500K',
              preparer: 'CB',
              reviewer: 'PRD, FM, FD',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 500K-2.5M',
              preparer: 'FM, FD, VPP',
              reviewer: '',
              approver: 'COO',
              inform: ''
            },
            {
              range: 'Above AED 2.5M',
              preparer: 'CB/FM, FDIR, VPP, COO',
              reviewer: '',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'capex-budgeted',
          name: 'Capex Appropriation Request (AR) – Budgeted',
          thresholds: [
            {
              range: 'AED 0-100K',
              preparer: 'FM',
              reviewer: 'PROJDIR/FD',
              approver: 'President/BUH',
              inform: ''
            },
            {
              range: 'AED 100K-500K',
              preparer: 'FM',
              reviewer: 'PROJDIR/FD',
              approver: 'FDIR, VPM/VPSC, VPP',
              inform: ''
            },
            {
              range: 'AED 500K-1M',
              preparer: 'FM',
              reviewer: 'PROJDIR/FD',
              approver: 'FDIR, VCFD, VPSC/VPM, VPP, President',
              inform: ''
            },
            {
              range: 'Above AED 1M',
              preparer: 'AFM',
              reviewer: 'PROJDIR/FD',
              approver: 'FDIR/VPVC, President/FH, COO',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'capex-unbudgeted',
          name: 'Capex Appropriation Request (AR) – Unbudgeted',
          thresholds: [
            {
              range: 'AED 0-100K',
              preparer: 'FM',
              reviewer: 'PROJDIR/FD',
              approver: 'VCFD, President/BUH, COO',
              inform: ''
            },
            {
              range: 'AED 100K-500K',
              preparer: 'FM',
              reviewer: 'PROJDIR',
              approver: 'FDIR, VPM/VPSC, VPP, President/BUH',
              inform: ''
            },
            {
              range: 'AED 500K-1M',
              preparer: 'FM',
              reviewer: 'PROJDIR',
              approver: 'FDIR, VCFD, VPSC/VPM, VPP, President',
              inform: ''
            },
            {
              range: 'Above AED 1M',
              preparer: 'AFM',
              reviewer: 'PROJDIR',
              approver: 'FDIR/VPVC, President/FH, COO',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'quality-withdrawal',
          name: 'Quality - Product Withdrawal',
          thresholds: [
            {
              range: 'All',
              preparer: 'QCD',
              reviewer: 'FDIR, CQA&RD',
              approver: 'VPRD/VPM',
              inform: 'CEO/CFO'
            }
          ],
          conditions: ''
        },
        {
          id: 'quality-recall',
          name: 'Quality - Product Recall',
          thresholds: [
            {
              range: 'All',
              preparer: 'QCD',
              reviewer: 'FDIR, CQA&RD',
              approver: 'VPRD/VPM, VPSC, President',
              inform: 'CFO'
            }
          ],
          conditions: ''
        },
        {
          id: 'writeoff',
          name: 'Write-Off (Annual Aggregate Value)',
          thresholds: [
            {
              range: 'AED 0-3M',
              preparer: 'FM',
              reviewer: 'PROJDIR, PCTR',
              approver: 'FDIR, VPP, President, COO',
              inform: ''
            },
            {
              range: 'AED 3M-50M',
              preparer: 'FM',
              reviewer: 'PROJDIR',
              approver: 'FDIR, VCFD, VPSC/VPM, VPP, President, CEO',
              inform: ''
            },
            {
              range: 'Above AED 50M',
              preparer: 'FM',
              reviewer: 'FDIR, VPSC/VPM',
              approver: 'President/FH, VCFD, COO',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'inventory-writeoff',
          name: 'Inventory Write off, variance adjustment & valuation (Annual aggregate value)',
          thresholds: [
            {
              range: 'AED 0-100K',
              preparer: 'FM',
              reviewer: 'PCTR, FCTRN',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 100K-1M',
              preparer: 'FM',
              reviewer: 'VPM/VPSC, VCFD, FDIR',
              approver: 'President',
              inform: ''
            },
            {
              range: 'AED 1M-3.5M',
              preparer: 'FM',
              reviewer: 'VPM/VPSC, VCFD, FDIR',
              approver: 'President',
              inform: ''
            },
            {
              range: 'Above AED 3.5M',
              preparer: 'FM',
              reviewer: 'VPM/VPSC, VCFD, FDIR',
              approver: 'President, COO',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'supplier-standard-contracts',
          name: 'Supplier/Vendor Management - Standard Contracts',
          thresholds: [
            {
              range: 'All',
              preparer: 'PRM',
              reviewer: 'VPP, GGC, FDIR',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'supplier-payment-terms',
          name: 'Supplier/Vendor Management - Payment Terms < 45 days',
          thresholds: [
            {
              range: 'Below 45 days',
              preparer: 'CB',
              reviewer: '',
              approver: 'VPP',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'advance-with-guarantee',
          name: 'Advance Payment (with bank guarantee)',
          thresholds: [
            {
              range: 'All',
              preparer: 'VPP',
              reviewer: 'FDIR, VPF',
              approver: 'GGC',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'advance-without-guarantee',
          name: 'Advance Payment (without bank guarantee)',
          thresholds: [
            {
              range: 'AED 0-1M',
              preparer: 'PROJDIR/PRM',
              reviewer: 'FDIR, VPP',
              approver: 'GGC',
              inform: ''
            },
            {
              range: 'AED 1M-3.5M',
              preparer: 'PROJDIR/PRM',
              reviewer: 'FDIR, COO',
              approver: 'GGC',
              inform: ''
            },
            {
              range: 'Above AED 3.5M',
              preparer: 'PROJDIR/PRM',
              reviewer: 'FDIR, COO, CFO',
              approver: 'GGC',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'vendor-creation',
          name: 'Vendor Creation/Modification',
          thresholds: [
            {
              range: 'All',
              preparer: 'DS',
              reviewer: 'PRM',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'vendor-blocking',
          name: 'Vendor Blocking/Blacklisting',
          thresholds: [
            {
              range: 'All',
              preparer: 'PRM',
              reviewer: 'PRD, QA DIRECTOR',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'liquidated-damages',
          name: 'Waivers of Liquidated Damages',
          thresholds: [
            {
              range: 'AED 0-500K',
              preparer: 'VPP',
              reviewer: 'FDIR/VPF',
              approver: 'GC',
              inform: ''
            },
            {
              range: 'Above AED 500K',
              preparer: 'VPP',
              reviewer: 'FDIR/VPF',
              approver: 'GC',
              inform: ''
            }
          ],
          conditions: ''
        }
      ]
    },
    {
      id: 'legal',
      name: 'Legal',
      color: '#ea580c',
      icon: '⚖️',
      activities: [
        {
          id: 'legal-action-third-party',
          name: 'Legal action or arbitration against third party (excluding debt recovery)',
          thresholds: [
            {
              range: 'AED 0-5M',
              preparer: 'Legal Department',
              reviewer: 'President, FDIR',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 5M-20M',
              preparer: 'Legal Department',
              reviewer: 'GGC, President, CFO',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 20M',
              preparer: 'Legal Department',
              reviewer: 'GGC, President, CEO',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'legal-action-debt-recovery',
          name: 'Legal action against third party (debt recovery)',
          thresholds: [
            {
              range: 'AED 0-5M',
              preparer: 'CRC, FCTR',
              reviewer: 'President, FDIR',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 5M',
              preparer: 'CRC, FCTR',
              reviewer: 'President, CFO',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'legal-action-employees',
          name: 'Legal action against employees',
          thresholds: [
            {
              range: 'Up to Grade 5',
              preparer: 'HRBP',
              reviewer: 'GGC',
              approver: '',
              inform: ''
            },
            {
              range: 'Above Grade 5',
              preparer: 'HRBP',
              reviewer: 'GGC, CPO',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'settlement-withdrawal',
          name: 'Settlement/Withdrawal of claims and lawsuits',
          thresholds: [
            {
              range: 'AED 0-20M',
              preparer: 'Legal Department',
              reviewer: 'President, FDIR',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 20M',
              preparer: 'Legal Department',
              reviewer: 'President, GGC, CFO',
              approver: 'Board',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'legal-defense-strategy',
          name: 'Legal plead / defense strategy in legal action instigated by third parties',
          thresholds: [
            {
              range: 'AED 0-5M',
              preparer: 'Legal Department',
              reviewer: 'President',
              approver: '',
              inform: ''
            },
            {
              range: 'AED 5M-20M',
              preparer: 'Legal Department',
              reviewer: 'President, CFO',
              approver: '',
              inform: ''
            },
            {
              range: 'Above AED 20M',
              preparer: 'Legal Department',
              reviewer: 'CEO, CFO',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'standard-legal-terms',
          name: 'Standard legal terms and conditions in the contract',
          thresholds: [
            {
              range: 'All',
              preparer: 'DS',
              reviewer: 'Legal Manager',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      color: '#0891b2',
      icon: '📢',
      activities: [
        {
          id: 'annual-marketing-plans',
          name: 'Development of annual marketing plans',
          thresholds: [
            {
              range: 'All',
              preparer: 'MVP Marketing',
              reviewer: '',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'campaign-development-budgeted',
          name: 'Campaign development and execution plans (ATL) - Within budgeted amount',
          thresholds: [
            {
              range: 'Within budget',
              preparer: 'CMM/CDF',
              reviewer: 'CTRN',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'atl-campaigns-exceeding',
          name: 'ATL campaigns exceeding the approved Group DME budget',
          thresholds: [
            {
              range: 'Up to 5% over budget',
              preparer: 'CMM/TMM',
              reviewer: 'FDIR, TMD',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'trademark-new',
          name: 'New or cancelled trademarks and other intellectual property registrations (excluding renewals)',
          thresholds: [
            {
              range: 'All',
              preparer: 'CMM/CD',
              reviewer: 'CGO, GGC',
              approver: '',
              inform: ''
            }
          ],
          conditions: ''
        },
        {
          id: 'trademark-renewals',
          name: 'Trademark and intellectual property registration renewals',
          thresholds: [
            {
              range: 'All',
              preparer: 'CMM/CD',
              reviewer: 'GGC',
              approver: '',
              inform: ''
            }
          ],
          conditions: 'Press Releases and marketing claims require review and recommendation from GGC'
        }
      ]
    }
  ],
  
  abbreviations: {
    'CEO': 'Chief Executive Officer',
    'CFO': 'Chief Financial Officer',
    'COO': 'Chief Operating Officer',
    'GGC': 'Group General Counsel',
    'HGRC': 'Head of Group Risk & Compliance',
    'ARC': 'Audit & Risk Committee',
    'NRC': 'Nomination & Remuneration Committee',
    'SIIC': 'Strategy, Investment & Innovation Committee',
    'LT': 'Leadership Team',
    'BOD': 'Board of Directors',
    'MGRC': 'Manager Group Risk & Compliance',
    'RMC': 'Risk Management Committee',
    'FH': 'Function Head',
    'BUH': 'Business Unit Head',
    'FM': 'Function Manager',
    'President': 'President',
    'FDIR': 'Finance Director',
    'VPFGC': 'Vice President Finance Group Controller',
    'TDIR': 'Treasury Director',
    'FCTR': 'Finance Controller',
    'VPCF': 'Vice President Corporate Finance',
    'VPCC': 'Vice President Corporate Communications',
    'DSN': 'Designation',
    'CM': 'Category Manager',
    'FD': 'Finance Director',
    'BUD': 'Budget',
    'BUFD': 'Business Unit Finance Director',
    'TRYDIR': 'Treasury Director',
    'ADM': 'Area Development Manager',
    'TMD': 'Trade Marketing Director',
    'SCD': 'Sales Channel Director',
    'CMD': 'Channel Marketing Director',
    'CCTR': 'Category Controller',
    'STM': 'Senior Trade Manager',
    'TMA': 'Trade Marketing Assistant',
    'STMM': 'Senior Trade Marketing Manager',
    'SM': 'Sales Manager',
    'CRC': 'Credit Risk Controller',
    'VPSC': 'Vice President Supply Chain',
    'SC': 'Supply Chain',
    'CR': 'Credit Representative',
    'SCCTR': 'Supply Chain Controller',
    'ACCTR': 'Accounts Controller',
    'CB': 'Commercial Buyer',
    'PROJMGR': 'Project Manager',
    'PRM': 'Procurement Manager',
    'PROJDIR': 'Project Director',
    'VCFD': 'Vice President Corporate Finance Director',
    'VPM': 'Vice President Manufacturing',
    'VPP': 'Vice President Procurement',
    'SP': 'Senior Procurement',
    'SCDIR': 'Supply Chain Director',
    'ASP': 'Assistant Senior Procurement',
    'SCM': 'Supply Chain Manager',
    'PCTR': 'Procurement Controller',
    'FCTRN': 'Finance Controller',
    'PRD': 'Procurement Director',
    'ACB': 'Assistant Commercial Buyer',
    'AFD': 'Assistant Finance Director',
    'AFM': 'Assistant Finance Manager',
    'VPVC': 'Vice President Vice Chairman',
    'QCD': 'Quality Control Director',
    'CQA&RD': 'Chief Quality Assurance & R&D',
    'VPRD': 'Vice President Research & Development',
    'WHM': 'Warehouse Manager',
    'SWHM': 'Senior Warehouse Manager',
    'WHE': 'Warehouse Executive',
    'VPF': 'Vice President Finance',
    'GCN': 'Group Controller',
    'DS': 'Data Specialist',
    'QA': 'Quality Assurance',
    'MVP': 'Marketing Vice President',
    'CMM': 'Category Marketing Manager',
    'CDFCT': 'Category Development Forecast',
    'RN': 'Regional Network',
    'TMM': 'Trade Marketing Manager',
    'DME': 'Direct Marketing Expenses',
    'CD': 'Creative Director',
    'GGO': 'Group General Office',
    'HRBP': 'Human Resources Business Partner',
    'CPO': 'Chief People Officer',
    'CGO': 'Chief Growth Officer',
    'DM': 'Department Manager',
    'DIR': 'Director',
    'TRFDIR': 'Treasury Finance Director',
    'FC': 'Finance Controller',
    'SVP M&A': 'Senior Vice President Mergers & Acquisitions',
    'PSGR': 'President Senior Group Representative',
    'OR': 'Operations Representative',
    'FMFD': 'Finance Manager Finance Director',
    'CDF': 'Category Development Forecast',
    'CTRN': 'Controller',
    'GC': 'General Counsel',
    'CC': 'Category Controller'
  }
};

// Make data globally available
window.doaData = doaData;
