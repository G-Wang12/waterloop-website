import React from 'react';

import { AboutEvent } from '../components/SustainableTech/AboutEvent';
import { Teams } from '../components/SustainableTech/Teams';
import { Contact } from '../components/SustainableTech/Contact';
import { FAQ } from '../components/SustainableTech/FAQ';
import { Hero } from '../components/SustainableTech/Hero';
import { Schedule } from '../components/SustainableTech/Schedule';
import { Sponsors } from '../components/SustainableTech/Sponsors';

const SustainableTechEvent: React.FC = () => (
  <div>
    <Hero />
    <AboutEvent />
    <Schedule />
    <Sponsors />
    <Teams />
    <FAQ />
    <Contact />
  </div>
);

export default SustainableTechEvent;
