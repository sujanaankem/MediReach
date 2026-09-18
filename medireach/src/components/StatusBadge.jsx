function StatusBadge({ status }) {
  const value = String(status || '').toLowerCase();

  const lookup = {
    active: 'success',
    completed: 'success',
    interested: 'success',
    converted: 'success',
    pending: 'warning',
    'will think about it': 'warning',
    'need more information': 'warning',
    'follow-up': 'info',
    'not interested': 'danger',
    overdue: 'danger',
    hot: 'danger',
    warm: 'warning',
    cold: 'neutral',
    inactive: 'neutral',
    negotiating: 'info',
  };

  return <span className={`status-badge ${lookup[value] || 'neutral'}`}>{status}</span>;
}

export default StatusBadge;
