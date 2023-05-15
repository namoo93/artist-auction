import '../public/globals.css';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'] });
// const queryClient = new QueryClient();

export const metadata = {
  // applicationName: "Artist's Portfolio and Auction", //모바일의 경우
  referrer: 'origin-when-cross-origin',
  title: "Artist's Portfolio and Auction",
  description: "Artist's Portfolio and Auction",
  keywords: [
    'auction',
    'art auction',
    'artist',
    'art sale',
    'artist portfolio',
    'artwork',
  ],
  robots: 'ALL',
};
// 참고자료: //developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <QueryClientProvider client={queryClient}> */}
      <body className={inter.className}>{children}</body>
      {/* </QueryClientProvider> */}
    </html>
  );
}
