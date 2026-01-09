import Navbar from "../Components/Navbar";
import "../styles1/dashboard.css";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-title">
          <h1>Welcome back👋</h1>
          <p>Track your progress and keep improving</p>
        </div>
        <div className="profile">
          <button className="profile-button">Profile</button>
        </div>
      </div>
      <div className="stats-cards">
        <div className="card">
          <h2>Problems Solved</h2>
          <p>128</p>
        </div>
        <div className="card">
          <h2>Accuracy</h2>
          <p>86%</p>
        </div>
        <div className="card">
          <h2>Active Days</h2>
          <p>42</p>
        </div>
        <div className="card">
          <h2>Rank</h2>
          <p>512</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
