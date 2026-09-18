import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './Portal.css';

const navItems = [
  { label: 'Overview', path: 'overview' },
  { label: 'Campaigns', path: 'campaigns' },
  { label: 'Audience', path: 'audience' },
  { label: 'Analytics', path: 'analytics' },
  { label: 'Automation', path: 'automation' },
  { label: 'Settings', path: 'settings' },
];

const summaryCards = [
  { label: 'Active campaigns', value: '32', tone: 'primary', trend: '+12%' },
  { label: 'Qualified leads', value: '4,860', tone: 'success', trend: '+18%' },
  { label: 'Conversion rate', value: '7.4%', tone: 'warning', trend: '+0.8%' },
  { label: 'Spent this month', value: '$48.2K', tone: 'accent', trend: '-3.1%' },
];

const campaigns = [
  { name: 'Heart Health Outreach', channel: 'Google Ads', status: 'Running', budget: '$8,400', reach: '184K', roi: '4.2x' },
  { name: 'Preventive Screenings', channel: 'Meta', status: 'Review', budget: '$5,650', reach: '92K', roi: '3.8x' },
  { name: 'Women’s Wellness', channel: 'Email', status: 'Scheduled', budget: '$3,200', reach: '46K', roi: '5.1x' },
  { name: 'Neurology Awareness', channel: 'LinkedIn', status: 'Paused', budget: '$2,980', reach: '31K', roi: '2.8x' },
];

const funnel = [
  { label: 'Impressions', value: '1.2M', percent: '100%' },
  { label: 'Clicks', value: '182K', percent: '15%' },
  { label: 'Leads', value: '14.6K', percent: '8%' },
  { label: 'Booked', value: '2.9K', percent: '2%' },
  { label: 'Diagnosed', value: '1.1K', percent: '0.8%' },
];

const team = [
  { name: 'Dr. Maya Shah', role: 'Medical Director', tasks: 'Reviewing campaign assets' },
  { name: 'Arjun Patel', role: 'Growth Lead', tasks: 'Optimizing ad spend' },
  { name: 'Nina Gomez', role: 'CRM Manager', tasks: 'Lead scoring updates' },
];

