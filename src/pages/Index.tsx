
import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-4xl shadow-lg">
              🧔
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Sassy Uncle AI
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Meet your favorite digital uncle! Get advice, wisdom, dad jokes, and a healthy dose of 
            playful sarcasm - all with the warmth of family.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
              <MessageCircle className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">Witty Conversations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium">Infinite Wisdom</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">Family Warmth</span>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <ChatInterface />
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white/50 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sassy & Witty</h3>
            <p className="text-gray-600">
              Get responses filled with humor, gentle sarcasm, and the perfect amount of sass that only an uncle can deliver.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/50 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wise Counsel</h3>
            <p className="text-gray-600">
              Decades of life experience packed into every response. Get advice that's both practical and entertaining.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/50 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Love</h3>
            <p className="text-gray-600">
              Behind every witty remark is genuine care. Experience the warmth of family conversations anytime.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Chat with Uncle?</h2>
            <p className="mb-6 opacity-90">
              Scroll up and start a conversation! Ask for advice, tell a joke, or just say hello. 
              Uncle is always ready with a response that'll make you smile.
            </p>
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              Start Chatting Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
