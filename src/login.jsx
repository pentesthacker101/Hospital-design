import medicalTeam from './assets/medical-team.svg';
import './login.css';

function LifelineMark() {
  return (
    <div className="lifeline-brand" aria-label="Lifeline">
      <svg className="lifeline-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path d="M31.9 9.2c4.2 0 7.7 3.4 7.7 7.7v2.3h2.3c4.2 0 7.7 3.4 7.7 7.7s-3.4 7.7-7.7 7.7h-2.3v2.3c0 4.2-3.4 7.7-7.7 7.7s-7.7-3.4-7.7-7.7v-2.3h-2.3c-4.2 0-7.7-3.4-7.7-7.7s3.4-7.7 7.7-7.7h2.3v-2.3c0-4.3 3.4-7.7 7.7-7.7Z" />
        <path d="M45.1 37.1c3.7 2.1 4.9 6.8 2.8 10.5s-6.8 4.9-10.5 2.8l-2-1.2-1.2 2c-2.1 3.7-6.8 4.9-10.5 2.8s-4.9-6.8-2.8-10.5l1.2-2-2-1.2c-3.7-2.1-4.9-6.8-2.8-10.5s6.8-4.9 10.5-2.8l2 1.2 1.2-2c2.1-3.7 6.8-4.9 10.5-2.8s4.9 6.8 2.8 10.5l-1.2 2 2 1.2Z" />
      </svg>
      <span>Lifeline</span>
    </div>
  );
}

export default function Login({ roles, activeRoleId, onRoleChange, onLogin }) {
  const activeRole = roles.find((role) => role.id === activeRoleId) ?? roles[0];

  return (
    <main className="login-page">
      <section className="login-shell" aria-label="Hospital staff login">
        <div className="login-illustration">
          <img src={medicalTeam} alt="Healthcare staff" />
        </div>

        <div className="login-panel">
          <form
            className="login-card"
            onSubmit={(event) => {
              event.preventDefault();
              onLogin();
            }}
          >
            <LifelineMark />

            <div className="login-copy">
              <h1>Welcome Back</h1>
              <p>Enter your staff ID to continue</p>
            </div>

            <label className="login-field">
              <span>Staff ID</span>
              <div className="login-input-wrap">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.75 5.25h14.5c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5H4.75c-.83 0-1.5-.67-1.5-1.5V6.75c0-.83.67-1.5 1.5-1.5Zm2.5 3.5h4.5m-4.5 3h3m5-2.25h2m-2 3h2m-10 2.75h10" />
                  <circle cx="9.25" cy="10.5" r="1.25" />
                </svg>
                <input
                  id="staff-id"
                  name="staff-id"
                  type="text"
                  placeholder="MUST-1001"
                  autoComplete="username"
                />
              </div>
            </label>

            <label className="login-field">
              <span>Password</span>
              <div className="login-input-wrap">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.25 10.25V8a4.75 4.75 0 0 1 9.5 0v2.25m-10 0h10.5c.83 0 1.5.67 1.5 1.5v6.5c0 .83-.67 1.5-1.5 1.5H6.75c-.83 0-1.5-.67-1.5-1.5v-6.5c0-.83.67-1.5 1.5-1.5Z" />
                  <path d="M12 14v2" />
                </svg>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
              </div>
            </label>

            <div className="login-role-picker" aria-label="Choose dashboard role">
              <span>Continue as</span>
              <div>
                {roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    className={role.id === activeRole.id ? 'active' : ''}
                    onClick={() => onRoleChange(role.id)}
                    aria-pressed={role.id === activeRole.id}
                  >
                    {role.navLabel}
                  </button>
                ))}
              </div>
            </div>

            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
