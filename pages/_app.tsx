import Layout from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import LoginModal from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import EditModal from '@/components/users/EditModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModal/>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  );
}
