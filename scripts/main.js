let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/pexels-marc-schulte-2779948.jpg") {
    myImage.setAttribute("src", "image/123.jpg");
  } else {
    myImage.setAttribute("src", "image/pexels-marc-schulte-2779948.jpg");
  }
}


function setUserName(){
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla rất ngầu\n Chào \"${myName}\", bạn khỏe ha!`;
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla rất ngầu, ${storedName}`;
};

myButton.onclick = () => {
  setUserName();
};
