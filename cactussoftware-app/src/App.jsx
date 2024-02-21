import './App.css'
import Router from './router/Router';
import Footer from "./shared/footer/Footer";
import Navbar from "./shared/navbar/Navbar";
import WhatsappPopUp from './shared/whatsapp-popup/WhatsappPopUp';


function App() {
  return (
    <>
      <Navbar />
      <Router />
      <WhatsappPopUp />
      <Footer />
    </>
  )
}

export default App
