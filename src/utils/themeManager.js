export const THEMES = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    accentColor: '#38bdf8',
    secondaryColor: '#a855f7',
    icon: '⚡'
  },
  {
    id: 'matrix',
    name: 'Matrix Hacker',
    accentColor: '#22c55e',
    secondaryColor: '#16a34a',
    icon: '🟩'
  },
  {
    id: 'synthwave',
    name: 'Synthwave 84',
    accentColor: '#f43f5e',
    secondaryColor: '#f59e0b',
    icon: '🌆'
  },
  {
    id: 'tokyonight',
    name: 'Tokyo Night',
    accentColor: '#7aa2f7',
    secondaryColor: '#bb9af7',
    icon: '🌙'
  }
];

export const getSavedTheme = () => {
  if (typeof window === 'undefined') return 'cyberpunk';
  return localStorage.getItem('ide_theme') || 'cyberpunk';
};

export const saveTheme = (themeId) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ide_theme', themeId);
  }
};
