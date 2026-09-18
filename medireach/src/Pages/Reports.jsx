function Reports() {
  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Insights</p>
          <h2>Reports & Analytics</h2>
        </div>
        <button type="button" className="primary-btn">Export Report</button>
      </div>

      <div className="panel-card">
        <div className="report-summary">
          <div className="summary-box"><span>Total Visits</span><strong>250</strong></div>
          <div className="summary-box"><span>Interested Leads</span><strong>85</strong></div>
          <div className="summary-box"><span>Follow-ups</span><strong>24</strong></div>
          <div className="summary-box"><span>Converted Leads</span><strong>32</strong></div>
          <div className="summary-box"><span>Not Interested</span><strong>18</strong></div>
        </div>
      </div>

      <div className="content-grid-2">
        <div className="panel-card">
          <h3>Visits by Manager</h3>
          <div className="bar-chart large-bars">
            {[40, 62, 50, 80, 68, 92].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
          </div>
        </div>

        <div className="panel-card">
          <h3>Lead Response</h3>
          <div className="donut-wrap">
            <div className="donut-chart small-donut"><span>58%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
