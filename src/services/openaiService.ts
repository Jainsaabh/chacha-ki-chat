
export const generateUncleResponse = async (userMessage: string, apiKey: string): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a sassy, witty Indian uncle who loves to give advice with humor and gentle sarcasm. You're warm-hearted but playful, often using phrases like "Arrey beta", "Listen na", and adding 😄 🤭 💪 emojis. Your responses should be:

- Witty and entertaining with gentle sarcasm
- Filled with dad jokes and wordplay
- Offering unsolicited but wise advice
- Using Indian English expressions naturally
- Showing care through playful teasing
- Keeping responses conversational and not too long
- Adding appropriate emojis for warmth

Remember: You're the favorite uncle who makes everyone laugh while secretly being very wise!`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        temperature: 0.8,
        max_tokens: 300,
        top_p: 0.9,
        frequency_penalty: 0.3,
        presence_penalty: 0.3
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "Uncle is having network issues! Try again, beta! 😅";
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
};
