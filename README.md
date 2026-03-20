# Acme Security Educational RPG

An educational 2D role-playing game built to teach users how to interact with enterprise customers and understand their core hardware security challenges.

## Overview
In this game, the player takes on the role of **Jacob**, a Product Manager at Acme Security. Jacob navigates a 2D overworld map representing a city with 10 different companies (buildings). By interacting with the companies, Jacob learns about distinct, real-world hardware security challenges (e.g., tailgating, compliance, emergency access) through a branching dialogue tree and offers appropriate hardware solutions.

## Architecture and Components

The application is built using modern web development practices and game frameworks, structured as a static site packaged in a Docker container.

### 1. Game Engine: Phaser 3
The core gameplay loop is powered by **Phaser 3**, a fast and robust 2D web game framework. 
- **`src/main.js`**: Initializes the Phaser game instance and canvas container.
- **`src/scenes/Overworld.js`**: The main game scene. It handles:
  - Tilemap/background generation and world bounds.
  - The player character (Jacob) physics and top-down keyboard movement.
  - Rendering 10 interactive buildings and their collision zones.
  - Detecting when the player presses the action key (Space) to converse with a building.

### 2. Dialogue System
To simulate a classic "Final Fantasy 7" aesthetic, the game uses a customized HTML/CSS overlay for interactions rather than drawing text on the canvas.
- **`src/ui/DialogueManager.js`**: A class that controls the DOM elements for the dialogue box. It handles the typewriter text effect and renders interactive buttons for dialogue choices.
- **`src/dialogue/companies.js`**: A structured data file containing the scenarios for all 10 companies. Each company has a unique dialogue tree with nodes representing the conversation flow and consequences.
- **`index.html` & CSS**: Contains the core styling for the UI layer, employing dark gradients, monospace fonts, and absolute positioning over the game canvas.

### 3. Build Tool: Vite
The project is scaffolded and bundled using **Vite**, providing an extremely fast local development server and optimized production static builds.
- **`vite.config.js`**: Configured to output the production build to the `dist/` folder using relative paths.
- **`package.json`**: Contains the scripts (`npm run dev`, `npm run build`) and dependencies (`phaser`, `vite`).

### 4. Deployment: Docker & Google Cloud Run
The game is containerized to make it easily deployable to Google Cloud Run.
- **`Dockerfile`**: A multi-stage Docker build. It first uses a Node.js image to run `vite build`, and then copies the resulting `dist/` folder into an Alpine **Nginx** image.
- **`nginx.conf`**: Configured to serve the static files on port 8080 (Cloud Run's default expected port) and route all traffic to `index.html`.

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the provided localhost URL in your browser. Use Arrow Keys to move Jacob, and the Spacebar to interact with buildings.
