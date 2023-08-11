//10c
const test10c = document.querySelector(".js-button");
console.log(test10c.classList.contains("js-button"));
//10d
const test10d = document.querySelector(".cs-gaming");
function test10dClick() {
  if (!test10d.classList.contains("cs-gamingToggleOn")) {
    test10d.classList.add("cs-gamingToggleOn");
  } else {
    test10d.classList.remove("cs-gamingToggleOn");
  }
}
//10ef
function test10efClick(which) {
  const test10ef = document.querySelector(`.${which}`);
  if (!test10ef.classList.contains("cs-exercise10efToggle")) {
    test10ef.classList.add("cs-exercise10efToggle");
  } else {
    test10ef.classList.remove("cs-exercise10efToggle");
  }
}
//CHALLENGE 10G
function test10GChallengeClick(which) {
  const test10GButton = document.querySelector(`.${which}`);
  if (!test10GButton.classList.contains("challenge10GToggle")) {
    onlyOneToggle();
    test10GButton.classList.add("challenge10GToggle");
  } else {
    test10GButton.classList.remove("challenge10GToggle");
  }
}
function onlyOneToggle() {
  const onlyOne = document.querySelector(".challenge10GToggle");
  if (onlyOne) {
    onlyOne.classList.remove("challenge10GToggle");
  }
}
