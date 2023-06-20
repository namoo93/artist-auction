'use client';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Error({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  console.table('에러', error);
  return (
    <>
      <h4>Error</h4>
      <button
        onClick={() => {
          reset();
        }}>
        실행시 페이지 다시 로드
      </button>
    </>
  );
}
