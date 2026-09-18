import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const titleMap = {
  '/dashboard': 'Dashboard',
  '/managers': 'Marketing Managers',
  '/industries': 'Industries',
  '/visits': 'Visit & Marketing Details',
  '/leads': 'Leads & Follow-ups',
  '/reports': 'Reports & Analytics',
  '/settings': 'Settings',
};

function MainLayout() {
  const location = useLocation();
  const title = titleMap[location.pathname] || 'Dashboard';

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="content-shell">
        <Header title={title} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
