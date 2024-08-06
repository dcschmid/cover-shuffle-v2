import type { Result } from "../interfaces/result";
import { createResultItem } from "./createResultItem";

/**
 * Populates the results container element with result items retrieved from localStorage.
 *
 * @param localStorageName - The key to retrieve the results from localStorage.
 * @return This function does not return anything.
 */
export function populateResults(localStorageName: string): void {
  // Get the results container element
  const resultsContainer: HTMLElement | null = document.getElementById("results-container");

  // If the results container element does not exist, exit the function
  if (!resultsContainer) return;

  // Get the results from localStorage
  const results: Result[] = JSON.parse(localStorage.getItem(localStorageName) || "[]");

  // Create a document fragment to improve performance when adding multiple elements to the DOM
  const fragment: DocumentFragment = document.createDocumentFragment();

  // Iterate over the results and create a result item for each one
  results.forEach((result: Result, index: number) => {
    const resultItem: HTMLElement = createResultItem(result, index);
    fragment.appendChild(resultItem);
  });

  // Append the result items to the results container
  resultsContainer.appendChild(fragment);
}
