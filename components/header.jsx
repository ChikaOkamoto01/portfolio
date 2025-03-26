
import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'blog', href: '/blog' },
    { linkText: 'works', href: '/works' },
    { linkText: 'contact', href: '/contact' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <div className="text-2xl font-bold">Chika Okamoto</div>
                
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 no-underline">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
