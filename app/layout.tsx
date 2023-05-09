import '../public/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: "Artist's Portfolio and Auction",
//   description: "Artist's Portfolio and Auction",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
