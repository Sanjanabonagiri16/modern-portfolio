import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarfieldBackground from '../components/StarfieldBackground';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      <StarfieldBackground />
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-black via-purple to-pastelPink bg-opacity-80">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
