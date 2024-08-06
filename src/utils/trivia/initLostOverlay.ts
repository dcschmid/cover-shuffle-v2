import { calculateTheCurrentPoints } from "../calculateTheCurrentPoints";

/**
 * Initializes the lost overlay by adding a click event listener to each element with the class 'lost'.
 * When a lost item is clicked, it shows the overlayLost overlay, clears the timer interval,
 * and updates the points displayed in the overlayLost.
 *
 * @param timerInterval - The timer interval to be cleared on lost item click
 * @param triviaRoundWonName - The name of the localStorage item to set to 'false' on lost item click
 * @param currentPointsName - The name of the localStorage item to get the current points from
 */
export function initLostOverlay(
  timerInterval: any,
  triviaRoundWonName: string,
  currentPointsName: string,
) {
  // Select all elements with the class 'lost'
  const lostItems = document.querySelectorAll(".lost");
  const overlayLost = document.getElementById("overlayLost") as HTMLElement;

  lostItems.forEach((item) => {
    /**
     * Event listener for when a lost item is clicked.
     * Shows the overlayLost overlay, clears the timer interval,
     * and updates the points displayed in the overlayLost.
     *
     * @param {Event} event - The click event
     */
    item.addEventListener("click", (_event) => {
      // Show the overlayLost overlay
      overlayLost!.style.visibility = "visible";

      // Clear the timer interval
      clearInterval(timerInterval!);

      // Set the triviaRoundWonName localStorage item to 'false'
      localStorage.setItem(triviaRoundWonName, String("false"));

      // Calculate the current points
      calculateTheCurrentPoints();

      // Update the points in the overlayLost
      const pointDiv = overlayLost!.querySelector(".point");

      // Get the current points from localStorage, defaulting to 0 if not set
      const currentPoints = localStorage.getItem(currentPointsName) || "0";

      // Set the text content of the pointDiv to the current points
      pointDiv!.textContent = `${currentPoints} Pt`;
    });
  });
}
