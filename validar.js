const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const mail = document.getElementById('mail')
const telefono = document.getElementById('telefono')
const parrafo = document.getElementById('warnings')



form.addEventListener('submit' , e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false
    let regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ''
    if (nombre.value.length <= 0) {
        warnings = warnings + 'Error,debe ingresar un nombre<br>'
        entrar = true
    }
    
    if (telefono.value.length <9) {
        warnings = warnings + 'Error,el número no es válido,ingrese un número con mas de 9 digitos <br>'
        entrar = true
    
    }
    if (isNaN(telefono.value)) {
        warnings = warnings + 'Error,número de telefono inválido,solo se aceptan números<br>'
        entrar = true 
        
    }
    if (!regexmail.test(mail.value)) {
        warnings = warnings + 'Error,email no valido <br>'
        entrar = true
    }
    
    if (entrar){
        parrafo.innerHTML = warnings
    }
    })
