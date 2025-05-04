import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Star Wars API</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar