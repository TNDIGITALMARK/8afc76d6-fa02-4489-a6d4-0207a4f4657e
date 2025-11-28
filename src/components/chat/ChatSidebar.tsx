'use client';

import { Conversation } from '@/lib/supabase/chat';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  MessageSquarePlus,
  MessageSquare,
  Trash2,
  MoreVertical,
  Home,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface ChatSidebarProps {
  conversations: Conversation[];
  currentConversationId?: string;
  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
  onDeleteConversation: (id: string) => void;
}

export function ChatSidebar({
  conversations,
  currentConversationId,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
}: ChatSidebarProps) {
  return (
    <div className="w-80 border-r border-border bg-card/30 backdrop-blur-sm flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>

        <Button
          onClick={onNewChat}
          className="w-full rounded-full bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all duration-300"
        >
          <MessageSquarePlus className="w-5 h-5 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {conversations.length === 0 ? (
            <div className="text-center py-8 px-4 text-sm text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-2 opacity-30" />
              <p>No conversations yet</p>
              <p className="text-xs mt-1">Start a new chat to begin</p>
            </div>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={cn(
                  'group flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all duration-200',
                  currentConversationId === conversation.id
                    ? 'bg-primary/10 border border-primary/20'
                    : 'hover:bg-white/50'
                )}
                onClick={() => onSelectConversation(conversation.id)}
              >
                <MessageSquare className="w-4 h-4 text-primary flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-foreground">
                    {conversation.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(conversation.last_message_at).toLocaleDateString()}
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteConversation(conversation.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          <p className="font-semibold text-primary mb-1">NeuraNova AI</p>
          <p>Your lovable AI companion</p>
        </div>
      </div>
    </div>
  );
}
