import { BrowserRouter as Router } from 'react-router-dom';
import openRoutes from './routes/openRoutes'
import protectedRoutes from './routes/protectedRoutes'

function App() {
  const isAuthenticated = true
  const Routes = isAuthenticated ? protectedRoutes  : openRoutes 

  return <Routes />;
}

export default App;
