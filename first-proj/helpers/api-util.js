/** @format */

export async function getAllEvents() {
  const res = await fetch(
    'https://next-js-coure-default-rtdb.firebaseio.com/events.json'
  );
  const data = await res.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const AllEvents = await getAllEvents();

  return AllEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const res = await fetch(
    `https://next-js-coure-default-rtdb.firebaseio.com/events/${id}.json`
  );
  const event = await res.json();

  return event;
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
