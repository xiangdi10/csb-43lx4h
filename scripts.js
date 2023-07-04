console.log("To infinity and beyond.");

// write your JavaScript here
document.getElementById("submit").addEventListener("click", () => {
  let rate = document.getElementById("rate_input").value;

  document.getElementsByClassName("rate_msg")[0].style.display = "block";
  console.log(document.getElementsByClassName("rate_msg")[0]);
  document.getElementsByClassName("rate_msg")[0].innerHTML =
    "You said that it was " + rate + "!!";
});
