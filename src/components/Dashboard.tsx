import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Tableau de Bord Financier</h1>
        <div className="period-selector">
          <select defaultValue="month">
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="year">Cette année</option>
          </select>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Revenus</h3>
          <p className="amount positive">+ 12,450,000 FCFA</p>
          <span className="trend up">↑ 12.3%</span>
        </div>
        <div className="stat-card">
          <h3>Dépenses</h3>
          <p className="amount negative">- 8,230,000 FCFA</p>
          <span className="trend down">↓ 5.2%</span>
        </div>
        <div className="stat-card">
          <h3>Balance</h3>
          <p className="amount">4,220,000 FCFA</p>
          <span className="trend up">↑ 8.7%</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
