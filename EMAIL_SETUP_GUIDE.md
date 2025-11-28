# Email Setup Guide for Contact Form

The contact form now sends emails directly to **neuranova@gmail.com** when users submit messages.

## Quick Setup (Required)

To enable email sending, you need to configure Gmail authentication:

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-factor authentication if not already enabled

### Step 2: Generate App-Specific Password
1. Visit [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Click "Create new app password"
3. Name it: "NeuraNova Contact Form"
4. Click "Generate"
5. Copy the 16-character password (spaces will be ignored)

### Step 3: Configure Environment Variables
1. Open your `.env.local` file (or create it from `.env.example`)
2. Add these lines:
   ```
   GMAIL_USER=neuranova@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-password-here
   ```
3. Replace `your-16-character-password-here` with the password from Step 2

### Step 4: Restart Your Development Server
```bash
npm run dev
```

## What Changed

### Removed from Contact Page
- Phone number display
- Email display  
- Only "Availability" section remains

### Email Functionality
When users submit the contact form:
1. Form is validated (name, email, message required)
2. Email is sent to **neuranova@gmail.com**
3. Email includes:
   - Sender's name and email
   - Country (if provided)
   - Message content
   - Professional HTML formatting with NeuraNova branding
4. Reply-To is set to sender's email for easy responses

## Email Format

You'll receive beautifully formatted HTML emails with:
- NeuraNova gradient header
- Structured contact information
- Clean message display
- Direct reply capability

## Testing

To test the email functionality:

1. Run the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check **neuranova@gmail.com** for the email

## Troubleshooting

### "Email service configuration error"
- Ensure `GMAIL_APP_PASSWORD` is set correctly in `.env.local`
- Verify 2-factor authentication is enabled
- Regenerate app password if needed

### Emails not arriving
- Check spam/junk folder
- Verify `GMAIL_USER` is set to `neuranova@gmail.com`
- Check server logs for error messages

### "Invalid login" errors
- App password must be 16 characters
- Remove any spaces from the password
- Ensure you're using an app password, not your regular Gmail password

## Security Notes

- **Never commit** `.env.local` to version control
- App passwords are account-specific and should be kept secret
- If compromised, revoke the app password from Google Account settings
- The app password only works for this specific application

## Alternative Email Providers

If you prefer using a different email service (SendGrid, Mailgun, AWS SES, etc.), you can modify:
- `/src/app/api/contact/route.ts` 
- Update the `nodemailer.createTransport()` configuration

## Support

For issues with:
- Gmail authentication: [Google Support](https://support.google.com/accounts)
- Code implementation: Check console logs in development mode
