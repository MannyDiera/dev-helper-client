const namespacedKey = (key) => {
  return `some.app.${key}`;
}
export const saveInSessionStorage = (key, value) => {
  sessionStorage.setItem(namespacedKey(key), value);
};

export const getFromSessionStorage = (key) => {
  return sessionStorage.getItem(namespacedKey(key));
}
