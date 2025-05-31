
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ApiKeyInput from './ApiKeyInput';
import { getUncleResponse } from './SassyUncleResponses';
import { generateUncleResponse } from '@/services/openaiService';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! Your sassy uncle is here! Ask me anything - I've got decades of wisdom and an unlimited supply of dad jokes! 😄",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async (message: string) => {
    // Add user message
    addMessage(message, true);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      let uncleResponse: string;
      
      if (apiKey) {
        // Use OpenAI API for dynamic responses
        uncleResponse = await generateUncleResponse(message, apiKey);
      } else {
        // Fallback to pre-written responses
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        uncleResponse = getUncleResponse(message);
      }
      
      addMessage(uncleResponse, false);
    } catch (error) {
      console.error('Error generating response:', error);
      toast({
        title: "Uncle is having trouble!",
        description: "There was an issue generating a response. Using backup responses.",
        variant: "destructive",
      });
      
      // Fallback to pre-written responses on error
      const fallbackResponse = getUncleResponse(message);
      addMessage(fallbackResponse, false);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow-lg border border-orange-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            🧔
          </div>
          <div>
            <h2 className="font-bold text-lg">Sassy Uncle AI</h2>
            <p className="text-orange-100 text-sm">
              {apiKey ? 'Powered by OpenAI • Always witty' : 'Your witty digital uncle • Always online'}
            </p>
          </div>
        </div>
      </div>

      {/* API Key Input */}
      <div className="p-4 border-b border-gray-200">
        <ApiKeyInput onApiKeySet={setApiKey} hasApiKey={!!apiKey} />
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          
          {isTyping && (
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm">
                🧔
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md p-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatInterface;
