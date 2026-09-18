function Settings() {
  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Configuration</p>
          <h2>Settings</h2>
        </div>
      </div>

      <div className="panel-card">
        <div className="settings-block">
          <h3>Profile</h3>
          <div className="form-grid two-col">
            <label><span>Name</span><input defaultValue="Admin User" /></label>
            <label><span>Email</span><input defaultValue="admin@medireach.com" /></label>
            <label><span>Phone</span><input defaultValue="9876543210" /></label>
            <label><span>Role</span><input defaultValue="Marketing Head" /></label>
          </div>
        </div>

        <div className="settings-block">
          <h3>Application Settings</h3>
          <div className="toggle-list">
            <label className="checkbox-row"><input type="checkbox" defaultChecked /> Notifications</label>
            <label className="checkbox-row"><input type="checkbox" defaultChecked /> Email reminders</label>
            <label className="checkbox-row"><input type="checkbox" /> Dark mode</label>
          </div>
        </div>

        <div className="settings-block">
          <h3>Account</h3>
          <div className="form-actions">
            <button type="button" className="light-btn">Change Password</button>
            <button type="button" className="danger-btn">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
