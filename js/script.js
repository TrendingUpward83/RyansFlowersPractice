var foot = document.querySelector("footer");
var headingTag = document.querySelector(".tagline");
var address = document.querySelector("address");
var ctcHeader = document.querySelector(".contact h3");
var instaIcon = document.querySelector(".fa-instagram");
var fbIcon = document.querySelector(".fa-facebook");
var hours = document.querySelector(".contact p");

headingTag.innerText = "Hello";
foot.style.background = "#d7ddf3";
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
ctcHeader.innerHTML =
  "<h3>  We're here for you <em> every </em> day of the week.</h3>";
instaIcon.style.color = "#d45bb9";
fbIcon.style.color = "#6a99b5";
hours.style.border = "1px solid #d45bb9";
hours.style.padding = "1em";
//console.log(instaIcon);
