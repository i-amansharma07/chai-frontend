import openRoutes from "./routes/openRoutes";
import protectedRoutes from "./routes/protectedRoutes";

function App() {
  const isAuthenticated = false;
  const Routes = isAuthenticated ? protectedRoutes : openRoutes;

  return <Routes />;
}

export default App;
