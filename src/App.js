import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";

function App() {
  return (
    <Router>
      <main className="pt-30">
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
