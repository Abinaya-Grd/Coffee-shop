import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;
