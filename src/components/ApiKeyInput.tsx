
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Key } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  hasApiKey: boolean;
}

const ApiKeyInput = ({ onApiKeySet, hasApiKey }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim().startsWith('sk-')) {
      onApiKeySet(apiKey.trim());
      localStorage.setItem('openai_api_key', apiKey.trim());
      toast({
        title: "API Key Set!",
        description: "OpenAI integration is now active. Enjoy smoother conversations!",
      });
      setApiKey('');
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key starting with 'sk-'",
        variant: "destructive",
      });
    }
  };

  if (hasApiKey) {
    return (
      <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
        <Key className="w-4 h-4 text-green-600" />
        <span className="text-sm text-green-700 font-medium">OpenAI API Connected</span>
        <Button
          onClick={() => {
            localStorage.removeItem('openai_api_key');
            onApiKeySet('');
          }}
          variant="outline"
          size="sm"
          className="ml-auto"
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Key className="w-4 h-4 text-yellow-600" />
        <span className="text-sm font-medium text-yellow-800">Connect OpenAI for Better Conversations</span>
      </div>
      <p className="text-xs text-yellow-700 mb-3">
        Enter your OpenAI API key to enable dynamic, AI-powered responses from your sassy uncle!
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Input
            type={showApiKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="pr-10"
          />
          <Button
            type="button"
            onClick={() => setShowApiKey(!showApiKey)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            variant="ghost"
          >
            {showApiKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          </Button>
        </div>
        <Button type="submit" disabled={!apiKey.trim()}>
          Connect
        </Button>
      </form>
    </div>
  );
};

export default ApiKeyInput;
