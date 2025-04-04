
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-amber-700 text-white' : 'hover:bg-amber-600 hover:text-white';
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-amber-950 p-4 shadow-md">
      <span className="container mx-auto flex items-center justify-between">
        <span className="text-white font-bold text-xl">Colombia Café</span>
        
        <span className="flex space-x-4 text-amber-50">
          <Link href="/" className={`px-4 py-2 rounded-md transition-colors ${isActive('/')}`}>
            Inicio
          </Link>
          
          <Link href="/cafe-colombiano" className={`px-4 py-2 rounded-md transition-colors ${isActive('/cafe-colombiano')}`}>
            Café Colombiano
          </Link>
          
          <Link href="/analisis-grano" className={`px-4 py-2 rounded-md transition-colors ${isActive('/analisis-grano')}`}>
            IA Cafe
          </Link>
        </span>
      </span>
    </nav>
  );
};

export default Navbar;