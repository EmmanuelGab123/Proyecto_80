var nombre_alumno_array = [];
function submit(){
    var ver_alumno_array = [];
    for ( var j=1; j<=4; j++){
        var nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
    }

    console.log(nombre_alumno_array);
    var longitud = nombre_alumno_array.length;
    for(var k=0;k<longitud;k++){
        ver_alumno_array.push("<h4>Nombre - "+nombre_alumno_array[k]+"</h4>");
    }
    document.getElementById("mostrar_nombres_con_comas").innerHTML = ver_alumno_array;
    var remover_comas = ver_alumno_array.join(" ");
    document.getElementById("mostrar_nombres_sin_comas").innerHTML = remover_comas;
    document.getElementById("botón_enviar").style.display = "none";
    document.getElementById("botón_ordenar").style.display = "inline-block";
}
function sorting(){
    nombre_alumno_array.sort();
    var display_alumnos = [];
    var longitud_estudiantes = nombre_alumno_array.length
    for(var l=0;l<longitud_estudiantes;l++){
        display_alumnos.push("<h4>Nombre - "+nombre_alumno_array[l]+"</h4>");
    }
    var remover_comas = display_alumnos.join(" ")
    document.getElementById("mostrar_nombres_sin_comas").innerHTML = remover_comas;
}
function searching(){
    var s= document.getElementById("s1").value;
    var found=0;
    var m;
    for(m=0; m<nombre_alumno_array.length; m++){
        if (s==nombre_alumno_array[m]){
            found=found+1;
        }
        document.getElementById("p3").innerHTML = "Nombre encontrado! Feliz😑"+found;
        console.log("found name "+found+" time/s)");
    }
}