'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Coffee, ExternalLink, CheckCircle, XCircle, Settings } from 'lucide-react';
import { BMC_CONFIG, isBMCConfigured, PAYMENT_PLANS } from '@/lib/buymeacoffee/config';

export default function PaymentSettingsPage() {
  const [bmcUsername, setBmcUsername] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [testUrl, setTestUrl] = useState('');

  useEffect(() => {
    // Load current configuration
    setBmcUsername(BMC_CONFIG.username);
    setIsConfigured(isBMCConfigured());
  }, []);

  const handleUsernameChange = (value: string) => {
    setBmcUsername(value);
    // Update test URL
    if (value) {
      setTestUrl(`https://www.buymeacoffee.com/${value}`);
    } else {
      setTestUrl('');
    }
  };

  const handleSave = () => {
    // In a production environment, you would save this to a database or environment variable
    // For now, we'll just show a message
    alert(
      'To activate Buy Me a Coffee payments:\n\n' +
        '1. Update the BMC_CONFIG.username in:\n' +
        '   src/lib/buymeacoffee/config.ts\n\n' +
        '2. Set up your membership tiers on Buy Me a Coffee:\n' +
        '   - Pro: $9.99/month\n' +
        '   - Ultimate: $19.99/month\n\n' +
        '3. Update bmcMembershipId values in PAYMENT_PLANS\n\n' +
        `Your username: ${bmcUsername}`
    );
  };

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Payment Settings</h1>
        <p className="text-gray-600">Configure Buy Me a Coffee integration for subscription payments</p>
      </div>

      {/* Configuration Status */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Payment Status</CardTitle>
              <CardDescription>Current Buy Me a Coffee integration status</CardDescription>
            </div>
            <Badge variant={isConfigured ? 'default' : 'destructive'} className="text-sm">
              {isConfigured ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Configured
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 mr-1" />
                  Not Configured
                </>
              )}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {!isConfigured && (
            <Alert>
              <Settings className="h-4 w-4" />
              <AlertDescription>
                Buy Me a Coffee is not configured. Add your username below to enable payments.
              </AlertDescription>
            </Alert>
          )}
          {isConfigured && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Buy Me a Coffee is configured and ready to accept payments!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* BMC Configuration */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-500" />
            Buy Me a Coffee Configuration
          </CardTitle>
          <CardDescription>
            Set up your Buy Me a Coffee username to enable payment processing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="bmc-username">Buy Me a Coffee Username</Label>
            <Input
              id="bmc-username"
              placeholder="yourusername"
              value={bmcUsername}
              onChange={(e) => handleUsernameChange(e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Your username from buymeacoffee.com/yourusername
            </p>
          </div>

          {testUrl && (
            <div className="space-y-2">
              <Label>Test Your Profile</Label>
              <div className="flex items-center gap-2">
                <Input value={testUrl} readOnly className="flex-1" />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(testUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Open
                </Button>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={handleSave} className="bg-amber-500 hover:bg-amber-600">
              <Coffee className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Plans Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Active Payment Plans</CardTitle>
          <CardDescription>Configure these memberships in your Buy Me a Coffee dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {PAYMENT_PLANS.filter((plan) => plan.price > 0).map((plan) => (
              <div
                key={plan.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div>
                  <h4 className="font-semibold">{plan.name}</h4>
                  <p className="text-sm text-gray-600">
                    ${plan.price.toFixed(2)} per {plan.interval}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs">
                    {plan.bmcMembershipId || 'Not configured'}
                  </Badge>
                  {plan.popular && (
                    <Badge className="ml-2 bg-pink-500">Popular</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Alert className="mt-6">
            <Coffee className="h-4 w-4" />
            <AlertDescription>
              <strong>Setup Instructions:</strong> Create membership tiers in your Buy Me a Coffee
              dashboard matching these prices, then update the bmcMembershipId values in
              src/lib/buymeacoffee/config.ts
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Setup Guide</CardTitle>
          <CardDescription>Follow these steps to activate payments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Create Buy Me a Coffee Account</h4>
                <p className="text-sm text-gray-600">
                  Sign up at{' '}
                  <a
                    href="https://www.buymeacoffee.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    buymeacoffee.com
                  </a>{' '}
                  and complete your profile
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Enable Memberships</h4>
                <p className="text-sm text-gray-600">
                  In your BMC dashboard, go to Memberships and create tiers for Pro ($9.99/month) and
                  Ultimate ($19.99/month)
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Update Configuration</h4>
                <p className="text-sm text-gray-600">
                  Edit <code className="text-xs bg-gray-100 px-1 rounded">src/lib/buymeacoffee/config.ts</code> with your
                  username and membership IDs
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1">Test Payment Flow</h4>
                <p className="text-sm text-gray-600">
                  Visit your pricing page and click on a paid plan to test the Buy Me a Coffee
                  integration
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://help.buymeacoffee.com/en/articles/5089959-memberships"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View BMC Memberships Documentation
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
