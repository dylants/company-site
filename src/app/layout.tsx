import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  description: 'Dylan Smith',
  title: 'dylants',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen min-w-screen flex flex-col">
        <div className="flex flex-1">
          <main className="flex flex-col flex-1 md:items-center mb-12">
            <div className="w-full h-full px-4 md:w-[768px] md:px-0">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
