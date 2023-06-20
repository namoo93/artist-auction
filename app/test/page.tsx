'use client';
import React, { Suspense } from 'react';
import Item from './Item';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Test() {
  return (
    <div>
      {Array.from({ length: 20 }, (_, index) => (
        <ErrorBoundary fallback={<Skeleton />}>
          <Suspense fallback={<Skeleton highlightColor={'#ff0000'} />}>
            <Item index={index} />
          </Suspense>
        </ErrorBoundary>
      ))}
    </div>
  );
}
