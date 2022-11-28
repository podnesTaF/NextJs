/** @format */

import React from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';
import Head from 'next/head';

const StartingPage = ({ events }) => {
  return (
    <div>
      <Head>
        <title>Next try</title>
      </Head>
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default StartingPage;
