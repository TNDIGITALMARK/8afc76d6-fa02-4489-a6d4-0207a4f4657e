/**
 * Buy Me a Coffee Integration Configuration
 *
 * This module handles the integration with Buy Me a Coffee payment platform
 * for subscription and one-time payment processing.
 */

export interface BuyMeACoffeeConfig {
  username: string;
  enabled: boolean;
  widgetColor?: string;
  widgetMessage?: string;
}

export interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year' | 'one-time';
  bmcPriceId?: string; // Buy Me a Coffee specific price identifier
  bmcMembershipId?: string; // For membership/subscription plans
  features: string[];
  popular?: boolean;
}

// Buy Me a Coffee configuration
export const BMC_CONFIG: BuyMeACoffeeConfig = {
  username: '', // TODO: Replace with your Buy Me a Coffee username
  enabled: true,
  widgetColor: '#E994A5', // NeuraNova primary color
  widgetMessage: 'Support NeuraNova',
};

// Payment plans configuration with BMC integration
export const PAYMENT_PLANS: PaymentPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    currency: 'USD',
    interval: 'one-time',
    features: [
      'Text chat with AI',
      '3 personality options',
      'Streaks & XP system',
      'Shareable stories',
      'Ad-supported experience',
    ],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    currency: 'USD',
    interval: 'month',
    bmcMembershipId: 'pro-monthly', // TODO: Replace with your BMC membership ID
    features: [
      'Everything in Free',
      'Voice chat capability',
      'Photo chat & sharing',
      '10+ personality options',
      'Custom avatar creation',
      'Priority support',
      'Ad-free experience',
    ],
    popular: true,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 19.99,
    currency: 'USD',
    interval: 'month',
    bmcMembershipId: 'ultimate-monthly', // TODO: Replace with your BMC membership ID
    features: [
      'Everything in Pro',
      'Unlimited personalities',
      'Advanced roleplay packs',
      'API access for developers',
      'Priority AI processing',
      'Exclusive community access',
      'Early feature releases',
      'Premium story templates',
    ],
    popular: false,
  },
];

// Helper to generate Buy Me a Coffee payment URL
export function getBMCPaymentUrl(planId: string): string {
  const plan = PAYMENT_PLANS.find((p) => p.id === planId);

  if (!plan || !BMC_CONFIG.username) {
    console.error('Invalid plan or BMC username not configured');
    return '#';
  }

  // For free plan, no payment needed
  if (plan.price === 0) {
    return '/signup';
  }

  // For paid plans, generate BMC URL
  if (plan.bmcMembershipId) {
    // Membership/subscription URL format
    return `https://www.buymeacoffee.com/${BMC_CONFIG.username}/membership?membership=${plan.bmcMembershipId}`;
  }

  // One-time payment URL format (support with custom amount)
  const coffeeCount = Math.ceil(plan.price / 5); // Assume $5 per coffee
  return `https://www.buymeacoffee.com/${BMC_CONFIG.username}?amount=${coffeeCount}`;
}

// Check if BMC is properly configured
export function isBMCConfigured(): boolean {
  return BMC_CONFIG.enabled && BMC_CONFIG.username.length > 0;
}

// Load BMC widget script
export function loadBMCWidget(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'));
      return;
    }

    // Check if script already loaded
    if (document.getElementById('bmc-widget-script')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'bmc-widget-script';
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-id', BMC_CONFIG.username);
    script.setAttribute('data-description', BMC_CONFIG.widgetMessage || 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', '');
    script.setAttribute('data-color', BMC_CONFIG.widgetColor || '#5F7FFF');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load BMC widget'));

    document.body.appendChild(script);
  });
}
