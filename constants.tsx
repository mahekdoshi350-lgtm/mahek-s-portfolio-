
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Visual Voice",
    description: "Transforming static characters into a living dialogue where every curve and stroke carries the weight of your story.",
    image: "https://picsum.photos/seed/design1/800/600",
    tags: ["poster design" "experimental typography ", "digital typography"]
  },
  {
    id: 2,
    title: "Narrative in Lines",
    description: "Beyond the reach of words, we weave color and form into visual stories that breathe life into every pixel.",
    image: "https://picsum.photos/seed/design2/800/600",
    tags: ["Editorial", "Typography", "Layout"]
  },
  {
    id: 3,
    title: "Vivid Motion Series",
    description: "A set of abstract motion graphics exploring the intersection of sound and geometry. Designed for an electronic music festival.",
    image: "https://picsum.photos/seed/design3/800/600",
    tags: ["Motion", "Visual Arts", "Abstract"]
  },
  {
    id: 4,
    title: "world through my lence",
    description: "Creating a scalable design system for a tech-startup focused on environmental acoustics. Clean, minimalist, and functional.",
    image: "https://picsum.photos/seed/design4/800/600",
    tags: ["Design System", "UI/UX", "Minimalism"]
  }
];

export const ICONS = {
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  ),
  Moon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
  )
};
