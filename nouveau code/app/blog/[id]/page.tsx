export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

import BlogArticleContent from './BlogArticleContent';

export default function BlogArticlePage({ params }: { params: { id: string } }) {
  return <BlogArticleContent articleId={params.id} />;
}