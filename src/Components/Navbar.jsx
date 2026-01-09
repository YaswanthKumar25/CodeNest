import "../styles1/Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <h1>
            Code<span classNameName="title">Nest</span>
          </h1>
          <h3>A Unified Coding Platform</h3>
        </div>
        <ul>
          <li className="nav-link">Home</li>
          <li className="nav-link">Problems</li>
          <li className="nav-link">Discuss</li>
          <li className="nav-link">Analysis</li>
        </ul>
        <button className="button">Login</button>
      </nav>
    </>
  );
}
export default Navbar;
