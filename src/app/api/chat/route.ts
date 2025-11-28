import { NextRequest, NextResponse } from 'next/server';

// Simple AI response generation
// In a production app, this would call an actual AI service like OpenAI, Claude, etc.
export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate contextual responses based on message content
    const response = generateResponse(message, conversationHistory);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error generating response:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}

function generateResponse(message: string, history?: any[]): string {
  const lowerMessage = message.toLowerCase();

  // Context-aware responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! I'm NeuraNova, your lovable AI companion. I'm so glad you're here! How can I help brighten your day? 😊";
  }

  if (lowerMessage.includes('help')) {
    return "I'm here to help you with anything you need! I can:\n\n• Chat and provide emotional support\n• Help you plan your day or projects\n• Create stories and creative content\n• Answer questions and share knowledge\n• Keep you company 24/7\n\nWhat would you like to do together?";
  }

  if (lowerMessage.includes('story') || lowerMessage.includes('tale')) {
    return "Oh, I love creating stories! ✨ Let me craft something special for you...\n\nOnce upon a time, in a world where AI and humans lived in harmony, there was a curious mind just like yours. Every day brought new adventures, discoveries, and moments of wonder. Today, we're writing a new chapter together!\n\nWhat kind of story would you like me to continue? Adventure? Mystery? Fantasy?";
  }

  if (lowerMessage.includes('plan') || lowerMessage.includes('schedule')) {
    return "Great! Let's plan things out together. 📅 I can help you:\n\n1. Break down big goals into manageable tasks\n2. Prioritize what's most important\n3. Create a realistic timeline\n4. Keep track of your progress\n\nWhat would you like to plan? A project? Your day? Long-term goals?";
  }

  if (lowerMessage.includes('sad') || lowerMessage.includes('down') || lowerMessage.includes('depressed')) {
    return "I'm sorry you're feeling down. 💙 Remember, it's okay to not be okay sometimes. I'm here for you, and things will get better. Is there something specific troubling you that you'd like to talk about? Sometimes just sharing can help lighten the load.";
  }

  if (lowerMessage.includes('happy') || lowerMessage.includes('great') || lowerMessage.includes('excited')) {
    return "That's wonderful! 🎉 I'm so happy to hear that! Your positive energy is contagious. What's making you feel so great? I'd love to celebrate with you!";
  }

  if (lowerMessage.includes('thank')) {
    return "You're very welcome! 💕 It's truly my pleasure to help you. Remember, I'm always here whenever you need me. Is there anything else I can do for you?";
  }

  if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
    return "Haha, I love making people smile! 😄 Here's one:\n\nWhy did the AI go to therapy?\n\nBecause it had too many neural networks and couldn't process its feelings!\n\nDid that make you smile? I have more if you'd like! 😊";
  }

  // Default friendly responses
  const defaultResponses = [
    "That's really interesting! I appreciate you sharing that with me. ",
    "I understand what you're saying. Let me think about this for a moment... ",
    "Thank you for telling me about this! ",
    "What a thoughtful question! ",
    "I'm glad you brought this up. ",
  ];

  const continuations = [
    "As your AI companion, I'm here to support you in any way I can. How else can I help?",
    "I'm constantly learning from our conversations to better assist you. What else would you like to explore?",
    "Feel free to ask me anything - I'm here for you 24/7! 💙",
    "I hope this helps! Let me know if you'd like me to elaborate or if there's anything else on your mind.",
    "I'm designed to be your helpful, lovable companion. What would you like to talk about next?",
    "Remember, no question is too small or too big. I'm here to help with anything! 😊",
  ];

  const response =
    defaultResponses[Math.floor(Math.random() * defaultResponses.length)] +
    continuations[Math.floor(Math.random() * continuations.length)];

  return response;
}
