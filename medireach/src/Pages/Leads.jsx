import { useMemo, useState } from 'react';
import { getData } from '../services/storageService';
import StatusBadge from '../components/StatusBadge';

function Leads() {
  const data = useMemo(() => getData(), []);
  const [query, setQuery] = useState('');

  const rows = data.visits.filter((visit) => {
    const industry = data.industries.find((item) => item.id === visit.industryId);
    const manager = data.managers.find((item) => item.id === visit.managerId);
    const match = !query || industry?.name.toLowerCase().includes(query.toLowerCase()) || manager?.name.toLowerCase().includes(query.toLowerCase());
    return match;
  });

  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Pipeline</p>
          <h2>Leads & Follow-ups</h2>
        </div>
      </div>

      <div className="panel-card">
        <div className="filter-row">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by industry or manager" />
          <button type="button" className="light-btn">Search</button>
          <button type="button" className="light-btn">Reset</button>
        </div>

        <table className="data-table compact-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Industry</th>
              <th>Manager</th>
              <th>Visit Date</th>
              <th>Response</th>
              <th>Priority</th>
              <th>Lead Status</th>
              <th>Follow-up Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((visit) => {
              const industry = data.industries.find((item) => item.id === visit.industryId);
              const manager = data.managers.find((item) => item.id === visit.managerId);
              return (
                <tr key={visit.id}>
                  <td>{visit.id}</td>
                  <td>{industry?.name}</td>
                  <td>{manager?.name}</td>
                  <td>{visit.visitDate}</td>
                  <td><StatusBadge status={visit.response} /></td>
                  <td><StatusBadge status={visit.priority} /></td>
                  <td><StatusBadge status={visit.status} /></td>
                  <td>{visit.nextFollowUpDate || '—'}</td>
                  <td><div className="action-buttons"><button type="button" className="table-btn secondary">View</button><button type="button" className="table-btn secondary">Add Follow-up</button></div></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leads;
