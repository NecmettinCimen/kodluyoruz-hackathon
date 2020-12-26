import * as React from 'react';
import Box from './Box';
import './Hackathon.css';

const Hackathon = () => (
    <div className='hackathon-container'>
        <div className="header">
        <h1 className="header-text">Başvuru Süreci Devam Eden Hackathonlar</h1>
        </div>
        <div className='box-container'>
            {Box('Web Hackathon Serisi #2','Lorem ipsum','30.01.2021')}
            {Box('Mobile App Hackathon Serisi #1','Lorem','16.01.2021')}
            {Box('Web Hackathon Serisi #1','Lorem','26.12.2020')}
        </div>
    </div>
);



export default Hackathon