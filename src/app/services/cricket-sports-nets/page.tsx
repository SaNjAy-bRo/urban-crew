import type { Metadata } from 'next';
import CricketSportsNetsContent from './CricketSportsNetsContent';

export const metadata: Metadata = {
  title: 'Cricket & Sports Nets in Bangalore | Urban Crew',
  description: 'Professional cricket and sports net installation in Bangalore. Custom setups for schools, apartments, and sports facilities. Durable, rust-proof nets.',
};

export default function CricketSportsNetsPage() {
  return <CricketSportsNetsContent />;
}
