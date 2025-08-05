
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

import PortfolioContent from './PortfolioContent';

export default function PortfolioPage() {
  return <PortfolioContent />;
}
