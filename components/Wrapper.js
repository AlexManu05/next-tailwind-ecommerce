import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Wrapper = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- BuyZona' : 'BuyZona'}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between px-4 shadow-md">
            <Link href="/" className="text-lg font-bold">
              BuyZona
            </Link>
            <div>
              <Link href="/cart" className="p-2 hover:text-orange-500">
                Cart
              </Link>
              <Link href="/login" className="p-2  hover:text-orange-500">
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright @ 2022 BuyZona</p>
        </footer>
      </div>
    </>
  );
};

export default Wrapper;
