'use client';

import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/query-core';
import Item from './Item';
import { useQueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMemo } from 'react';
// import ListUsers from './list-users';
// import { User } from '../types';
function dummy() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('test');
    }, 1000);
  });
}

async function getUsers() {
  const res = await dummy();
  // const users = await res.json();
  return res;
}

export default async function Hydation() {
  const queryClient = useQueryClient();
  const dehydratedState = useMemo(() => dehydrate(queryClient), []);

  return (
    <Hydrate
      state={dehydratedState}
      queryClient={queryClient}>
      <Item />
    </Hydrate>
  );
}
