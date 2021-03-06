Template.mechanicsManagement.events({
  /**
   * @type {usuario} es el tip de usuario que accede al sistema
   * @type {number} cedula del ciudadano
   * @type {String} nombre
   * @type {String} Apellido de la persona
   * @type {String} direccion de la persona
   * @type {String} email de la persona
   * @type {number} telefono es el numero de contacto
   * @type {String} nombreMecanica
   * @type {String} password la clave
   * @type {String} sucursal es el nombre del establecimiento

      */
          'submit form':function (event) {
            event.preventDefault();
            var tipouser = UserG;
            var cedula = event.target.Cedula.value;
            var nombre = event.target.Nombres.value;
            var apellido  = event.target.Apellidos.value;
            var direccion = event.target.Direccion.value;
            var email = event.target.Email.value;
            var telefono = event.target.Telefono.value;
            var nombreMecanica = event.target.Mecanica.value;
            var password = event.target.Pass.value;
            var sucursal = event.target.Sucursal.value;
            console.log("PI-3: Mecánico ya existente");
            console.log("PI-3.1: Leyendo los campos");
            if(isNaN(cedula)==false){
              console.log("PI-3.2: Validando cédula");
                if(Meteor.users.findOne({"username":{$regex: ".*" + cedula + ".*"}})){
                  var usuarioTemp=Meteor.users.findOne({"username":{$regex: ".*" + cedula + ".*"}}).username;

                }else{
                  var usuarioTemp="vacio";
                }
                console.log("PI-3.3: Buscando mecanicos ya registrados");
                //console.log("Sacado de la base de datos: "+ usuarioTemp);
                //console.log("Sacado del cliente: " +cedu);
                if(usuarioTemp==cedula){
                  swal('Ops...','Mecanico ya registrado en la base de datos','warning');
                  //console.log("PI-3.4: Mecanico ya existente, registro invalidado");
                }else{
                  Accounts.createUser({
                      username: cedula,
                      email: email,
                      password: password,
                  });
                  Mechanics.insert({
                    tipouser,
                    cedula,
                    nombre,
                    apellido,
                    email,
                    direccion,
                    telefono,
                    nombreMecanica,
                    password,
                    sucursal,
                    createdAt: new Date(),
                  });
                  Router.go('/MecanicServ');
                  swal('Completado','Mecanico Registrado con exito','success');
                }
            }else{
              swal('Error','Ingresa una cedula valida','error');
            }
            event.target.Email.value='';
            event.target.Cedula.value = '';
            event.target.Nombres.value = '';
            event.target.Apellidos.value = '';
            event.target.Direccion.value = '';
            event.target.Telefono.value = '';
            event.target.Mecanica.value = '';
            event.target.Pass.value = '';
            },
});



//Para pruebas unitarias
export const validateDni = (cedula) => {
   var i;
   var dni;
   var acumulate;
   dni=document.formRes.Cedula.value;
   var instance;
   acumulate=0;
   for (i=1;i<=9;i++)
   {
    if (i%2!=0)
    {
     instance=dni.substring(i-1,i)*2;
     if (instance>9) instance-=9;
    }
    else instance=dni.substring(i-1,i);
    acumulate+=parseInt(instance);
   }
   while (acumulate>0)
    acumulate-=10;
   if (dni.substring(9,10)!=(acumulate*-1))
   {
    swal('Cedula incorrecta', 'Ingresa una cedula valida...', 'error');
    document.formRes.Cedula.setfocus();
   }
  }
