import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
  const NAV_LIST = [
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
          {NAV_LIST.map(nav => (
            <li key={nav}>
              <NavLink href={nav.href}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
