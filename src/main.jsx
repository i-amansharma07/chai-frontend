
import "./index.css";
import openRoutes from "./routes/openRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import { initApp } from "./App.jsx";



initApp({
openRoutes,
protectedRoutes
})


