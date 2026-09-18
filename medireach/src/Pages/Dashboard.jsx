import { useMemo } from 'react';
import { getData } from '../services/storageService';
import KpiCard from '../components/KpiCard';
import StatusBadge from '../components/StatusBadge';

function Dashboard() {
  const data = useMemo(() => getData(), []);

  const kpis = [
    { title: 'Total Managers', value: data.managers.length, icon: '👥', trend: '+8%', tone: 'blue' },
    { title: 'Total Industries', value: data.industries.length, icon: '🏢', trend: '+12%', tone: 'navy' },
    { title: 'Total Visits', value: data.visits.length, icon: '📍', trend: '+15%', tone: 'green' },
    { title: 'Interested Leads', value: data.visits.filter((v) => v.response === 'Interested').length, icon: '✅', trend: '+9%', tone: 'teal' },
    { title: 'Pending Follow-ups', value: data.followUps.filter((f) => f.status === 'Pending').length, icon: '⏳', trend: '+4%', tone: 'orange' },
    { title: 'Converted Leads', value: data.visits.filter((v) => v.status === 'Converted').length, icon: '🏆', trend: '+6%', tone: 'purple' },
  ];

  const todayFollowUps = [
    { industry: 'ABC Industries', manager: 'Priya Kumar', time: '10:30 AM', status: 'Pending' },
    { industry: 'Nova Tech Labs', manager: 'Rohit Sharma', time: '12:15 PM', status: 'Completed' },
    { industry: 'Sri Krishna Hospital', manager: 'Anusha Reddy', time: '2:15 PM', status: 'Overdue' },
  ];

  const recentVisits = data.visits.slice(0, 5).map((visit) => {
    const manager = data.managers.find((m) => m.id === visit.managerId);
    const industry = data.industries.find((i) => i.id === visit.industryId);
    return {
      ...visit,
      manager: manager?.name || 'N/A',
      industry: industry?.name || 'N/A',
    };
  });

  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Dashboard</h2>
        </div>
        <button type="button" className="primary-btn">This Month</button>
      </div>

      <div className="kpi-grid">
        {kpis.map((item) => (
          <KpiCard key={item.title} icon={item.icon} title={item.title} value={item.value} trend={item.trend} tone={item.tone} />
        ))}
      </div>

      <div className="content-grid-2">
        <div className="panel-card">
          <div className="panel-head">
            <h3>Visits Overview</h3>
            <button type="button" className="light-btn">Last 6 months</button>
          </div>
          <div className="chart-bars">
            {[42, 58, 50, 72, 68, 84].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-head">
            <h3>Lead Response</h3>
          </div>
          <div className="donut-wrap">
            <div className="donut-chart">
              <span>58%</span>
            </div>
            <ul className="legend-list">
              <li><em className="dot blue" />Interested</li>
              <li><em className="dot orange" />Think About It</li>
              <li><em className="dot red" />Not Interested</li>
              <li><em className="dot teal" />Need More Info</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-grid-3">
        <div className="panel-card">
          <div className="panel-head">
            <h3>Today's Follow-ups</h3>
          </div>
          <div className="list-stack">
            {todayFollowUps.map((item) => (
              <div className="mini-row" key={`${item.industry}-${item.time}`}>
                <div>
                  <strong>{item.industry}</strong>
                  <small>{item.manager}</small>
                </div>
                <div>
                  <small>{item.time}</small>
                  <StatusBadge status={item.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-card wide-card">
          <div className="panel-head">
            <h3>Recent Visits</h3>
          </div>
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Industry</th>
                <th>Manager</th>
                <th>Response</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentVisits.map((visit) => (
                <tr key={visit.id}>
                  <td>{visit.visitDate}</td>
                  <td>{visit.industry}</td>
                  <td>{visit.manager}</td>
                  <td>{visit.response}</td>
                  <td><StatusBadge status={visit.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel-card">
        <div className="panel-head">
          <h3>Quick Actions</h3>
        </div>
        <div className="quick-actions">
          <button type="button" className="action-card">Add Manager</button>
          <button type="button" className="action-card">Add Industry</button>
          <button type="button" className="action-card">Record Visit</button>
          <button type="button" className="action-card">View Leads</button>
          <button type="button" className="action-card">Set Follow-up</button>
          <button type="button" className="action-card">View Reports</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
