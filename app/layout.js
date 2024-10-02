import '/app/ui/global.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayer({children})
{
    return (
      <html lang="en">
      <head>
          <title>Dashboard</title>
      </head>
      <body>
        
        <header className="header">
          <Link href="/"><Image src="/logo.png" alt="Logo" width={60} height={60}/></Link>

          <nav className="navbar">
            <ul>
                <li><Link href="/" className="active">Home</Link></li>
                <li><Link href="dashboard">Dashboard</Link></li>
                <li><Link href="docs">Docs</Link></li>
                <li><Link href="templates">Templates</Link></li>
                <li><Link href="contacts">Contacts</Link></li>
            </ul>
          </nav>

        </header>

        <main>
            {children}
        </main>
      
      </body>
    </html>);
}
