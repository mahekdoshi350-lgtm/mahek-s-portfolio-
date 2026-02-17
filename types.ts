
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type Theme = 'light' | 'dark';
