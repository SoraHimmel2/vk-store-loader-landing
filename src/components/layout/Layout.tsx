import Footer from '@/components/layout/Footer';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className=''>
      {children}
      <Footer />
    </div>
  );
}
