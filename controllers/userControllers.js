const User = require('../models/userModels')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')        //NPM CRYPTO
const nodemailer = require('nodemailer') //NPM NODEMAILER
const jwt = require('jsonwebtoken')



const sendEmail = async (email, uniqueString) => { //FUNCION ENCARGADA DE ENVIAR EL EMAIL

    const transporter = nodemailer.createTransport({ //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
        host: 'smtp.gmail.com',         //DEFINIMOS LO PARAMETROS NECESARIOS
        port: 465,
        auth: {
            user: "juanacosta.sjrc@gmail.com",    //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
            pass: "bioniccomando"                          //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
        }                                               //CONFIGURACIONES DE GMAIL
    })

    // EN ESTA SECCION LOS PARAMETROS DEL MAIL 
    let sender = "juanacosta.sjrc@gmail.com"  
    let mailOptions = { 
        from: sender,    //DE QUIEN
        to: email,       //A QUIEN
        subject: "Verificacion de email usuario ", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
        html: `
        <div >
        <h1 style="color:red">Press <a href=http://localhost:4000/api/verify/${uniqueString}>HERE </a> to confirm your email. Thank You! </h1>
        </div>
        `
    
    };
    await transporter.sendMail(mailOptions, function (error, response) { //SE REALIZA EL ENVIO
        if (error) { console.log(error) }
        else {
            console.log("Mensaje enviado")

        }
    })
};




const usersControllers = {

    verifyEmail: async (req, res) => {

        const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

        const user = await User.findOne({ uniqueString: uniqueString })
        console.log(user) //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
        if (user) {
            user.emailVerificado = true //COLOCA EL CAMPO emailVerified en true
            await user.save()
            res.redirect("http://localhost:3000/") //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
            //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
        }
        else { res.json({ success: false, response: "Your email has not been verified yet" }) }
    },


    signUpUsers:async (req,res)=>{
        console.log(req.body)
        let {name, surName, email, password,picture,country, from } = req.body.userData
      const test = req.body.test

        try {
    
            const usuarioExiste = await User.findOne({ email }) //BUSCAR SI EL USUARIO YA EXISTE EN DB
            
            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) === 0) {
                    console.log("resultado de if " +(usuarioExiste.from.indexOf(from) === 0 )) //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
                    res.json({ success: false,
                               from:"signup", 
                               message: "You've already signedUp, please signIn" })
                } else {
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                     
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada) 
                    if(from === "form-Signup"){ 
                        //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString) //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO
                    res.json({
                        success: true, 
                        from:"signup", 
                        message: "We've already sent you an email, please check your mail "
                    }) 
                    
                    }else{
                    
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "We have added "+from+ " to complete the form" })
                }
            }
            } else {
                //SI EL USUARIO NO ESXITE
               
                const contraseñaHasheada = bcryptjs.hashSync(password, 10) //LO CREA Y ENCRIPTA LA CONTRASEÑA
                console.log(contraseñaHasheada)
                // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
                const nuevoUsuario = await new User({
                    name,
                    surName,
                    email,
                    password:[contraseñaHasheada],
                    picture,
                    uniqueString:crypto.randomBytes(15).toString('hex'),
                    emailVerificado:false,
                    country,
                    from:[from],
                
                })
              
                //SE LO ASIGNA AL USUARIO NUEVO
                if (from !== "form-Signup") { //SI LA PETICION PROVIENE DE CUENTA GOOGLE
                    await nuevoUsuario.save()
                    res.json({
                        success: true, 
                        from:"signUp",
                        message: "User has been created from: " +from
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
    
                } else {
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario.uniqueString) //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO
    
                    res.json({
                        success: true, 
                        from:"signUp",
                        message: "We've already sent you an email, please check your mailbox to complete the SignUp"
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                } 
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, please try again later" }) //CAPTURA EL ERROR
        }
    },
    signInUser: async (req, res) => {
        console.log(req)
        const { email, password, from } = req.body.loggedUser
        try {
            const usuarioExiste = await User.findOne({ email })

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Your user has not been registered, please do the SignUp" })

            } else {
                if (from !== "form-Signin") { 
                    
                    let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (contraseñaCoincide.length >0) { 
                       
                        const userData = {
                                        id:usuarioExiste._id,
                                        name: usuarioExiste.name,
                                        surName: usuarioExiste.surName,
                                        email: usuarioExiste.email,
                                        picture: usuarioExiste.picture,
                                        country:usuarioExiste.country,
                                        from:usuarioExiste.from
                                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn:  60* 60*24 })
                        

                        res.json({ success: true,  
                                   from:from,
                                   response: {token,userData }, 
                                   message:"Welcome back "+userData.name,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not done the signUp "+from+"si quieres ingresar con este metodo debes hacer el signUp with " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        
                        let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        console.log(contraseñaCoincide)
                        console.log("resultado de busqueda de contraseña: " +(contraseñaCoincide.length >0))
                        if(contraseñaCoincide.length >0){
                            
                        const userData = {
                            id: usuarioExiste._id,
                            name: usuarioExiste.name, 
                            surName: usuarioExiste.surname,
                            email: usuarioExiste.email,
                            picture: usuarioExiste.picture,
                            country:usuarioExiste.country,
                            from:usuarioExiste.from
                            }
                            const token = jwt.sign(userData, process.env.SECRET_KEY, {expiresIn:  60* 60*24 })
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData }, 
                            message:"Welcome back "+userData.name,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"User or password are wrong",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not verified your email"
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

    verificarToken:(req, res) => {
        console.log(req.user)
        if(!req.err){
        res.json({success:true,
                  response:{id:req.user.id, name:req.user.name, surName:req.user.surname,email:req.user.email, picture:req.user.picture, country:req.user.country, from:"token"},
                  message:"Welcome back "+req.user.name}) 
        }else{
            res.json({success:false,
            message:"Please retry signingIn"}) 
        }
    },

}
module.exports = usersControllers