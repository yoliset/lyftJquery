$(document).ready(function(){
   $("#botonn").click(function(evento){
      validarNombre();
      validarCorreo();
     validarAmbos();
   });
});
    function validarNombre(){
        var name = $('#name').val();
      if(/^[A-Z][a-z]+$/.test(name)===false){
        alert("Coloca tu nombre");
      }
}
    function validarCorreo(){ 
    var correo= $('#email').val();
    if (/^\S+@\S+\.\S+$/.test(correo) ===false){
        alert("Coloca tu email");
    }
}
    function validarAmbos(){
        var name = $('#name').val();
        var correo= $('#email').val();
    if(/^[A-Z][a-z]+$/.test(name)===false || /^\S+@\S+\.\S+$/.test(correo) ===false){
        alert("llenar", 'Es obligatorio, llenar los datos porfavor!!');
        
    } else {
        window.location.href = 'mapas.html';
    }
}
