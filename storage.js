/**
 * EdgExpert AI Voice System
 * Storage utility functions for client-side data
 */

// Save a chat to local storage
export const saveChat = (chatData) => {
  try {
    // Get existing chats
    const existingChats = getChats();
    
    // Generate a simple ID
    const chatId = Date.now().toString();
    
    // Create the new chat object with ID
    const newChat = {
      id: chatId,
      ...chatData,
      timestamp: new Date().toISOString()
    };
    
    // Add to existing chats
    existingChats.push(newChat);
    
    // Save back to local storage
    localStorage.setItem('edgexpert_chats', JSON.stringify(existingChats));
    
    return chatId;
  } catch (error) {
    console.error('Error saving chat:', error);
    return null;
  }
};

// Get all chats from local storage
export const getChats = () => {
  try {
    const chats = localStorage.getItem('edgexpert_chats');
    return chats ? JSON.parse(chats) : [];
  } catch (error) {
    console.error('Error getting chats:', error);
    return [];
  }
};

// Get a specific chat by ID
export const getChatById = (chatId) => {
  try {
    const chats = getChats();
    return chats.find(chat => chat.id === chatId);
  } catch (error) {
    console.error('Error getting chat by ID:', error);
    return null;
  }
};

// Delete a chat by ID
export const deleteChat = (chatId) => {
  try {
    let chats = getChats();
    chats = chats.filter(chat => chat.id !== chatId);
    localStorage.setItem('edgexpert_chats', JSON.stringify(chats));
    return true;
  } catch (error) {
    console.error('Error deleting chat:', error);
    return false;
  }
};

// Clear all chats
export const clearAllChats = () => {
  try {
    localStorage.removeItem('edgexpert_chats');
    return true;
  } catch (error) {
    console.error('Error clearing chats:', error);
    return false;
  }
};

// Export chats as JSON string
export const exportChatsAsJson = () => {
  try {
    const chats = getChats();
    return JSON.stringify(chats, null, 2);
  } catch (error) {
    console.error('Error exporting chats:', error);
    return JSON.stringify({ error: 'Failed to export chats' });
  }
};