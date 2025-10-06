import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to the default locale (bn)
  redirect('/bn');
}

export const dynamic = 'force-dynamic';
