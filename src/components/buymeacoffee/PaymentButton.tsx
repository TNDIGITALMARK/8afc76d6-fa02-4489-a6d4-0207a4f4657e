'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getBMCPaymentUrl, isBMCConfigured, type PaymentPlan } from '@/lib/buymeacoffee/config';
import { Coffee, ExternalLink } from 'lucide-react';

interface PaymentButtonProps {
  plan: PaymentPlan;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export function PaymentButton({ plan, className, variant = 'default' }: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Check if BMC is configured
      if (!isBMCConfigured()) {
        alert('Payment system is not yet configured. Please contact support.');
        setIsProcessing(false);
        return;
      }

      // For free plan, redirect to signup
      if (plan.price === 0) {
        window.location.href = '/signup';
        return;
      }

      // Generate BMC payment URL
      const paymentUrl = getBMCPaymentUrl(plan.id);

      // Open payment page in new tab
      window.open(paymentUrl, '_blank', 'noopener,noreferrer');

      // Optional: Track payment initiation
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'begin_checkout', {
          currency: plan.currency,
          value: plan.price,
          items: [
            {
              item_id: plan.id,
              item_name: plan.name,
              price: plan.price,
            },
          ],
        });
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to process payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const getButtonText = () => {
    if (isProcessing) return 'Processing...';
    if (plan.price === 0) return 'Get Started Free';
    return plan.name === 'Pro' ? 'Go Pro' : `Go ${plan.name}`;
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={isProcessing}
      variant={variant}
      className={className}
    >
      {plan.price > 0 && <Coffee className="w-4 h-4 mr-2" />}
      {getButtonText()}
      {plan.price > 0 && <ExternalLink className="w-4 h-4 ml-2" />}
    </Button>
  );
}
