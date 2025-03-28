'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import RootProvider from './root-provider';

export function Portal({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    console.warn('Portal root element not found');
    return null;
  }

  return createPortal(<RootProvider>{children}</RootProvider>, portalRoot);
}
