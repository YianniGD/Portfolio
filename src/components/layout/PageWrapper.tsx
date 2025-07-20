
'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showHomeButton = pathname !== '/Portfolio/' && pathname !== '/';
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';


  return (
    <div className="container mx-auto px-4 py-12">
      {showHomeButton && (
        <div className="mb-8">
          <Button asChild variant="outline" className="rounded-full">
            <a href={`${basePath}/`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </a>
          </Button>
        </div>
      )}
      {children}
    </div>
  );
}
