import * as React from 'react';
import './AnaKisim.css';
import Bosluk from './Bosluk';

const AnaKisim = () => (
    <div className='container-main'>
        <div className="container-sub">
            <div className="image">
                <img src="/assets/mainimg.svg" alt="Photo" />
            </div>
            <div className="content">
                <div className="content-header">
                    Kodluyoruz Hackathon'ları ile yeteneklerini geliştir
                    </div>
                <div className="content-text">
                    <p>Kodlama becerilerini göstermek isteyen gençler, zorlu mücadele sizleri bekliyor</p>
                </div>
            </div>
        <Bosluk />
        </div>
    </div>
);






export default AnaKisim