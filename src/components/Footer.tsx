import * as React from 'react';
import './Footer.css'
const Footer = () => (
   <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
   }} className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
         <div style={{ flex: 1 }} className="mt-8 text-sm leading-6 text-gray-400 md:mt-0 md:order-1">
            <p>© 2020 Kodluyoruz<a href="https://cdn.sanity.io/files/9kdepi1d/production/a9971b686af8f40fed30a4b2deba0c4fce31b5b7.pdf" rel="noreferrer" target="_blank" className="underline hover:text-orange-400"> Çerez Politikası</a>, <a href="https://cdn.sanity.io/files/9kdepi1d/production/d5b01329809f92dfbd03e6b103cb65c58d85fd9b.pdf" rel="noreferrer" target="_blank" className="underline hover:text-orange-400">Kişisel Veriler Korunması Başvuru Formu</a></p>
         </div>
        
      </div>
);

export default Footer