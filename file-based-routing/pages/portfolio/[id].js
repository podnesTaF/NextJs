/** @format */

import { useRouter } from 'next/router';
import React from 'react';

const PorfolioItem = () => {
  const router = useRouter();

  return <div>PorfolioList {router.query.id}</div>;
};

export default PorfolioItem;
