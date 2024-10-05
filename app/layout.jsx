import '/app/ui/global.css';
import { NavLinks } from '/app/ui/nav-links';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayer({children})
{
    return (
      <html lang="en">
      <body>
        
        <header className="header">
          <Link href="/"><Image src="/logo.png" alt="Logo" width={60} height={60}/></Link>
          <NavLinks></NavLinks>
        </header>

        <main>
            {children}
        </main>
      
        <footer className="footer">
        <div className="footer-column">
            <h1>Company</h1>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>

          <div className="footer-column">
            <h1>Company</h1>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>

          <div className="footer-column">
            <h1>Company</h1>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>

          <div className="footer-column">
            <h1>Company</h1>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>

        </footer>

      </body>
    </html>);
}