function OverviewScreen() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>Marketing dashboard</h1>
        </div>

        <div className="topbar-actions">
          <button type="button" className="ghost-btn">Export report</button>
          <button type="button" className="primary-btn">Create campaign</button>
        </div>
      </header>

      <section className="summary-grid">
        {summaryCards.map((card) => (
          <article key={card.label} className={`summary-card ${card.tone}`}>
            <div className="card-head">
              <span>{card.label}</span>
              <span className="trend">{card.trend}</span>
            </div>
            <strong>{card.value}</strong>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel performance-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Campaign performance</p>
              <h3>Lead generation</h3>
            </div>
            <button type="button" className="inline-btn">This month</button>
          </div>

          <div className="chart-wrap">
            <div className="bars" aria-label="campaign performance chart">
              <span style={{ height: '52%' }} />
              <span style={{ height: '66%' }} />
              <span style={{ height: '58%' }} />
              <span style={{ height: '82%' }} />
              <span style={{ height: '94%' }} />
              <span style={{ height: '76%' }} />
              <span style={{ height: '100%' }} />
              <span style={{ height: '88%' }} />
            </div>
            <div className="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
            </div>
          </div>
        </div>

        <div className="panel quick-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Audience</p>
              <h3>Top segments</h3>
            </div>
          </div>

          <div className="segment-list">
            <div>
              <span>35-49 women</span>
              <strong>28%</strong>
            </div>
            <div>
              <span>Corporate wellness</span>
              <strong>24%</strong>
            </div>
            <div>
              <span>High-risk screening</span>
              <strong>18%</strong>
            </div>
            <div>
              <span>New patient acquisition</span>
              <strong>16%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-grid">
        <div className="panel table-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Operations</p>
              <h3>Campaign pipeline</h3>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Channel</th>
                <th>Status</th>
                <th>Budget</th>
                <th>Reach</th>
                <th>ROI</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.name}>
                  <td>{campaign.name}</td>
                  <td>{campaign.channel}</td>
                  <td>
                    <span className={`status-pill ${campaign.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td>{campaign.budget}</td>
                  <td>{campaign.reach}</td>
                  <td>{campaign.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel aside-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Funnel</p>
              <h3>Lead journey</h3>
            </div>
          </div>

          <div className="funnel-list">
            {funnel.map((item) => (
              <div key={item.label} className="funnel-item">
                <div className="funnel-labels">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
                <div className="meter">
                  <span style={{ width: item.percent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-row">
        <div className="panel team-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Team activity</p>
              <h3>Current priorities</h3>
            </div>
          </div>

          <div className="team-list">
            {team.map((member) => (
              <div key={member.name} className="team-member">
                <div className="avatar">{member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
                <div>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                  <small>{member.tasks}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CampaignsScreen() {
  return (
    <div className="screen-card">
      <header className="topbar compact-header">
        <div>
          <p className="eyebrow">Campaigns</p>
          <h1>Channel performance</h1>
        </div>
        <button type="button" className="primary-btn">New campaign</button>
      </header>

      <div className="screen-grid">
        {campaigns.map((item) => (
          <div key={item.name} className="mini-panel">
            <div className="mini-heading">
              <strong>{item.name}</strong>
              <span className={`status-pill ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>{item.status}</span>
            </div>
            <p>{item.channel}</p>
            <div className="metric-row">
              <span>Budget</span>
              <strong>{item.budget}</strong>
            </div>
            <div className="metric-row">
              <span>Reach</span>
              <strong>{item.reach}</strong>
            </div>
            <div className="metric-row">
              <span>ROI</span>
              <strong>{item.roi}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AudienceScreen() {
  return (
    <div className="screen-card">
      <header className="topbar compact-header">
        <div>
          <p className="eyebrow">Audience</p>
          <h1>Patient segments</h1>
        </div>
      </header>

      <div className="screen-grid stats-grid">
        <div className="mini-panel">
          <p>Women 35-49</p>
          <strong>28%</strong>
          <small>High engagement</small>
        </div>
        <div className="mini-panel">
          <p>Corporate wellness</p>
          <strong>24%</strong>
          <small>Strong conversion</small>
        </div>
        <div className="mini-panel">
          <p>High-risk screening</p>
          <strong>18%</strong>
          <small>Priority outreach</small>
        </div>
        <div className="mini-panel">
          <p>New patient acquisition</p>
          <strong>16%</strong>
          <small>Fresh demand</small>
        </div>
      </div>
    </div>
  );
}

function AnalyticsScreen() {
  return (
    <div className="screen-card">
      <header className="topbar compact-header">
        <div>
          <p className="eyebrow">Analytics</p>
          <h1>Performance insights</h1>
        </div>
      </header>

      <div className="analytics-panel">
        <div className="line-graph" aria-label="performance analytics graph">
          <span style={{ height: '45%' }} />
          <span style={{ height: '52%' }} />
          <span style={{ height: '60%' }} />
          <span style={{ height: '75%' }} />
          <span style={{ height: '68%' }} />
          <span style={{ height: '86%' }} />
          <span style={{ height: '93%' }} />
          <span style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  );
}

function AutomationScreen() {
  return (
    <div className="screen-card">
      <header className="topbar compact-header">
        <div>
          <p className="eyebrow">Automation</p>
          <h1>Workflow automations</h1>
        </div>
      </header>

      <div className="screen-grid">
        <div className="mini-panel task-panel">
          <strong>Lead nurture</strong>
          <p>Send educational sequences after consultation request.</p>
          <span>Enabled</span>
        </div>
        <div className="mini-panel task-panel">
          <strong>CRM sync</strong>
          <p>Update patient priority tags when bookings are confirmed.</p>
          <span>Enabled</span>
        </div>
        <div className="mini-panel task-panel">
          <strong>Follow up alerts</strong>
          <p>Trigger care team review for high-intent leads within 12 hours.</p>
          <span>Watching</span>
        </div>
      </div>
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="screen-card">
      <header className="topbar compact-header">
        <div>
          <p className="eyebrow">Settings</p>
          <h1>Portal preferences</h1>
        </div>
      </header>

      <div className="settings-list">
        <div className="setting-row"><span>Branding</span><strong>Enabled</strong></div>
        <div className="setting-row"><span>Team permissions</span><strong>Managed</strong></div>
        <div className="setting-row"><span>Ad spend alerts</span><strong>On</strong></div>
        <div className="setting-row"><span>Auto-export reports</span><strong>Weekly</strong></div>
      </div>
    </div>
  );
}

function Portal() {
  return (
    <div className="portal-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">M</div>
          <div>
            <p className="eyebrow">Diagnostic network</p>
            <h2>MediReach</h2>
          </div>
        </div>

        <nav className="side-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={`/portal/${item.path}`}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="support-card">
          <p className="label">Performance pulse</p>
          <h3>+24% uplift</h3>
          <span>from last 30 days</span>
        </div>
      </aside>

      <main className="main-panel">
        <Routes>
          <Route path="/" element={<Navigate to="overview" replace />} />
          <Route path="/overview" element={<OverviewScreen />} />
          <Route path="/campaigns" element={<CampaignsScreen />} />
          <Route path="/audience" element={<AudienceScreen />} />
          <Route path="/analytics" element={<AnalyticsScreen />} />
          <Route path="/automation" element={<AutomationScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default Portal;
