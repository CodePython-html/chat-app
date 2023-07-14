// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCD51BVJ07ix9Xbe2F4Y98b3aDPBRJahOE",
    authDomain: "kwitter-aec5c.firebaseapp.com",
    databaseURL: "https://kwitter-aec5c-default-rtdb.firebaseio.com",
    projectId: "kwitter-aec5c",
    storageBucket: "kwitter-aec5c.appspot.com",
    messagingSenderId: "49282673333",
    appId: "1:49282673333:web:93ffad8434f194eca72cfc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room  name"
    });

    localStorage.setItem("room _name",room_name);

    window.location = "kwitter_page.html";

}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location = "kwitter_page.html"

}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwtter_page.html"
}





