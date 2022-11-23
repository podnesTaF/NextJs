/** @format */

import React from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

const StartingPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default StartingPage;
