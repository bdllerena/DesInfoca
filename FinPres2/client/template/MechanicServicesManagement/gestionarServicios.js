Template.gestionarServicios.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            /**
 *
 *  @type tipouser es el tipo de usuario
 *  @type nombreMecanica es el nombre de la mecanica
 * @type tipoServicio es el servicio que ofrece la mecanica
  * @type descripcion describe los rasgos del daño
   * @type costo describe el costo del trabajo a realizar
    * @type sucursal es el lugar donde esta la mecanica

 * @return {} no retorna
 */
            event.preventDefault();
            var tipouser = UserG;
            var nombreMecanica=Mecanica;
            var tipoServicio = event.target.TipServ.value;
            var descripcion = event.target.DescServ.value;
            var costo  = event.target.Cost.value;
            var sucursal = event.target.Sucursal.value;
            Servicios.insert({
              tipouser,
              nombreMecanica,
              tipoServicio,
              descripcion,
              costo,
              sucursal,
              createdAt: new Date(),
            });
            swal('Exito', 'Servicio Registrado', 'success');
            //alert("Servicio Registrado con exito");
            event.target.TipServ.value = '';
            event.target.DescServ.value = '';
            event.target.Cost.value = '';
            event.target.Sucursal.value = '';
            },
        });

        /**
         * @description valida que los costos sean positivos

         */
export const validarNumeros = (costo) =>{
           if(!isNaN(costo)){
             if(costo>0){
              return true;}
            /*else if (costo==0) {
              alert("Ingrese un valor mayor a 0");
            }*/
            else {
              return false;}
            }
          else {
            return false;
          }
};

/**
 * @description funcion que inserta a la base de datos el tipo de servicio
 *  @param {String} tipeuser tipouser es el tipo de usuario
 *   @param {String} mecanicaAs nombreMecanica es el nombre de la mecanica
 * @ @param {String}  tipoServicio es el servicio que ofrece la mecanica
  * @param {String} descripcion describe los rasgos del daño
   * @param {double} costo describe el costo del trabajo a realizar
    * @param {String} sucursal es el lugar donde esta la mecanic
 */
export const insertData = (tipouser,mecaAs,tipServ,descript,costo,sucursal) =>{
  if(isNaN(tipouser)==true && isNaN(mecaAs)==true && isNaN(descript)==true && isNaN(sucursal)==true && validarNumeros(costo)==true )
  {
    Servicios.insert({
      tipouser,
      mecaAs,
      tipServ,
      descript,
      costo,
      sucursal,
      createdAt: new Date(),
    })
    return 1;
  }
  else {
    //alert("Revisar campos");
    return 0;
  }
};
