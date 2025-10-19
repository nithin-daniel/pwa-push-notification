# PWA Push Notification App

A simple Progressive Web App with push notifications and install prompts.

## 🎨 Features

- ✅ Fully functional PWA (installable on home screen)
- ✅ Push notification support
- ✅ Animated app icon with GIF
- ✅ Beautiful install modal popup
- ✅ Offline support with service worker
- ✅ Mobile responsive design
- ✅ Works on Android Chrome, Desktop Chrome, Firefox, Edge

## 📱 Creating Animated Icon

The app includes an animated GIF icon generator. To create your own animated icon:

1. Open `create_animated_icon.html` in your browser
2. Click "Generate & Download Animated Icon GIF"
3. The animated icon will be downloaded as `animated-icon.gif`
4. Replace the existing icon files in your project

Or alternatively, you can use your own GIF file and name it `animated-icon.gif`.

## 📋 Files Explained

- **index.html** - Main app page with notifications UI
- **manifest.json** - PWA manifest with app metadata and icons
- **sw.js** - Service Worker for offline support and push notifications
- **image.png** - Static fallback icon (used as backup)
- **animated-icon.gif** - Animated app icon (optional, replaces static icon)
- **create_animated_icon.html** - Tool to generate animated icons

## 🚀 Setup Instructions

### 1. Basic Setup
- No build process required! Just serve the files over HTTPS.

### 2. Create Animated Icon (Optional but Recommended)
```bash
# Open in browser
create_animated_icon.html
# Download animated-icon.gif and save it in the project root
```

### 3. Deploy to Web Server (HTTPS Required)
PWAs require HTTPS for service workers to work. Deploy using:
- GitHub Pages
- Vercel
- Netlify
- Any HTTPS-enabled web server

### 4. Test the App
1. Open the app URL in a modern browser
2. Install popup should appear automatically
3. Click "Install" to add to home screen
4. Enable notifications when prompted
5. Notifications will send every 5 seconds

## 🔔 Notification Features

- **Image Notifications**: Display GIF images in notifications
- **Message Notifications**: Simple text-based notifications
- **Auto Dismiss**: Notifications auto-close after 5 seconds
- **Click Handler**: Tapping notification brings app to focus

## 📱 Installation Behavior

### Desktop Browsers
- Install popup appears automatically
- "Add to Home Screen" button available

### Android Chrome
- Install popup appears automatically
- App installable to home screen with animated icon
- Push notifications work when app is closed

### iPhone/iPad
- Must use Safari browser
- Manual "Add to Home Screen" required
- Push notifications require app to be installed

## 🔧 Customization

### Change App Name
Edit `manifest.json`:
```json
"name": "Your App Name",
"short_name": "Short Name"
```

### Change Theme Color
Edit `manifest.json`:
```json
"theme_color": "#667eea"
```

And update `index.html` meta tag:
```html
<meta name="theme-color" content="#667eea">
```

### Change App Icon
Replace `image.png` and `animated-icon.gif` with your own icons (192x192 and 512x512 minimum).

## 📊 Manifest Settings Explained

```json
{
  "display": "standalone",    // App opens without browser UI
  "orientation": "portrait-primary",  // Lock to portrait on mobile
  "background_color": "#ffffff",  // Splash screen background
  "start_url": ".",  // Entry point
  "scope": "/"  // URLs included in PWA
}
```

## 🐛 Troubleshooting

### Install Popup Not Showing
- ✅ Using HTTPS? (Required for PWA)
- ✅ Manifest.json valid?
- ✅ Service worker registered?
- ✅ Check browser console for errors

### Notifications Not Working
- ✅ Permission granted?
- ✅ Service worker active?
- ✅ App installed on home screen (iOS)?
- ✅ Browser settings allow notifications?

### GIF Icon Not Showing
- ✅ Is `animated-icon.gif` in the correct location?
- ✅ Is manifest.json pointing to correct filename?
- ✅ Browser supports animated GIFs? (Most modern browsers do)

## 🌐 Browser Support

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Edge | ✅ | ✅ |
| Safari | ⚠️ (Limited) | ⚠️ (Home screen only) |
| Opera | ✅ | ✅ |

## 📚 Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

## 📝 License

Feel free to use this project as a template for your own PWAs!
