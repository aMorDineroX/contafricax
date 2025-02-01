import './styles/globals.css'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { ThemeToggle } from './components/ui/theme-toggle'

function App() {
  const chartData = [
    { month: 'Jan', revenus: 12450000, depenses: 8230000 },
    { month: 'Fév', revenus: 13200000, depenses: 7900000 },
    { month: 'Mar', revenus: 14100000, depenses: 8500000 },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="min-h-screen bg-background"
      >
        <Navbar />
        <main className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <motion.h1 
              initial={{ x: -20 }} 
              animate={{ x: 0 }}
              className="text-4xl font-bold"
            >
              Tableau de Bord Financier
            </motion.h1>
            <ThemeToggle />
          </div>

          <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Revenus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">+12,450,000 FCFA</p>
                <p className="text-sm text-muted-foreground">+12.3% par rapport au mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dépenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600">-8,230,000 FCFA</p>
                <p className="text-sm text-muted-foreground">-5.2% par rapport au mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">4,220,000 FCFA</p>
                <p className="text-sm text-muted-foreground">+8.7% par rapport au mois dernier</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow-sm mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Analyse Financière</h2>
            <BarChart width={800} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenus" fill="#2ecc71" />
              <Bar dataKey="depenses" fill="#e74c3c" />
            </BarChart>
          </motion.div>

          <div className="mt-6">
            <Button>Nouvelle Transaction</Button>
          </div>
        </main>
      </motion.div>
    </ThemeProvider>
  )
}

export default App
