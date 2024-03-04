import { useEffect, useState } from 'react';
import './App.css'
import Router from './router/Router';
import Footer from "./shared/footer/Footer";
import LoadingScreen from './shared/loadingScreen/LoadingScreen';
import Navbar from "./shared/navbar/Navbar";
import WhatsappPopUp from './shared/whatsapp-popup/WhatsappPopUp';


function App() {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, [])
  if (loading) { return <LoadingScreen /> }

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
