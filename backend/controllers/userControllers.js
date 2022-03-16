const User = require('../models/userModels')
const bcryptjs = require('bcryptjs')

const usersControllers = {

    signUpUsers:async (req,res)=>{

        let {name, surName, email, password, from } = req.body.userData

        try {
    
            const usuarioExiste = await User.findOne({ email }) //BUSCAR SI EL USUARIO YA EXISTE EN DB
            
            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) === 0) { //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
                    res.json({ success: false, from:"signup", message: "Ya has realizado tu SignUp de esta forma por favor realiza SignIn" })
                } else {
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada) 
                    if(from === "form-Signup"){ 
                        //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
                        await usuarioExiste.save()
    
                    res.json({
                        success: true, 
                        from:"signup", //RESPONDE CON EL TOKEN Y EL NUEVO USUARIO
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN "
                    }) 
                    
                    }else{
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "Agregamos "+from+ " a tus medios para realizar signIn" })
                }// EN ESTE PUNTO SI EXISTE RESPONDE FALSE
            }
            } else {
                //SI EL USUARIO NO EXISTE
               
                const contraseñaHasheada = bcryptjs.hashSync(password, 10) //LO CREA Y ENCRIPTA LA CONTRASEÑA
                // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
                const nuevoUsuario = await new User({
                    name,
                    surName,
                    email,
                    password:[contraseñaHasheada],
                    emailVerificado:true,
                    from:[from],
                
                })
              
                //SE LO ASIGNA AL USUARIO NUEVO
                if (from !== "form-Signup") { //SI LA PETICION PROVIENE DE CUENTA GOOGLE
                    await nuevoUsuario.save()
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "Congratulations, user has been created from " +from
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
    
                } else {
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
    
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "We have already sent you an email, please check your mail"
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                }
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, please try again later" }) //CAPTURA EL ERROR
        }
    },
    signInUser: async (req, res) => {

        const { email, password,  from } = req.body.logedUser
        console.log(req.body.loggedUser)
        try {
            const usuarioExiste = await User.findOne({ email })

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Tu usuarios no a sido registrado realiza signIn" })

            } else {
                if (from !== "form-Signin") { 
                    
                    let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (contraseñaCoincide.length >0) { //TERCERO VERIFICA CONTRASEÑA

                        const userData = {
                                        name: usuarioExiste.name,
                                        surName: usuarioExiste.surName,
                                        email: usuarioExiste.email,
                                        from:usuarioExiste.from
                                        }
                        await usuarioExiste.save()

                        res.json({ success: true, 
                                   from:from,
                                   response: {userData }, 
                                   message:"Bienvenido nuevamente "+userData.name+" "+userData.surName,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"No has realizado el registro con "+from+"si quieres ingresar con este metodo debes hacer el signUp con " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        if(contraseñaCoincide.length >0){
                        const userData = {
                            name: usuarioExiste.name,
                            surName: usuarioExiste.surName, 
                            email: usuarioExiste.email,
                            from:usuarioExiste.from
                            }
                        
                        res.json({ success: true, 
                            from: from, 
                            response: {userData }, 
                            message:"Welcome back! "+userData.name+" "+userData.surName,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"User or Password are wrong",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"Verify your email please"
                          }) 
                    }

                } //SI NO ESTA VERIFICADO
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong, please try again later" })
        }
    },
    signOutUser: async (req, res) => {
       
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('sesion cerrada ' + email))
    },

}
module.exports = usersControllers