/* /components/Layout.js */

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Container, Nav, NavItem } from 'reactstrap';

export default function Layout(props) {
  const title = 'Welcome to Nextjs';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        />
        <script src='https://js.stripe.com/v3' />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
          `}
        </style>
        <Nav className='navbar navbar-dark bg-dark'>
          <NavItem>
            <Link href='/'>
              <p className='navbar-brand'>Home</p>
            </Link>
          </NavItem>

          <NavItem className='ml-auto'>
            <Link href='/login'>
              <p className='nav-link'>Sign In</p>
            </Link>
          </NavItem>

          <NavItem>
            <Link href='/register'>
              <p className='nav-link'> Sign Up</p>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}
