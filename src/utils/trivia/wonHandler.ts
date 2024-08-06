import JSConfetti from "js-confetti";
import { calculateTheCurrentPoints } from "../calculateTheCurrentPoints";

/**
 * Handles the win condition of a trivia round.
 *
 * @param timerInterval - The timer interval to clear.
 * @param pointsRoundName - The name of the points round in local storage.
 * @param allCorrectRoundName - The name of the all correct round in local storage.
 * @param triviaRoundName - The name of the trivia round in local storage.
 * @return {void}
 */
export function handleWonClick(
  timerInterval: any,
  pointsRoundName: string,
  allCorrectRoundName: string,
  triviaRoundName: string
): void {
  // Initialize the confetti module
  const jsConfetti = new JSConfetti();

  // Get the necessary DOM elements
  const overlayTimeUp = document.getElementById("timupsOverlay") as HTMLElement;
  const overlayWon = document.getElementById("overlayWon") as HTMLElement;
  const overlayWonLP = document.getElementById("overlayWonLP") as HTMLElement;

  // Get the points for the current round from local storage
  const pointsRound = parseInt(localStorage.getItem(pointsRoundName) || "0", 10);

  // Clear the timer interval
  clearInterval(timerInterval!);

  // Hide the time's up overlay
  overlayTimeUp.style.visibility = "hidden";

  // Check if all questions in the round were answered correctly
  const allCorrectRound = localStorage.getItem(allCorrectRoundName) === "true";

  // Determine which overlay to show based on the all correct round status
  if (allCorrectRound) {
    overlayWonLP!.style.visibility = "visible";
    jsConfetti.addConfetti().then(() => jsConfetti.clearCanvas());
  } else {
    overlayWon!.style.visibility = "visible";
    jsConfetti.addConfetti().then(() => jsConfetti.clearCanvas());
  }

  // Update the points displayed in the overlay
  const pointsDiv = allCorrectRound ? overlayWonLP!.querySelector(".point") : overlayWon!.querySelector(".point");
  pointsDiv!.textContent = `+ ${pointsRound} Pt`;

  // Set the trivia round as won in local storage
  localStorage.setItem(triviaRoundName, String("true"));

  // Calculate and update the current points
  calculateTheCurrentPoints();
}
