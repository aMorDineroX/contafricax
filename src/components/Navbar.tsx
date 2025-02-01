import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">₵</span>
        ContAfricaX
      </div>
      <ul className="nav-links">
        <li><a href="/dashboard">Tableau de bord</a></li>
        <li><a href="/transactions">Transactions</a></li>
        <li><a href="/reports">Rapports</a></li>
        <li><a href="/settings">Paramètres</a></li>
      </ul>
      <div className="nav-actions">
        <button className="btn-primary">Nouvelle Transaction</button>
      </div>
    </nav>
  )
}

export default Navbar
