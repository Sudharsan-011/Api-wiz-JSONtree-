import React from 'react';
import { useStore } from '../store/useStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <div className="theme-toggle">
      <label>
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </label>
    </div>
  );
};

export default ThemeToggle;
