import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/public/Navbar";
import Sidebar from "./pages/public/Sidebar";
import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";
// import Calendar from "./pages/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Navbar />
            <Routes>
              {/* <Route path="/" Component={<Dashboard />} /> */}
              {/* <Route path="/team" Component={<Team />} />
              <Route path="/invoices" Component={<Invoices />} />
              <Route path="/contacts" Component={<Contacts />} />
              <Route path="/bar" Component={<Bar />} />
              <Route path="/form" Component={<Form />} />
              <Route path="/line" Component={<Line />} />
              <Route path="/pie" Component={<Pie />} />
              <Route path="/faq" Component={<FAQ />} />
              <Route path="/geography" Component={<Geography />} />
              <Route path="/calendar" Component={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
