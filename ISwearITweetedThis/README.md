# ISwearITweetedThis

A fake tweet generator that lets you customize and download tweet screenshots.

## Features

- Real-time tweet preview editing (name, username, text, time, metrics)
- Verified badge toggle
- Download tweet as PNG image
- Responsive form layout

## Manual vs AI-Assisted

### Built Manually
- Initial project setup with Vite + React + TypeScript + Tailwind
- Tweet component structure and styling
- Input form base implementation
- Asset imports (images, icons)

### AI-Assisted (via opencode CLI)
- Wired footer metrics to use dynamic tweet props instead of hardcoded values
- Added number formatting for view/engagement counts
- Added input fields for all tweet metrics (comments, retweets, likes, views, bookmarks)
- Added persistent labels above inputs
- Fixed footer action icons alignment
- Restored missing analytics section in footer
- Converted form layout from fixed-width to flexbox
- Added bookmarks field across type, state, UI, and display
- Integrated `react-to-print` for print functionality
- Moved print button into InputForm component
- Replaced print with download-to-PNG via `html-to-image`
- Added verified badge toggle checkbox
- Made form responsive with `flex-col` on mobile breakpoints
- Added hashtag (#) and mention (@) detection and blue styling in tweet text
- Added profile image URL input field to customize the tweet author's profile picture

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
