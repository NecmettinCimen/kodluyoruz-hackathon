import * as React from 'react';

const BasvuruSureciDevamEdenH = () => (
    <div style={{
        background: '#E5FF46',
        height: 400

    }}>
        <div style={{ height: 25 }} />
        <h1 style={{ textAlign: 'center' }}>Başvuru Süreci Devam Eden Hackathonlar</h1>
        <div style={{ height: 100 }} />
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box />
            <Box />
            <Box />
        </div>
    </div>
);

const Box = () => (
    <div style={{ margin: 50, background: '#B191FF', height: 150, width: 50, flex: 1 }}>
        <div>
            <div className="row">
                <div className="col-6" style={{
                    height: 175, width: 175,
                    backgroundColor: 'red', 
                    borderRadius: 150,
                    justifyContent:'center',
                    alignSelf:'center'
                }}>
                </div>
                <div className="col-6">
                    <label>Baslik</label>
                    <br />
                    <label>Detay</label>
                    <br />
                    <label>Link</label>

                </div>
            </div>
        </div>
    </div>
)

export default BasvuruSureciDevamEdenH