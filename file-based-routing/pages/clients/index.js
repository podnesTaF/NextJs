/** @format */

import React from 'react';
import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'alex', name: 'Alex' },
    { id: 'notAlex', name: 'NotAlex' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
