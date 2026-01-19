import { BrowserRouter } from "react-router";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  return (
    // 👉 BrowserRouter should be mounted once at the root. BrowserRouter belongs to the app root, not routes
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
