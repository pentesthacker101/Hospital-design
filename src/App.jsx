import { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './login';
import { roles } from './dashboardData';

function App() {
  const [activeRoleId, setActiveRoleId] = useState(roles[0].id);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Login
        roles={roles}
        activeRoleId={activeRoleId}
        onRoleChange={setActiveRoleId}
        onLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  return (
    <Dashboard
      roles={roles}
      activeRoleId={activeRoleId}
      onRoleChange={setActiveRoleId}
      onLogout={() => setIsLoggedIn(false)}
    />
  );
}

export default App;
