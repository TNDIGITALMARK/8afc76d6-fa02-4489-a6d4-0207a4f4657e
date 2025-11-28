'use client';

import { useEffect, useState } from 'react';
import { loadBMCWidget, isBMCConfigured } from '@/lib/buymeacoffee/config';

/**
 * Buy Me a Coffee Widget Component
 *
 * Loads and displays the floating BMC widget on the page.
 * Only renders if BMC is properly configured.
 */
export function BMCWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only load if BMC is configured
    if (!isBMCConfigured()) {
      return;
    }

    // Load BMC widget script
    loadBMCWidget()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error('Failed to load BMC widget:', err);
        setError(err.message);
      });
  }, []);

  // Don't render anything - the widget injects itself
  return null;
}
