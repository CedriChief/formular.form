let form = document.getElementById("form");
const code = /^(([^<>()[].,;:s@]+(.[^<>()[].,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit',function(event){
    event.preventDefault(); 
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");


    let usernameMessage= document.getElementById('usernameMessage');

  if(username.value === "" || username.value.length < 3 )
  {
      username.style.border="2px  solid red"; 
      usernameMessage.textContent= "le username doit avoir minimu 3 caractères";
      usernameMessage.style.color="red";

  }else if( username.value.length > 15) {
    username.style.border="2px  solid red"; 
    usernameMessage.textContent= "le username ne doit pas dépasser 15 caractères";
    usernameMessage.style.color="red";
  }else{
    username.style.border="2px  solid green"; 
    usernameMessage.textContent= "";

  }



  // 
let emailMessage = document.getElementById('emailMessage');

  if(email.value==="" )
  {
      email.style.border="2px  solid red"; 
      emailMessage.textContent="le mail doit contenir 3 caracteres"
      emailMessage.style.color="red";
  }else if(email.value===""){

  
      emailMessage.style.border="2px  solid red"; 
      emailMessage.textContent= "l email ne doit pas contenir 15 caractères";
      emailMessage.style.color="red";
}else{
    emailMessage.style.border="2px solid green";
}


let passwordMessage= document.getElementById('passwordMessage');

if(password.value === "" || password.value.length < 3 )
{
    password.style.border="2px  solid red"; 
    passwordMessage.textContent= "le mot de passe doit avoir minimu 3 caractères";
    passwordMessage.style.color="red";

}else if( password.value.length > 15) {
  password.style.border="2px  solid red"; 
  passwordMessage.textContent= "le password ne doit pas dépasser 15 caractères";
  passwordMessage.style.color="red";
}else{
  password.style.border="2px  solid green"; 
  passwordMessage.textContent= "";

}




let password2Message= document.getElementById('password2Message');

if(password2.value === "")
{
    password2.style.border="2px  solid red"; 
    password2Message.textContent= "le mot de passe doit etre similaire";
    password2Message.style.color="red";

  }else if(password.value === "" || password.value.length < 3 )   {   

    password2.style.border="2px  solid red"; 
    password2Message.textContent= "le mot de passe doit avoir minimu 3 caractères";
    password2Message.style.color="red";

}else if( password2.value ==="") {
  password2.style.border="2px  solid red"; 
  password2Message.textContent= "le password ne doit pas dépasser 15 caractères";
  password2Message.style.color="red";
}else{
  password2.style.border="2px  solid green"; 
  password2Message.textContent= "";
}
});