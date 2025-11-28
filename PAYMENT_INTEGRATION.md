# Buy Me a Coffee Payment Integration

This document explains how to activate and configure the Buy Me a Coffee payment integration for your NeuraNova application.

## Overview

The application is pre-configured with a complete Buy Me a Coffee payment system that supports:

- **Free Plan**: No payment required, basic features
- **Pro Plan**: $9.99/month subscription via BMC Memberships
- **Ultimate Plan**: $19.99/month subscription via BMC Memberships

## Features Implemented

✅ **Payment Configuration System**
- Centralized configuration in `src/lib/buymeacoffee/config.ts`
- Easy-to-update payment plans and BMC settings

✅ **Payment Buttons**
- Smart payment buttons on pricing page
- Automatic routing to BMC membership pages
- Opens payments in new tab for seamless UX

✅ **BMC Widget Integration**
- Floating Buy Me a Coffee widget on all pages
- Configurable colors matching your brand (NeuraNova pink)
- Auto-loads when BMC username is configured

✅ **Settings Dashboard**
- Admin page at `/settings/payment`
- Configuration status monitoring
- Setup instructions and testing tools

## Quick Start: Activating Payments

### Step 1: Create Your Buy Me a Coffee Account

1. Go to https://www.buymeacoffee.com
2. Sign up and complete your profile
3. Note your username (e.g., `yourusername` from `buymeacoffee.com/yourusername`)

### Step 2: Enable Memberships

1. Log into your Buy Me a Coffee dashboard
2. Navigate to **Memberships** section
3. Create two membership tiers:
   - **Pro**: $9.99/month
   - **Ultimate**: $19.99/month
4. Copy the membership IDs from each tier's settings

### Step 3: Update Configuration

Edit `src/lib/buymeacoffee/config.ts`:

```typescript
export const BMC_CONFIG: BuyMeACoffeeConfig = {
  username: 'yourusername', // ← Replace with your BMC username
  enabled: true,
  widgetColor: '#E994A5',
  widgetMessage: 'Support NeuraNova',
};

export const PAYMENT_PLANS: PaymentPlan[] = [
  // ... Free plan (no changes needed) ...
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    currency: 'USD',
    interval: 'month',
    bmcMembershipId: 'your-pro-membership-id', // ← Replace this
    // ... rest of config ...
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 19.99,
    currency: 'USD',
    interval: 'month',
    bmcMembershipId: 'your-ultimate-membership-id', // ← Replace this
    // ... rest of config ...
  },
];
```

### Step 4: Test the Integration

1. Run your development server: `npm run dev`
2. Visit the pricing page (home page)
3. Click on "Go Pro" or "Go Ultimate" buttons
4. Verify it opens your Buy Me a Coffee membership page in a new tab
5. Test the floating BMC widget in the bottom right corner

## File Structure

```
src/
├── lib/
│   └── buymeacoffee/
│       └── config.ts              # Main configuration file
├── components/
│   └── buymeacoffee/
│       ├── PaymentButton.tsx      # Smart payment buttons
│       └── BMCWidget.tsx          # Floating BMC widget
├── app/
│   ├── layout.tsx                 # BMC widget added here
│   └── settings/
│       └── payment/
│           └── page.tsx           # Settings dashboard
└── components/
    └── landing/
        └── Pricing.tsx            # Updated with BMC buttons
```

## Configuration Reference

### BMC_CONFIG

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `username` | string | Your BMC username | `''` (empty) |
| `enabled` | boolean | Enable/disable BMC integration | `true` |
| `widgetColor` | string | Widget button color (hex) | `'#E994A5'` |
| `widgetMessage` | string | Widget tooltip message | `'Support NeuraNova'` |

### PAYMENT_PLANS

Each plan object:

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique plan identifier |
| `name` | string | Display name |
| `price` | number | Price in USD |
| `currency` | string | Currency code |
| `interval` | string | Billing interval (`'month'`, `'year'`, `'one-time'`) |
| `bmcMembershipId` | string | BMC membership tier ID |
| `features` | string[] | List of features |
| `popular` | boolean | Show "Most Popular" badge |

## Payment Flow

1. **User clicks payment button** on pricing page
2. **PaymentButton component** validates BMC configuration
3. **Generate payment URL** using plan's `bmcMembershipId`
4. **Open BMC page** in new tab
5. **User completes payment** on Buy Me a Coffee
6. **BMC handles** subscription management and recurring billing

## Webhooks (Optional)

To automatically activate features when users subscribe:

1. Set up BMC webhooks in your dashboard
2. Create an API endpoint to receive webhook events
3. Update user permissions in your database

Example webhook endpoint (not included, but easy to add):

```typescript
// src/app/api/webhooks/bmc/route.ts
export async function POST(request: Request) {
  const payload = await request.json();

  // Verify webhook signature
  // Update user subscription status in database
  // Grant access to Pro/Ultimate features

  return Response.json({ success: true });
}
```

## Customization

### Change Plan Prices

Edit `PAYMENT_PLANS` in `config.ts` and update your BMC membership tiers to match.

### Add New Plans

```typescript
{
  id: 'annual',
  name: 'Annual Pro',
  price: 99.99,
  currency: 'USD',
  interval: 'year',
  bmcMembershipId: 'your-annual-membership-id',
  features: ['Everything in Pro', 'Annual discount'],
  popular: false,
}
```

### Customize Widget

```typescript
export const BMC_CONFIG: BuyMeACoffeeConfig = {
  username: 'yourusername',
  enabled: true,
  widgetColor: '#FF5733', // Your brand color
  widgetMessage: 'Buy me a coffee!',
};
```

## Testing Checklist

- [ ] BMC username configured in `config.ts`
- [ ] Membership tiers created in BMC dashboard
- [ ] Membership IDs updated in `PAYMENT_PLANS`
- [ ] Payment buttons open correct BMC pages
- [ ] BMC widget appears on pages
- [ ] Free plan redirects to signup (not BMC)
- [ ] Settings page shows "Configured" status

## Support

For Buy Me a Coffee specific questions:
- 📚 [BMC Memberships Documentation](https://help.buymeacoffee.com/en/articles/5089959-memberships)
- 💬 [BMC Support](https://help.buymeacoffee.com)

## Security Notes

- ✅ Payment processing handled entirely by Buy Me a Coffee (PCI compliant)
- ✅ No credit card data touches your server
- ✅ BMC username is safe to expose publicly
- ✅ Membership IDs are safe to expose publicly
- ⚠️ Do NOT commit BMC API keys (if using webhooks) to version control

## Next Steps

After payments are configured:

1. **Set up user authentication** to track subscriptions
2. **Create feature gates** based on subscription level
3. **Implement webhook handler** for automatic activation
4. **Add subscription management** page for users
5. **Set up analytics** to track conversions

## Troubleshooting

**Buttons not working:**
- Check `BMC_CONFIG.username` is set
- Verify `bmcMembershipId` values are correct
- Check browser console for errors

**Widget not appearing:**
- Ensure `BMC_CONFIG.enabled` is `true`
- Check username is not empty
- Clear browser cache and reload

**Wrong membership page opens:**
- Double-check membership IDs in BMC dashboard
- Update `bmcMembershipId` in `PAYMENT_PLANS`
- Test each button individually

---

**Ready to activate?** Update `src/lib/buymeacoffee/config.ts` with your BMC username and membership IDs, then restart your dev server!
