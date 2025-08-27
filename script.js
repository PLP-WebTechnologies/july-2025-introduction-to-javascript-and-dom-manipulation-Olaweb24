let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullname = firstName + " " + lastName;
document.getElementById("info").innerText = "Hello, " + fullname + "!";

let age = 24;

if(age >= 24){
    console.log("You are eligible");
}





function calculateTotal(price, quantity) {
  return price * quantity;
}

// Usage
let total = calculateTotal(500, 3); // 500 × 3 = 1500
console.log("Total price is ₦" + total);


function toggleContent() {
  let textElement = document.getElementById("text");
  
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}






let students = ["Ola", "Tunde", "Mary", "Ada"];

for (let i = 0; i < students.length; i++) {
  document.getElementById("list").innerHTML += "<li>" + students[i] + "</li>";
}


document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";



