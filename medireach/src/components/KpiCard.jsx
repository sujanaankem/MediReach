function KpiCard({ icon, title, value, trend, tone }) {
  return (
    <div className="kpi-card">
      <div className="kpi-icon" data-tone={tone}>{icon}</div>
      <div className="kpi-text">
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
      <div className="trend-chip">{trend}</div>
    </div>
  );
}

export default KpiCard;
