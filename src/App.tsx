/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScene } from './components/HeroScene';

const BelowFoldSections = lazy(() => import('./components/BelowFoldSections'));
const DeferredFooter = lazy(() =>
  import('./components/DeferredFooter').then((m) => ({ default: m.DeferredFooter }))
);

export default function App() {
  const [loadBelowFold, setLoadBelowFold] = useState<boolean>(() =>
    typeof window !== 'undefined' ? Boolean(window.location.hash && window.location.hash !== '#hero') : false
  );
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadBelowFold) return;

    const triggerLoad = (targetHash?: string) => {
      setLoadBelowFold(true);
      if (targetHash && targetHash.startsWith('#')) {
        const id = targetHash.slice(1);
        window.setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    };

    const onHashChange = () => triggerLoad(window.location.hash);
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (href && href !== '#hero') {
        triggerLoad(href);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onAnchorClick, true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadBelowFold(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onAnchorClick, true);
    };
  }, [loadBelowFold]);

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#171615]">
      <Navbar />
      <main>
        <HeroScene />
        {!loadBelowFold && (
          <div ref={sentinelRef} className="min-h-[600px] bg-[#F5F0E6]" aria-hidden="true" />
        )}
        {loadBelowFold && (
          <Suspense fallback={<div className="min-h-[600px] bg-[#F5F0E6]" aria-hidden="true" />}>
            <BelowFoldSections />
          </Suspense>
        )}
      </main>
      {loadBelowFold && (
        <Suspense fallback={null}>
          <DeferredFooter />
        </Suspense>
      )}
    </div>
  );
}
