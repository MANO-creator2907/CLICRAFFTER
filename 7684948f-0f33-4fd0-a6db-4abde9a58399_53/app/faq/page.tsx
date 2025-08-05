
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

import FAQContent from './FAQContent';

export default function FAQPage() {
  return <FAQContent />;
}
