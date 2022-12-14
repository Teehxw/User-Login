// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn')
let confirmInput = document.getElementById('confpass');

//Array
let member = loadMember();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let membUser = document.getElementById('user').value;
  let membPass = document.getElementById('pass').value;
  for(let i=0; i < member.length;i++){
    if(membUser === member[i].membUser){
      alert("Username already in use")
      return invalid
    }else{
      member.push(newMember(membUser, membPass));
      alert("Sign Up Successful")
      return success
    }
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let memberUserLog = document.getElementById('username').value;
  let memberPassLog = document.getElementById('password').value;
  for (let i=0; i< member.length; i++){
    if(memberUserLog === member[i].membUser && memberPassLog === member[i].membPass){
      alert("Login Successful");
      return success;
}
}    alert("Invalid User or Password")
}


function saveMember(){
  localStorage.setItem('member', JSON.stringify(member));
}

function loadMember(){
  let memberStr = localStorage.getItem('member');
  return JSON.parse(memberStr) ?? [];
}
  
function newMember(memberUser, memberPass ) {
  return {
    membUser: memberUser,
    membPass: memberPass, 
  }
}

function checkUser(){
  let checkUser = document.getElementById('username').value;
  for(let i=0; i < member.length; i++){
    if(checkUser===member[i].membUser){
      alert("Username already in use")
      return alreadyInUse;
    }
  }
}
