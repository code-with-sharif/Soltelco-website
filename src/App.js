// import logo from './logo.svg';
import './App.css';
import Mainheader from './Components/Header/Mainheader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home';
import Headerup from './Components/Header/Headerup';

import About from './Components/About/About';
import Blogs from './Components/Blog/Blogs';
import Kaashplus from './Components/khas/Kaashplus';
import Services from './Components/Services/Services';
import Support from './Components/Support/Support';
import Find from './Components/Support/Find';
import Faqsmain from './Components/Support/Faqsmain';
import Esimprovisioning from './Components/Services/Esimprovisioning ';
import Bundleservice1 from './Components/Services/Bundleservice1';
import Paymentmethode from './Components/Services/Paymentmethode';
import Paymentmethode22 from './Components/Services/Paymentmethode22';
import LoadingBars from './Components/Services/Paymentmethode22';
import Existingsimnumber from './Components/Services/Existingsimnumber';
import Esimsupporteddevice from './Components/Services/Esimsupporteddevice';
import Choosenumber from './Components/Services/Choosenumber';
import Mainform from './Components/Services/Mainform';
import Customerinformation from './Components/Services/Customerinformation';
import Lulmorenumbr from './Components/Services/Lulmorenumbr';
import Databundle from './Components/Dataandvoicebundle/Databundle';
import Career from './Components/Support/Career';
import MySoltelco from './Components/MySoltelco';
function App() {

  return (
    <>
  
    <BrowserRouter>
    <Headerup  />
    <Mainheader />
      <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/kurtugul" element={<Services />} />
           <Route path="/choosenumber" element={<Choosenumber/>} />
           {/* <Route path="/datavoivebundlemain" element={<Buildurplan />} /> */}
           <Route path="/databundle" element={<Databundle />} />
           <Route path="/mainform" element={<Mainform />} />
           <Route path="/customerinformation" element={<Customerinformation />} />
           <Route path="/esimprovisioning" element={<Esimprovisioning />} />
           <Route path="/bundleservice1" element={<Bundleservice1 />} />
           <Route path="/Paymentmethode" element={<Paymentmethode />} />
           <Route path="/loadingBars" element={<LoadingBars />} />
           <Route path="/existingsimnumber" element={<Existingsimnumber />} />
           <Route path="/esimsupporteddevice" element={<Esimsupporteddevice/>} />
           <Route path="/contact" element={<Support />} />
           <Route path="/find" element={<Find />} />
           <Route path="/faqs" element={<Faqsmain />} />
           <Route path="blogs" element={<Blogs />} />
           <Route path="/about" element={<About />} />
           <Route path="/Kaashplus" element={<Kaashplus />} />  
           <Route path="/lulmorenumbr" element={<Lulmorenumbr />} />  
           <Route path="/career" element={<Career />} />  
           
        <Route path="*"  target="_blank" element={<MySoltelco />} />
                      
      </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
