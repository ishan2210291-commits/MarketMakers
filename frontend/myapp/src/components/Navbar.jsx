import { Link } from "react-router-dom"; //enables navigation without refreshing the page in single page application
//navabr is global navigation so it should only contain only primary pages
function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>
      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>
      <Link to="/modules" style={{ marginRight: "10px", color: "white" }}>
        Learn
      </Link>
      <Link to="/dashboard" style={{ marginRight: "10px", color: "white" }}>
        Dashboard
      </Link>
    </nav>
  );
}
export default Navbar;
