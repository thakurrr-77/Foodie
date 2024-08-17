import { Link } from "react-router-dom"


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand fs-1 fst-italic" > Foodie </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        <Link to="/login" className="nav-link" href="#">Login</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
