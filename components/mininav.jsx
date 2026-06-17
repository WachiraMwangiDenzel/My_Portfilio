"Use client"

import React from 'react'

import { usePathname } from 'next/navigation'
import { Download } from 'lucide-react';
import { getRoute } from './Config/getRoute';


export default function mininav() {
  const pathname = usePathname();
  const currentRoute = getRoute(pathname);


  return (
    <div>
      {/* Hamburger Menu */}
      <div>

      </div>

      Mini Nav Content
      <div>
        <p> 
          <h1>{currentRoute.title}</h1> 
        </p>

        <p>
          <h1>{currentRoute.Subhead} </h1>
        </p>
      </div>

      {/* Download Cv Button on Mobile Viewport */}
      <div>
        <button>
          <Download />
          Resume
        </button>
      </div>
    </div>
  )
}
