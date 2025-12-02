# Generate Cover Letter (React + Vite)

A small React + Vite app to compose, preview, and export a cover-letter-style document. The app shows a live preview and lets you download the preview (export implemented using html2canvas).

## Features

- Live form to compose cover letter fields (name, contact, company, body, etc.)
- Real-time preview that matches the exported output
- Export preview as an image using html2canvas
- Built with React + Vite; styles via Tailwind CSS (if enabled)

## Quick start

Prerequisites: Node.js (recommended v18+) and npm.

Install dependencies:
```sh
npm install
```

Run development server:
```sh
npm run dev
```
Open: http://localhost:5173

Build for production:
```sh
npm run build
```

Preview production build:
```sh
npm run preview
```

Run linter:
```sh
npm run lint
```

## Project layout (key files)

- src/App.jsx — app root and download handler
- src/components/LetterFormAndPreview.jsx — form + preview wrapper
- src/components/LetterDetails.jsx — form inputs and state
- src/components/LetterPreview.jsx — rendered preview captured by html2canvas
- src/main.jsx — app mount
- src/index.css — global styles
- index.html — app HTML entry
- package.json — scripts & dependencies
- vite.config.js — Vite config

## How export works

The download button captures the preview DOM using html2canvas, converts it to an image/blob, and triggers a client-side download. Ensure fonts and images are loaded before capture for best results.

## Tips

- Wait for custom fonts/assets to finish loading before exporting.
- If the exported image looks low-res, increase html2canvas `scale` or render at higher CSS pixel density.

## Contributing

Open issues or PRs for bugs and improvements. Run the linter before committing:
```sh
npm run lint
```

## License

MIT
