"use client";

import "../styles/header.css";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mainheader">
      <div className="navButtons">
        <Link href="/"><button>Home</button></Link>
        <Link href="/about"><button>About Us</button></Link>
        <Link href="/gallery"><button>Gallery</button></Link>
        <Link href="/login"><button>Log in</button></Link>
      </div>
    </header>
  );
}
