# Personal Portfolio

A clean developer portfolio website for **Areeb Ahmed** built with HTML, CSS, and JavaScript.

## Overview

This project contains a responsive single-page portfolio with sections for:
- Hero / introduction
- About / background
- Projects
- Skills
- Experience
- Achievements
- Contact

It includes a mobile-friendly navigation menu, scroll reveal animations, and a contact form powered by Formspree.

## Files

- `index.html` — main portfolio page structure
- `style.css` — responsive layout, colour palette, and animation styling
- `script.js` — navbar behavior, active section highlighting, form submission, and scroll reveal

## Setup

1. Clone the repository or copy the project files.
2. Open `index.html` in a browser to preview the site.

## Form Submission

The contact form is configured to post to Formspree. Replace the placeholder form ID in `script.js` with your own Formspree endpoint:

```js
fetch('https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID', ...)
```

## Responsive Design

Breakpoints implemented in CSS:
- `900px` — intro layout stacks to one column
- `768px` — about, contact, and experience sections stack vertically; mobile nav activates
- `600px` — hero buttons stack and skills layout becomes single-column

## Notes

- The portfolio uses Google Fonts: `Space Grotesk` and `JetBrains Mono`.
- The favicon is an inline SVG emoji lightning bolt.
- The footer year is generated dynamically with JavaScript.
