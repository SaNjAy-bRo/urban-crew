import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Urban Crew | Get a Free Quote',
  description: 'Contact Urban Crew for premium invisible grills, safety nets, and clothes hangers in Bangalore. Call +91 99022 99696 for a free site inspection.',
};

export default function ContactPage() {
  return <ContactContent />;
}
