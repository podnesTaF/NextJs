/** @format */

import { useRouter } from 'next/router';
import React from 'react';

const ClientprojId = () => {
  const router = useRouter();

  return (
    <div>
      ClientprojId with ids: {router.query.id} {router.query.clientprojId}
    </div>
  );
};

export default ClientprojId;
