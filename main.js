let userName = prompt("Введіть своє ім'я:");
let userAge = prompt("Введіть свій вік:");
let confirmation;

while(userName === "" || userName === null){
  userName = prompt("Введіть своє ім'я", userName);
}
while(userAge === "" || userAge === null || isNaN(userAge)){
  userAge = +prompt("Введіть свій вік", userAge);
}

if (userAge < 18) {
  alert("You are not allowed to visit this website");
} else if (userAge <= 22) {
  confirmation = confirm("Are you sure you want to continue?");
} else{
  alert(`Welcome to the club, ${userName}`);
}

if (confirmation === true) {
  alert(`Welcome to the club, ${userName}`);
} else if (confirmation === false) {
  alert("You are not allowed to visit this website");
}

