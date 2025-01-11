'use client';

import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}