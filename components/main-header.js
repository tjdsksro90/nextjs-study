import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
  const LISTS = [
    { href: '/news', title: 'News' },
    { href: '/archive', title: 'Archive' },
  ];

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          {LISTS.map(nav => (
            <li>
              <NavLink href={nav.href}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
