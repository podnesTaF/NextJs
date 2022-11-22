/** @format */

import { useRouter } from 'next/router';
import React from 'react';

const ClientPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojId]',
      query: { id: 'alex', clientprojId: 'projext' },
    });
  };

  return (
    <div>
      <h1>ClientPage</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientPage;
