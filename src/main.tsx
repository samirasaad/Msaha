import { StoreProvider } from "@/providers/StoreProvider.tsx";
import "@/services/http/interceptors.ts";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
