import * as React from 'react';
import { connect } from 'react-redux';
import AnaKisim from '../components/AnaKisim';
import BasvuruSureciDevamEdenH from '../components/BasvuruSureciDevamEdenH';
import Bosluk from '../components/Bosluk';
import Footer from '../components/Footer';
import Sponsorlar from '../components/Sponsorlarimiz';
import ToplulugaKatil from '../components/ToplulugaKatil';

const Home = () => (
  <div>
    <AnaKisim />
    <Bosluk />
    <BasvuruSureciDevamEdenH />
    <Bosluk />
    <ToplulugaKatil />
    <Bosluk />
    <Sponsorlar />
    <Bosluk />

  </div>
);

export default connect()(Home);
