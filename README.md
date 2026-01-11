# WikiTruth Docs

Static documentation site for the WikiTruth project, built with Docusaurus.

## Project Overview

WikiTruth is a privacy evidence market project based on Oasis Sapphire. This documentation site is built with Docusaurus 3.x, providing a complete technical documentation display and access experience.

## Tech Stack

- **Framework**: Docusaurus 3.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.15
- **Build Tool**: Docusaurus built-in build system
- **Node.js**: >= 18.0

## Project Structure

```
docs2/
├── docs/              # Documentation source files (Markdown)
├── src/
│   ├── components/    # React components
│   ├── css/          # Custom styles
│   ├── pages/        # Custom pages
│   └── theme/        # Theme components (custom Navbar/Footer preserved)
├── static/           # Static assets (images, logos, etc.)
├── docusaurus.config.ts  # Docusaurus configuration file
├── sidebars.ts       # Sidebar configuration
└── package.json      # Project dependencies
```

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run start
```

After starting, visit `http://localhost:3000`

### Build Production Version

```bash
npm run build
```

Build output is located in the `build/` directory

### Preview Build Results

```bash
npm run serve
```

### Clear Cache

```bash
npm run clear
```

## Main Features

- ✅ Complete documentation display system
- ✅ Responsive design, mobile-friendly
- ✅ Dark theme (shadcn dark mode)
- ✅ Custom styling (theme color: `#c6a9fc`)
- ✅ Code highlighting (supports Solidity, Bash, JSON, etc.)
- ✅ Documentation search (Docusaurus built-in)

## UI Style

- **Theme Color**: `#c6a9fc` (purple)
- **Background**: Black theme
- **Font**: Monospace font
- **Navbar**: Dark background with glassmorphism effect
- **Footer**: Dark background with community links

## Documentation Structure

Documents are organized into the following categories:

- Introduction & Background
- Technical Documentation
- Feature Details
- Tokenomics
- Future Plans
- Governance & Compliance
- Technical Outlook

## Configuration

### Navbar Configuration

Currently using Docusaurus default Navbar, configured in `docusaurus.config.ts`:

- Logo: `/logo/logo-2.svg`
- Navigation links: Home, Roadmap, Blog, Team, Docs
- Beta App button

### Footer Configuration

Footer includes:

- Community links (GitHub, Email)
- Legal links (Terms of Service)
- Copyright information

### Custom Components

Custom Navbar and Footer components are preserved in the `src/theme/` directory with filenames `index.custom.tsx`, and can be enabled when needed in the future.

## Development Guide

### Adding New Documents

1. Create a Markdown file in the `docs/` directory
2. Add document reference in `sidebars.ts`
3. Restart the development server

### Modifying Styles

Main style file is located at `src/css/custom.css`, containing:

- Tailwind CSS configuration
- Theme variable definitions
- Navbar/Footer style customization
- Code block and blockquote styles

### Static Assets

Static assets (images, logos, etc.) are placed in the `static/` directory and can be accessed via `/path/to/file`.

## Deployment

After building, deploy the contents of the `build/` directory to a static website hosting service (such as GitHub Pages, Netlify, Vercel, etc.).

## Related Links

- **Main Site**: https://wikitruth.xyz
- **App**: https://app.wikitruth.xyz
- **App on ipfs**: https://app.wikitruth.eth.limo
- **Documentation Site**: https://docs.wikitruth.xyz

## License

This project is private.

## Changelog

- **v1.0.0** (2025-01): Initial version, built with Docusaurus 3.5.0
