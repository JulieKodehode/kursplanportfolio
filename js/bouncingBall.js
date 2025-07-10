const bounceAnimationCircle = document.querySelector("#bounceAnimationCircle");
const bounceAnimationStartButton = document.querySelector("#bounceAnimationStartButton");
const bounceAnimationPauseButton = document.querySelector("#bounceAnimationPauseButton");
const bounceAnimationResetButton = document.querySelector("#bounceAnimationResetButton");

// Function to handle animation state change
function handleAnimationState(action) {
  if (action === "start") {
    bounceAnimationCircle.style.animationPlayState = "running";
  } else if (action === "pause") {
    bounceAnimationCircle.style.animationPlayState = "paused";
  } else if (action === "reset") {
    bounceAnimationCircle.style.animation = "none";
    void bounceAnimationCircle.offsetWidth;
    bounceAnimationCircle.style.animation = "bounce 2s infinite ease-in-out";
    bounceAnimationCircle.style.animationPlayState = "paused";
  };
};

// Add event listeners to buttons
bounceAnimationStartButton.addEventListener("click", () => handleAnimationState("start"));
bounceAnimationPauseButton.addEventListener("click", () => handleAnimationState("pause"));
bounceAnimationResetButton.addEventListener("click", () => handleAnimationState("reset"));

export {handleAnimationState};