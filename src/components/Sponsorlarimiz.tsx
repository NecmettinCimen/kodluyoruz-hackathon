import * as React from 'react';

const Sponsorlar = () => (
    <div style={{
        height: 250
    }}>
        <h1 style={{ textAlign: 'center' }}>Sponsorlarımız</h1>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ margin: 50, height: 100, width: 50, flex: 1, }}>
                <img src={"/assets/kablosuz999.png"} style={{ height: 100, display:'block', margin:'0 auto' }} />
            </div>
            {Box("/assets/kodluyoruz999.png")}
            {Box("/assets/LogoSmile999.png")}
        </div>
    </div>
);

const Box = (img: string) => (
    <div style={{ margin: 50, height: 100, width: 50, flex: 1 }}>
        <img src={img} style={{ height: 100, width:300 }} />
    </div>
)

export default Sponsorlar