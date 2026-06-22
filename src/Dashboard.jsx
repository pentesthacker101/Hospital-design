import './dashboard.css';
import { systemSignals } from './dashboardData';

function priorityClass(priority) {
  return priority.toLowerCase();
}

function Dashboard({ roles, activeRoleId, onRoleChange, onLogout }) {
  const role = roles.find((item) => item.id === activeRoleId) ?? roles[0];

  return (
    <main className="dashboard-page" style={{ '--role-accent': role.accent }}>
      <aside className="dashboard-sidebar" aria-label="Role dashboards">
        <div className="dashboard-brand">
          <div className="dashboard-brand-mark" aria-hidden="true">L</div>
          <div>
            <strong>Lifeline EMR</strong>
            <span>MUST Teaching Hospital</span>
          </div>
        </div>

        <nav className="role-nav">
          {roles.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === role.id ? 'active' : ''}
              onClick={() => onRoleChange(item.id)}
              aria-pressed={item.id === role.id}
            >
              <span>{item.navLabel}</span>
              <small>{item.tag}</small>
            </button>
          ))}
        </nav>

        <div className="system-signals">
          {systemSignals.map((signal) => (
            <div className="system-signal" key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <small>{signal.detail}</small>
            </div>
          ))}
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <span className="dashboard-kicker">Role-based dashboard</span>
            <h1>{role.title}</h1>
            <p>{role.focus}</p>
          </div>

          <div className="dashboard-user">
            <div>
              <span>Signed in as</span>
              <strong>{role.user}</strong>
            </div>
            <button type="button" onClick={onLogout}>Logout</button>
          </div>
        </header>

        <section className="metric-grid" aria-label={`${role.title} metrics`}>
          {role.metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.detail}</small>
            </article>
          ))}
        </section>

        <section className="dashboard-layout">
          <article className="dashboard-card worklist-card">
            <div className="card-heading">
              <span>Priority worklist</span>
              <strong>Today</strong>
            </div>

            <div className="worklist">
              {role.worklist.map((item) => (
                <div className="worklist-row" key={`${item.patient}-${item.context}`}>
                  <div>
                    <strong>{item.patient}</strong>
                    <span>{item.context}</span>
                  </div>
                  <div className="worklist-status">
                    <span>{item.status}</span>
                    <b className={priorityClass(item.priority)}>{item.priority}</b>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card actions-card">
            <div className="card-heading">
              <span>Core workflow</span>
              <strong>Brief aligned</strong>
            </div>

            <ol className="action-list">
              {role.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ol>
          </article>

          <article className="dashboard-card module-card">
            <div className="card-heading">
              <span>Modules</span>
              <strong>Prototype scope</strong>
            </div>

            <div className="module-grid">
              {role.modules.map((module) => (
                <span key={module}>{module}</span>
              ))}
            </div>
          </article>

          <article className="dashboard-card safety-card">
            <div className="card-heading">
              <span>Safety and governance</span>
              <strong>Active checks</strong>
            </div>

            <ul className="alert-list">
              {role.alerts.map((alert) => (
                <li key={alert}>{alert}</li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
