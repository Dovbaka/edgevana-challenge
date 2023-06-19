'use client'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'
import 'flowbite';
import {ReactNode} from "react";
import {AuthProvider} from "@/context";

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({children}: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
