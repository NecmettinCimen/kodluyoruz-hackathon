import * as React from 'react';
import { connect } from 'react-redux';
import AnaKisim from '../components/AnaKisim';
import Hackathon from '../components/Hackathon';
import Sponsorlar from '../components/Sponsorlarimiz';
import ToplulugaKatil from '../components/ToplulugaKatil';
import SSSKisim from '../components/SSSKisim';

const Home = () => (
  <div>
    <AnaKisim />
    <Hackathon />
    <ToplulugaKatil />
    <h1 style={{textAlign:'center'}}>SSS</h1>
    <SSSKisim />
    <Sponsorlar />
  </div>
);

export default connect()(Home);
