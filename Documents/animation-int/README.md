# React + TypeScript + Vite

This repository contains a high-performance, purely CSS-driven animation implemented in React, designed to recreate the specific visual and timing requirements demonstrated in the reference video.

Code Quality: Uses React components and CSS Modules for encapsulation. Clear separation of JSX logic and @keyframes timing.

Performance: Entirely driven by pure CSS Keyframes and transform properties, ensuring native GPU acceleration and instant load.

# Technology Stack
Framework: React (Vite/Next.js Compatible)
Styling: CSS Modules (.module.css)
Animation: Pure CSS Keyframes (@keyframes) and transform properties.

# Pure CSS Keyframes
Performance Focus: Ensures the animation runs on the browser's native thread (GPU), providing maximum smoothness and instant load time. Avoids the overhead of heavy JS animation libraries (e.g., Framer Motion).

# No Dynamic Imports
The entire component and its assets are synchronously loaded on initial page load.

# Key-Based Re-triggering
The animation uses a unique key={index} prop on the wrapper. Updating the key in state forces React to destroy and remount the component, which in turn triggers the CSS animation: ... forwards rule again, meeting the requirement to re-trigger via CSS/React state, not imperative JavaScript DOM manipulation.

# Knowledge gained after this project
In depth knowledge gaining of clip-path and keyframes.
Cut edge shaping of each object (Still learning).
Great challenge to us.

Installation and Running
# Clone the repository
git clone [Your Repo URL]
cd elevate-animation

# Install dependencies
npm install

# Run the development server
npm run dev