const setInLocalStorage = (key, value) => {
  localStorage.setItem(`devHelper.${key}`, value);
}

const getFromLocalStorage = (key) => {
  return localStorage.getItem(`devHelper.${key}`);
}

export const setTheme = (themeName) => {
  setInLocalStorage('theme', themeName);
  document.documentElement.className = themeName;
}

export const toggleTheme = () => {
  getFromLocalStorage('theme') === 'theme-dark' ? setTheme('theme-light') : setTheme('theme-dark');
}

export const setInitialTheme = () => {
  getFromLocalStorage('theme') === 'theme-dark' ? setTheme('theme-dark') : setTheme('theme-light');
}
