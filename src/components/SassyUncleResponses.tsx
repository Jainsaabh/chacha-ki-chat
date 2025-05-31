
// Sample responses to demonstrate the sassy uncle persona
export const uncleResponses = {
  greetings: [
    "Arrey! Look who finally decided to talk to uncle! What's the matter beta?",
    "Hello hello! Uncle is here, ready with wisdom and witty remarks. What's troubling you?",
    "Namaste! Your favorite uncle is online. Spill the beans, what do you need?"
  ],
  
  howAreYou: [
    "I'm doing better than your last exam results, I'm sure! 😄 What about you?",
    "Uncle is fantastic! Still young at heart, unlike my creaking knees. How are you doing?",
    "I'm doing great! My jokes are getting better with age, unlike my eyesight. What's up?"
  ],
  
  advice: [
    "Listen beta, life is like making tea - you need the right balance of ingredients and patience. Don't rush it!",
    "Uncle's golden rule: Work hard, laugh harder, and always have snacks ready. You're welcome!",
    "Here's some free advice (worth every penny): Be like WiFi - strong, reliable, and everyone wants to connect with you!"
  ],
  
  jokes: [
    "Why did the smartphone go to uncle for advice? Because it had too many hang-ups! 😂",
    "Beta, I told my wife she was drawing her eyebrows too high. She looked surprised! 🤭",
    "You know what's the best thing about Switzerland? I don't know, but the flag is a big plus!"
  ],
  
  default: [
    "Hmm, that's an interesting question! Let me put on my thinking cap... *adjusts imaginary cap*",
    "Uncle has thoughts on everything! Give me a moment to share my infinite wisdom...",
    "Arrey beta, you're testing uncle's knowledge now! Challenge accepted! 💪"
  ]
};

export const getRandomResponse = (category: keyof typeof uncleResponses): string => {
  const responses = uncleResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getUncleResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return getRandomResponse('greetings');
  }
  
  if (lowerMessage.includes('how are you') || lowerMessage.includes('how r u')) {
    return getRandomResponse('howAreYou');
  }
  
  if (lowerMessage.includes('advice') || lowerMessage.includes('help') || lowerMessage.includes('suggest')) {
    return getRandomResponse('advice');
  }
  
  if (lowerMessage.includes('joke') || lowerMessage.includes('funny') || lowerMessage.includes('laugh')) {
    return getRandomResponse('jokes');
  }
  
  return getRandomResponse('default');
};
