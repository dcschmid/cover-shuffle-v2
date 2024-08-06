/**
 * Sets up the event listener for the "Finished" button click event.
 * It retrieves the button element by its ID and adds a click event listener to it.
 * When the button is clicked, it redirects the user to the specified URL.
 *
 * @param redirectUrl - The URL to redirect the user to when the "Finished" button is clicked.
 */
export function setupFinishButton(redirectUrl: string) {
  // Get the element with the ID "finishedButton"
  // This element is assumed to exist in the HTML document
  const finishedButton = document.getElementById("finishedButton");

  // Check if the finishedButton element exists
  if (finishedButton) {
    // Add a click event listener to the finishedButton element
    finishedButton.addEventListener("click", () => {
      // Redirect the user to the specified URL when the "Finished" button is clicked
      window.location.href = redirectUrl;
    });
  }
}
