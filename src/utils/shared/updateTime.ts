/**
 * Updates the display of minutes and seconds based on the time remaining.
 * @param timeRemaining - The time remaining in seconds.
 */
export function updateTime(timeRemaining: number): void {
  // Get the elements that will display the minutes and seconds
  const minutesElement = document.getElementById("minutes") as HTMLElement;
  const secondsElement = document.getElementById("seconds") as HTMLElement;

  // Convert the time remaining to a string, padded with leading zeros to 4 digits
  const timeStr = `${timeRemaining}`.padStart(4, "0");

  // Extract the minutes and seconds from the time string

  // The first two characters of the time string represent the minutes
  const minutes = timeStr.slice(0, 2);

  // The last two characters of the time string represent the seconds
  const seconds = timeStr.slice(2);

  // Update the display with the formatted minutes and seconds

  // Set the text content of the minutes element to the formatted minutes
  minutesElement.textContent = minutes;

  // Set the text content of the seconds element to the formatted seconds
  secondsElement.textContent = seconds;
}
