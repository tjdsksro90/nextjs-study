import logo from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        {/* header에 있는 이미지 같은 경우 지연되면 안되기에 priority 추가 */}
        <Image src={logo} width={100} height={100} priority alt="Mobile phone with posts feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
