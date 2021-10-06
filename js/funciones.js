window.onload = function(){
    var palabra = document.getElementById("palabra");
    var textos = document.querySelectorAll("div");
    var textoFinal;
    var palabraA;

    palabra.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {  //si se pulsa enter se ejecuta la funcion que marca las palabras
            marcar();
        }
    });

    function marcar(){
        palabraA=palabra.value;
        palabra.value="";
        for (let i=0; i<textos.length; i++){
            textoFinal=textos[i].innerHTML;
            textoFinal=textoFinal.replaceAll(palabraA, "<b style= color:red>"+palabraA+"</b>");

            textos[i].innerHTML=textoFinal;
        }
    }

}