function Header({ title, subtitle, userName = 'Admin', role = 'Marketing Head' }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button type="button" className="menu-button">☰</button>
        <div>
          <p className="header-kicker">MediReach</p>
          <h1>{title}</h1>
        </div>
      </div>

      <div className="header-right">
        <span className="notification-bell">🔔</span>
        <div className="user-meta">
          <div className="avatar-circle">A</div>
          <div>
            <strong>{userName}</strong>
            <small>{role}</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
