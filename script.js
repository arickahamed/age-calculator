function ageInDays() {
  const birthYear = prompt(
    "Hey, wanna check your age then say what year were you born?"
  );
  if (birthYear > 2020 || birthYear === "") {
    alert("You have not born yet!");
  } else {
    const mainCalculation = (2020 - birthYear) * 365;
    const h1 = document.createElement("h1");
    const textAnswer = document.createTextNode(
      "You are" + mainCalculation + "days old."
    );
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").innerHTML = null;
    document.getElementById("flex-box-result").appendChild(h1);
  }
}

function reset() {
  document.getElementById("ageInDays").remove();
}
