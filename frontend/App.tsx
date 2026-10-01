import './appTheme.css'
import Dashboard from './pages/Dashboard'
import AdvancedTools from './pages/AdvancedTools'

export default function App() {
  return window.location.hash === '#tools' ? <AdvancedTools /> : <Dashboard />
}
