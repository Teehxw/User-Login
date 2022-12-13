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
  member.push(newMember(membUser, membPass));
  saveMember();
  membUser.value= "";
  membPass.value= "";


  alert("Sign Up Successful");
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let memberUserLog = document.getElementById('username').value;
  let memberPassLog = document.getElementById('password').value;
  for (let i=0; i< member.length; i++){
    if(memberUserLog === member[i].membUser && memberPassLog === member[i].membPass){
      alert("Login Successful");
    }
  }
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
    // completed: ""
    
  };
}
