export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string; // Local image path in Books folder
  category: Category;
  keywords?: string[]; // Optional search keywords for alternative spellings, character names, etc.
}

export enum Category {
  SELF_HELP = 'Self-Help',
  AUTOBIOGRAPHIES = 'Autobiographies & Biographies',
  PERSONALITY_DEV = 'Personality Development',
  MARVEL = 'Marvel',
  COMICS = 'Comics',
  MANGA = 'Manga',
  STUDY = 'Study',
  OTHERS = 'Others',
  PROMPTS = 'Prompts'
}

export enum AppView {
  HOME = 'HOME',
  CATALOGUE = 'CATALOGUE'
}

export interface ThemeColors {
  primary: string; // The neon accent
  secondary: string; // Gradient end color
  glow: string;    // Shadow color
}
