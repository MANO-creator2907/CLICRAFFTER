
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

import BlogContent from './BlogContent';

export default function BlogPage() {
  return <BlogContent />;
}
