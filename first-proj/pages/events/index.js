/** @format */

import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';

const AllEvents = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEvents;
