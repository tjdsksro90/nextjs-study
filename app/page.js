import { Suspense } from 'react';

import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// 정적 메타데이터
export const metadata = {
  title: '...',
  description: '...',
};

// 동적 메타데이터
export async function generateMetadata(data) {
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `... ${numberOfPosts} ...`,
    description: '...',
  };
}

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
