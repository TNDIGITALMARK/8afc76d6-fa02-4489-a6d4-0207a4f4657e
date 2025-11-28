# 🚀 Payment Activation Checklist

Quick reference for activating Buy Me a Coffee payments in your NeuraNova application.

## ✅ Prerequisites

- [ ] Buy Me a Coffee account created at https://www.buymeacoffee.com
- [ ] Profile completed with payment details
- [ ] Bank account/PayPal connected for payouts

## 📝 Step-by-Step Activation

### 1. Set Up Buy Me a Coffee Memberships

- [ ] Log into Buy Me a Coffee dashboard
- [ ] Navigate to **Memberships** section
- [ ] Click "Create New Membership"
- [ ] Create **Pro Tier**:
  - Name: "Pro"
  - Price: $9.99/month
  - Benefits: Voice chat, photo sharing, 10+ personalities, priority support, ad-free
  - [ ] Copy the Membership ID
- [ ] Create **Ultimate Tier**:
  - Name: "Ultimate"
  - Price: $19.99/month
  - Benefits: All Pro features + unlimited personalities, API access, priority AI, exclusive community
  - [ ] Copy the Membership ID

### 2. Update Configuration File

Edit: `src/lib/buymeacoffee/config.ts`

```typescript
export const BMC_CONFIG: BuyMeACoffeeConfig = {
  username: 'enoch1622', // ✅ CONFIGURED
  enabled: true,
  widgetColor: '#E994A5',
  widgetMessage: 'Support NeuraNova',
};
```

In the same file, update membership IDs when you create them on BMC:

```typescript
{
  id: 'pro',
  // ... other fields ...
  bmcMembershipId: 'pro-monthly', // ⚠️ UPDATE WITH YOUR REAL MEMBERSHIP ID
},
{
  id: 'ultimate',
  // ... other fields ...
  bmcMembershipId: 'ultimate-monthly', // ⚠️ UPDATE WITH YOUR REAL MEMBERSHIP ID
}
```

- [x] BMC username updated (enoch1622)
- [ ] Pro membership ID updated (needs real ID from BMC dashboard)
- [ ] Ultimate membership ID updated (needs real ID from BMC dashboard)
- [x] File saved

### 3. Test the Integration

- [ ] Start development server: `npm run dev`
- [ ] Visit home page: http://localhost:4006
- [ ] Scroll to pricing section
- [ ] Click "Go Pro" button
  - [ ] Opens Buy Me a Coffee in new tab
  - [ ] Shows correct Pro membership page
  - [ ] Price matches ($9.99/month)
- [ ] Click "Go Ultimate" button
  - [ ] Opens Buy Me a Coffee in new tab
  - [ ] Shows correct Ultimate membership page
  - [ ] Price matches ($19.99/month)
- [ ] Check bottom-right corner for BMC widget
  - [ ] Widget appears
  - [ ] Widget shows your username
  - [ ] Clicking widget opens your BMC page

### 4. Verify Settings Dashboard

- [ ] Visit: http://localhost:4006/settings/payment
- [ ] Status shows "Configured" with green checkmark
- [ ] Your username displays correctly
- [ ] Payment plans list shows Pro and Ultimate
- [ ] Test profile link works

### 5. Production Deployment

- [ ] Build passes: `npm run build`
- [ ] Environment variables set (if using .env)
- [ ] Deploy to production
- [ ] Test payment flow on live site
- [ ] Complete test purchase (use test mode if available)

## 🔍 Troubleshooting

**Status shows "Not Configured":**
- Check `BMC_CONFIG.username` is not empty
- Verify `BMC_CONFIG.enabled` is `true`
- Restart development server

**Payment buttons don't work:**
- Verify membership IDs are correct
- Check BMC dashboard for active memberships
- Check browser console for errors

**Widget doesn't appear:**
- Clear browser cache
- Check username is set correctly
- Verify widget script loaded (check Network tab)

## 📋 Quick Reference

| Item | Location |
|------|----------|
| Configuration | `src/lib/buymeacoffee/config.ts` |
| Payment Buttons | `src/components/buymeacoffee/PaymentButton.tsx` |
| Widget Component | `src/components/buymeacoffee/BMCWidget.tsx` |
| Pricing Page | `src/components/landing/Pricing.tsx` |
| Settings Page | `src/app/settings/payment/page.tsx` |
| Full Documentation | `PAYMENT_INTEGRATION.md` |

## ✨ What Happens After Activation

Once configured:

1. **Pricing page buttons** automatically route to your BMC memberships
2. **Floating widget** appears on all pages for one-time support
3. **Users can subscribe** directly through Buy Me a Coffee
4. **BMC handles** all payment processing, recurring billing, and payouts
5. **You receive** notifications when users subscribe

## 🎯 Next Steps (Optional)

- [ ] Set up webhooks for automatic user activation
- [ ] Create user dashboard for subscription management
- [ ] Implement feature gates based on subscription level
- [ ] Add analytics tracking for payment conversions
- [ ] Customize thank you page after payment

## 🆘 Need Help?

- **Documentation**: See `PAYMENT_INTEGRATION.md` for detailed guide
- **BMC Help**: https://help.buymeacoffee.com/en/articles/5089959-memberships
- **Settings Page**: Visit `/settings/payment` for setup instructions

---

**Estimated Setup Time:** 10-15 minutes

**Status:** All payment infrastructure is ready. Just add your BMC credentials!
