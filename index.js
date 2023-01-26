import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{color:'white',textAlign:'center',fontFamily:'-moz-initial',marginTop:'30px'}}>READING CORNER</h1>
    <App bookimg='img1.jpg' name='Naruto' author='Masashi Kishimoto' price='₹548' />
    <App bookimg='img2.jpg' name='Bhagwat Geeta' author='RR Varma' price='₹598' />
    <App bookimg='img3.jpg' name='A Thpousand Splendid Suns' author='Khaleo Hosseini' price='₹598' />
    <App bookimg='img4.jpg' name='Ikigai' author=' Francesc Miralles ' price='₹391' />
    <App bookimg='img5.jpg' name='Rich Dad Poor Dad' author='Robert T. Kitosaki' price='₹598' />
    <App bookimg='img6.jpg' name='Harry Potter' author='JK Rowling' price='₹344' />
  </React.StrictMode>
);


reportWebVitals();
