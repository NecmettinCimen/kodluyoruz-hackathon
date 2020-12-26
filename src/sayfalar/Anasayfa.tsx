import * as React from 'react';
import { connect } from 'react-redux';
import AnaKisim from '../components/AnaKisim';
import Hackathon from '../components/Hackathon';
import Bosluk from '../components/Bosluk';
import Footer from '../components/Footer';
import Sponsorlar from '../components/Sponsorlarimiz';
import ToplulugaKatil from '../components/ToplulugaKatil';

const Anasayfa = () => (
  <div>
    <AnaKisim />
    <Bosluk />
    <Hackathon />
    <Bosluk />
    <ToplulugaKatil />
    <Bosluk />
    <Sponsorlar />
    <Bosluk />


  </div>
);

export default connect()(Anasayfa);
