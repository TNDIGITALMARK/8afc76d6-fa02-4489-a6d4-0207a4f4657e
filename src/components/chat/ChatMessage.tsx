'use client';

import { Message } from '@/lib/supabase/chat';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex gap-4 p-4 rounded-2xl transition-all duration-300',
        isUser ? 'bg-white/60 ml-auto max-w-[85%]' : 'bg-gradient-to-br from-primary/10 to-accent/10 mr-auto max-w-[85%]'
      )}
    >
      <div
        className={cn(
          'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
          isUser
            ? 'bg-gradient-to-br from-primary to-primary-hover text-white'
            : 'bg-gradient-to-br from-secondary to-accent text-primary'
        )}
      >
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-sm text-foreground">
            {isUser ? 'You' : 'NeuraNova'}
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(message.created_at).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>

        <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-words">
          {message.content}
        </div>
      </div>
    </div>
  );
}
