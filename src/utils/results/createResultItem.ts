import type { Result } from "../interfaces/result";

/**
 * Creates a result item element for the given result and index.
 *
 * @param result - The result object.
 * @param index - The index of the result.
 * @return {HTMLDivElement} The created result item element.
 */
export function createResultItem(result: Result, index: number): HTMLDivElement {
  // Create a new div element for the result item
  const resultItem = document.createElement("div");

  // Add the "result-item" class to the element
  resultItem.classList.add("result-item");

  // Set the innerHTML of the element to display the result details
  resultItem.innerHTML = `
    <!-- The result item container -->
    <div class="resultItem">
      <!-- The result place container -->
      <div class="resultPlace ${result.isWrong ? "resultError" : ""}">${index + 1}.</div>
      <!-- The result cover image -->
      <img class="resultCover" src="${result.coverSrc}" alt="${result.band} - ${result.album}" width="126" height="126" />
      <!-- The result band name -->
      <div class="resultBand">${result.band}</div>
      <!-- The result album name -->
      <div class="resultAlbum">${result.album}</div>
      <!-- The result release date -->
      <div class="resultData">${result.date}</div>
    </div>
  `;

  // Return the created result item element
  return resultItem;
}
