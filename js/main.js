// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');


let confirmInput = document.getElementById('confpass');

//Array
let member = loadMember();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let membUser = document.getElementById('user');
  let membPass = document.getElementById('pass');
  member.push(newMember(membUser, membPass));
  saveMember();
  // userInput.value= "";
  // passInput.value= "";


  alert("Sign Up Successful");
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}

function saveMember(){
  localStorage.setItem('member', JSON.stringify(member));
}

function loadMember(){
  let memberStr = localStorage.getItem('member');
  return JSON.parse(memberStr) ?? [];
}
  
function newMember(memberUser, memberPass ) {//, conf{
  return {
    membUser: memberUser,
    membPass: memberPass, 
    // confirmPass: contactNumbers,  
    completed: false
    
  };
}
