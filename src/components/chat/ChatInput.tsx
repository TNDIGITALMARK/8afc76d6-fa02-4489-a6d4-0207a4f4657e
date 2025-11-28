'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = message.trim();
    if (trimmed && !disabled) {
      onSend(trimmed);
      setMessage('');

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  };

  return (
    <div className="border-t border-border bg-card/50 backdrop-blur-sm p-4">
      <div className="max-w-4xl mx-auto flex gap-3 items-end">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Message NeuraNova..."
          disabled={disabled}
          className="min-h-[56px] max-h-[200px] resize-none rounded-2xl bg-white/80 border-input focus:border-primary transition-colors"
          rows={1}
        />

        <Button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="rounded-full w-12 h-12 p-0 bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all duration-300 disabled:opacity-50"
        >
          {disabled ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </Button>
      </div>

      <div className="max-w-4xl mx-auto mt-2 text-xs text-muted-foreground text-center">
        Press Enter to send, Shift+Enter for new line
      </div>
    </div>
  );
}
