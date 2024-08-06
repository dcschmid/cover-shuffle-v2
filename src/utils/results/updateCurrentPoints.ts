/**
 * Updates the text content of the element with the class "point" to the
 * current points stored in localStorage. If no points are stored, it
 * defaults to "0".
 *
 * @param localStorageName - The name of the localStorage item to retrieve the points from.
 * @return {void} This function does not return anything.
 */
export function updateCurrentPoints(localStorageName: string): void {
  // Select the element with the class "point"
  const pointSpan = document.querySelector(".point");

  // Set the text content to the current points stored in localStorage, or "0" if no points are stored
  // If localStorageName does not exist in localStorage, localStorage.getItem will return null,
  // which will be coerced to the string "0".
  pointSpan!.textContent = localStorage.getItem(localStorageName) || "0";
}
