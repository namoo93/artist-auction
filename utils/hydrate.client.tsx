'use client';

import {
  HydrationBoundary as RQHydrate,
  HydrationBoundaryProps,
} from '@tanstack/react-query';

function Hydrate(props: HydrationBoundaryProps) {
  const { children, ...rest } = props;
  return <RQHydrate {...rest}>{children}</RQHydrate>;
}

export default Hydrate;
