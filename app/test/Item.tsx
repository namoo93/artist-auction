'use client';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

function a(index: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index % 2) {
        resolve('asd');
      } else {
        reject(1);
      }
    }, index * 100);
  });
}

export default function Item({ index }: { index: number }) {
  const query = useQuery({
    queryKey: ['asd' + index],
    queryFn: () => a(index),
    suspense: true,
    retry: 0,
  });

  console.table(query);
  console.log('isLoading', query.isLoading);
  console.log('isPending', query.isPending);
  return <div>suck</div>;
}
