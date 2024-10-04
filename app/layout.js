import '/app/ui/global.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayer({children})
{
    return (
      <html lang="en">
      <head>
          <title>Dashboard</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
      </head>
      <body>
        
        <header className="header">
          <Link href="/"><Image src="/logo.png" alt="Logo" width={60} height={60}/></Link>

          <nav className="navbar">
            <ul>
                <li><Link href="/" className="active">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/docs">Docs</Link></li>
                <li><Link href="/store">Store</Link></li>
            </ul>
          </nav>

        </header>

        <main>
            {children}
        </main>
      
        <footer className="footer">
          <h1>This is my footer</h1>
        </footer>

      </body>
    </html>);
}
