import * as React from 'react';

const Sponsorlar = () => (
    <div style={{
        height: 250
    }}>
        <h1 className="header-text  textAlignCenter">Sponsorlarımız</h1>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ margin: 50, height: 100, width: 50, flex: 1, }}>
                <img src={"/assets/kablosuz999.png"} style={{ height: 100, display:'block', margin:'0 auto' }} />
            </div>
            {Box("/assets/kodluyoruz999.png")}
            {Box("/assets/logo-smile.png")}
        </div>
    </div>
);

const Box = (img: string) => (
    <div style={{ margin: 50, height: 100, width: 50, flex: 1 }}>
        <img src={img} style={{ height: 100, width:300 }} />
    </div>
)

export default Sponsorlar