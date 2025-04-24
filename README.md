# EdgExpert AI Voice System

A lightweight demo of an AI-powered voice assistant system with plan selection, user information collection, and simulated conversation.

## Features

- Plan selection (Demo, Standard, Premium)
- User information collection with validation
- Simulated AI voice assistant conversation
- Data export functionality
- Mobile-responsive design

## Running the Project

### Option 1: Run Locally

1. Clone or download this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to the URL shown in the terminal (typically http://localhost:3000)

### Option 2: Deploy to Glitch

1. Create a new project on Glitch
2. Import this project using the ZIP file or GitHub import
3. Glitch will automatically install dependencies and start the server
4. Click "Show" to view your live application

### Option 3: Deploy to Replit

1. Create a new Replit project
2. Upload this project as a ZIP or use Git import
3. Run the following commands in the Replit shell:
   ```
   npm install
   npm run dev
   ```
4. Your app should be available in the Replit webview

## Project Structure

- `index.html` - Main HTML entry point
- `src/` - Source code directory
  - `components/` - React components
  - `pages/` - Page components
  - `utils/` - Utility functions
  - `App.jsx` - Main application component
  - `main.jsx` - Application entry point
  - `index.css` - Global CSS styles
- `public/` - Static assets

## Customization

- Modify the plan options in `src/components/PlanSelector.jsx`
- Change the simulated conversation in `src/components/DemoResult.jsx`
- Update styling in `src/index.css` and component files

## Dependencies

- React
- React Router DOM
- TailwindCSS
- Vite (build tool)

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is available for private use.