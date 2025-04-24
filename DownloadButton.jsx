import React from 'react';
import { exportChatsAsJson } from '../utils/storage';

export default function DownloadButton() {
  const handleDownload = () => {
    // Get all chats as JSON
    const data = exportChatsAsJson();
    
    // Create a blob from the data
    const blob = new Blob([data], { type: 'application/json' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edgexpert-chats.json';
    
    // Trigger the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <button 
      onClick={handleDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
    >
      Download Data
    </button>
  );
}