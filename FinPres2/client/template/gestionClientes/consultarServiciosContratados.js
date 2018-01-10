Template.consultarServiciosContratados.helpers({
//Devuelve una lista de servicio contratados por el usuario UserG
  Services() {
      return ServiciosUser.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
  },
});


//permite eliminar de la base de datos el servicio seleccionado
Template.consultarServiciosContratados.events({
  'click .delete'() {
    swal('Eliminado','Servicio eliminado del historial','success');
    ServiciosUser.remove(this._id);
  },
});
