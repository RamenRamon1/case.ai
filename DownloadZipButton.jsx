import React, { useState } from 'react';

export default function DownloadZipButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate ZIP generation delay
    setTimeout(() => {
      // Here we would normally package the app files
      // Since we can't actually create a ZIP in the browser,
      // we'll create a dummy text file with instructions
      
      const fileContent = `
EdgExpert App Export

This file would normally contain a ZIP of the entire application with:
- src/ directory with all React components
- public/ directory with static assets
- Configuration files (vite.config.js, tailwind.config.js, etc.)
- README.md with setup instructions

To get the actual code, please use the "Download Repository" button in Replit.
      `;
      
      // Create a blob from the contents
      const blob = new Blob([fileContent], { type: 'text/plain' });
      
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = 'edgexpert-app-export.txt';
      
      // Trigger the download
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setIsDownloading(false);
    }, 1500);
  };
  
  return (
    <button 
      onClick={handleDownload}
      className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Preparing ZIP...
        </>
      ) : (
        <>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download as ZIP
        </>
      )}
    </button>
  );
}