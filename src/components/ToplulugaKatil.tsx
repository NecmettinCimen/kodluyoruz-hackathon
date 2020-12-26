import * as React from 'react';

const ToplulugaKatil = () => (
    <div style={{
        background: '#FFCC9C',
        height: 250
    }}>
        <h1 style={{ textAlign: 'center' }}>Topluluğa katıl</h1>
        <p>Sen de Discord sunucumuza katılarak, etkinliklerden yarışmalardan haberdar olabilir ve yüzlerce kullanıcıyla süregeen etkinliklere katılma şansı yakalayabilirsin.   </p>
        <div className="nav-item" style={{justifyContent:'center',alignSelf:'center', flex:1}}>
            <a className="kodluyoruz-turuncu-button ml-1 nav-link" style={{width:200, textAlign:'center'}} href="/">Hemen Katıl</a>
        </div>
    </div>
);

export default ToplulugaKatil