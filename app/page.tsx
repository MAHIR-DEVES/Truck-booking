import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to the default locale (bn)
  redirect('/bn');
}

// Remove the dynamic export as it's not needed for a simple redirect
