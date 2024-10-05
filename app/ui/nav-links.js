'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavLinks()
{
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <ul>
                <li><Link className={`${pathname === "/" ? "active" : ""}` } href="/">Home</Link></li>
                <li><Link className={`${pathname.startsWith("/dashboard") ? "active" : ""}`} href="/dashboard">Dashboard</Link></li>
                <li><Link className={`${pathname.startsWith("/docs") ? "active" : ""}` } href="/docs">Docs</Link></li>
                <li><Link className={`${pathname.startsWith("/store") ? "active" : ""}` } href="/store">Store</Link></li>
            </ul>
        </nav>
    );
}