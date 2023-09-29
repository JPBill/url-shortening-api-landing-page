import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-gray font-poppins">
      <div className="bg-white pb-36">
        <Header />
        <Hero />
      </div>

      <Shortener />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
