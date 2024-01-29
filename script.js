// User data already Exit in Local Storage

const getDetails = localStorage.getItem("UserDetails");


if(getDetails){
    const usersInfo = JSON.parse(getDetails);

   document.getElementById("first-name").innerText = usersInfo.firstName;
   document.getElementById("last-name").innerText = usersInfo.lastName;
   document.getElementById("country").innerText = usersInfo.country;
   document.getElementById("phone-number").innerText = usersInfo.phoneNumber;
   document.getElementById("state").innerText = usersInfo.state;
   document.getElementById("city").innerText = usersInfo.city;
   document.getElementById("village").innerText = usersInfo.village;
}
else{
    userData();
}


function userData(){
    const firstName = prompt("Enter Your First Name");
    const lastName = prompt("Enter Your Last Name");
    const country = prompt("Enter Yout Country Name");
    const phoneNumber = prompt("Enter Your Contact No.");
    const state = prompt("Enter your State");
    const city = prompt("Enter your City Name");
    const village  = prompt("Enter Your Village Name");

   const userInfo = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
   }
   
   localStorage.setItem("UserDetails",JSON.stringify(userInfo));

   document.getElementById("first-name").innerText = userInfo.firstName;
   document.getElementById("last-name").innerText = userInfo.lastName;
   document.getElementById("country").innerText = userInfo.country;
   document.getElementById("phone-number").innerText = userInfo.phoneNumber;
   document.getElementById("state").innerText = userInfo.state;
   document.getElementById("city").innerText = userInfo.city;
   document.getElementById("village").innerText = userInfo.village;

}

userData();

