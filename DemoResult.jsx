import React, { useState, useEffect } from 'react';

const mockConversation = [
  {
    role: 'system',
    message: 'Initializing EdgExpert AI Voice System...'
  },
  {
    role: 'ai',
    message: 'Hello! I\'m the EdgExpert AI assistant. How can I help you today?'
  },
  {
    role: 'user',
    message: 'I need information about my recent case.'
  },
  {
    role: 'ai',
    message: 'I\'d be happy to help with that. Could you please provide your case number or some details about your case?'
  },
  {
    role: 'user',
    message: 'It\'s case #ED-2023-0142 regarding my insurance claim.'
  },
  {
    role: 'ai',
    message: 'Thank you. I\'m retrieving the information for case #ED-2023-0142 now. One moment please...'
  },
  {
    role: 'ai',
    message: 'I have the details of your insurance claim case. Your claim was submitted on April 12, 2023, and is currently under review by our claims department. The estimated completion date is April 29, 2023. Would you like me to provide any specific details about this case?'
  }
];

export default function DemoResult({ name, planType }) {
  const [conversation, setConversation] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (currentIndex < mockConversation.length) {
      const timer = setTimeout(() => {
        setConversation(prev => [...prev, mockConversation[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? 1000 : 2000);
      
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, isComplete]);
  
  const handleRestart = () => {
    localStorage.removeItem('edgexpert_user');
    window.location.reload();
  };
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-center">Demo Experience</h2>
      <p className="text-gray-600 mb-6 text-center">
        Welcome to the {planType.charAt(0).toUpperCase() + planType.slice(1)} plan, {name}!
      </p>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-100 p-3 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-gray-700 font-medium ml-2">EdgExpert Voice Assistant</span>
          </div>
        </div>
        
        <div className="p-4 bg-white h-80 overflow-y-auto flex flex-col space-y-4">
          {conversation.map((item, index) => (
            <div 
              key={index} 
              className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  item.role === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : item.role === 'system'
                      ? 'bg-gray-200 text-gray-700 italic text-sm w-full text-center'
                      : 'bg-gray-100 text-gray-800'
                }`}
              >
                {item.message}
              </div>
            </div>
          ))}
          
          {!isComplete && (
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {isComplete && (
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            This is a demonstration of the EdgExpert AI Voice System.
            In a real implementation, this would be connected to a phone system and voice recognition.
          </p>
          
          <button
            onClick={handleRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
          >
            Restart Demo
          </button>
        </div>
      )}
    </div>
  );
}