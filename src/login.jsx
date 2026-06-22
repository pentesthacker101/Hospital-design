import medicalTeam from './assets/medical-team.svg';
import './login.css';
import mustLogo from './assets/must log black.png';

function LifelineMark() {
  return (
    <div className="lifeline-brand" aria-label="Lifeline">
      <img
        src={mustLogo}
        alt="MUST Logo"
        className="must-logo"
      />
      <span>Electronic Medical Records system(EMRS)</span>
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


            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
