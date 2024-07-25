export function getLocalData() {
  return parseInt(localStorage.getItem('myTheme')) || 1;
}
export function setLocalData(id) {
  localStorage.setItem('myTheme', id);
}
