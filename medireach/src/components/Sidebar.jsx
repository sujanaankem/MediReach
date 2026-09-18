import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Marketing Managers', path: '/managers' },
  { label: 'Industries', path: '/industries' },
  { label: 'Visits', path: '/visits' },
  { label: 'Leads & Follow-ups', path: '/leads' },
  { label: 'Reports', path: '/reports' },
  { label: 'Settings', path: '/settings' },
  { label: 'Logout', path: '/login' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">M</div>
        <div>
          <span className="brand-subtitle">Diagnostic CRM</span>
          <h2>MediReach</h2>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
