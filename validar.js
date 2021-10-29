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
        warnings = warnings + 'ingresar nombre<br>'
        entrar = true
    }
    
    if (telefono.value.length <9) {
        warnings = warnings + 'el número no es válido <br>'
        entrar = true
    }
    if (!regexmail.test(mail.value)) {
        warnings = warnings + 'email no válido <br>'
        entrar = true
    }
    
    if (entrar){
        parrafo.innerHTML = warnings
    }
    })
