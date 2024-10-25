import Header from '@/components/header';
import './globals.css';

// page.js 에서 설정해두지 않았다면 모든 페이지가 아래 metadata 적용(기본 느낌)
export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
