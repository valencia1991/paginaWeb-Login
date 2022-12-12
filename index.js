// function ingresar(){
//   if (document.form1.txt.value=="admin@gmail.com" && document.form1.num.value=="1234"){window.location="index2.html"}
//   else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}
//   }
//   document.oncontextmenu=new Function("return false");


function obtenerLogin(){
    let emailLogin = document.getElementById('emailLogin').value;
    let   passLoging = document.getElementById('passLogin').value;
        console.log(emailLogin,passLoging)
}
obtenerLogin()


function formPagina(){
  let nombreCompleto = document.getElementById("nombreCompleto").value
  let asunto = document.getElementById("asunto").value
  let tel = document.getElementById("tel").value
  let correo = document.getElementById("correo").value
  console.log(nombreCompleto,asunto,tel,correo)
  alert("me diste clic ")
}
