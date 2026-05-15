# Lata Yog Routine Guide

A React + Vite application for guided yoga routines with English/Hindi interface support and audio prompts.

## Getting started

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Local test environment

Install dependencies and start the local dev server:

```bash
npm install
npm run test
```

Open `http://localhost:5173/test.html` in your browser to use the built-in test harness page and preview the app.

## Deployment

This project is configured for GitHub Pages deployment using `./dist` as the site output directory.
Push to `main` to trigger the GitHub Actions workflow defined in `.github/workflows/github-pages.yml`.

## Project structure

- `src/App.jsx` — main application shell and state management
- `src/components` — reusable UI and layout components
- `src/data` — routine definitions, interface language text, safety notes, and audio prompts
- `src/lib` — routine engine, speech helpers, and utility functions

## Features

- Routine selection with default `patanjaliJogging1`
- English / Hindi interface language
- Spoken audio language selection
- Step progression, pause, reset, and next controls
- Step list, progress tracking, breathing animation, and illustration panel
- Safety notes and media placeholders
