function traerInformacion(){
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"GET",
        dataType:"JSON",
        success : function (respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)

        }
    });
}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].owner+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}

function guardarInformacion() {
    let myData = {
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"POST",
        data:myData,
        dataType:"JSON",
        complete:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        complete:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha actualizado")
    }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"DELETE",
        data:dataToSent,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("se ha eliminado")
        }
    });
}
// tablas para clientes



function traerInformacionCliente(){
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        dataType:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta.items)

        }
    });
}
function pintarRespuestaCliente(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);
}

function guardarInformacionCliente() {
    let myData = {
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        dataType:"JSON",
        complete:function(respuesta){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageClinte").val("");
            traerInformacionCliente();
            alert("se ha guardado")
        }
    });
}

function editarInformacionCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        complete:function(respuesta){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
            traerInformacionCliente();
            alert("se ha actualizado")
        }
    });
}
function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSent,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            traerInformacionCliente();
            alert("se ha eliminado")
        }
    });
}

//tabla para mensajes

function traerInformacionMensaje(){
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        dataType:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta.items)

        }
    });
}
function pintarRespuestaMensaje(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensaje").append(myTable);
}

function guardarInformacionMensaje() {
    let myData = {
        id:$("#idMensaje").val(),
        messagetext:$("#messagetextMensaje").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        dataType:"JSON",
        complete:function(respuesta){
            $("#resultadoMensaje").empty();
            $("#idMensaje").val("");
            $("#messagetextMensaje").val("");
            traerInformacionMensaje();
            alert("se ha guardado")
        }
    });
}

function editarInformacionMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetextMensaje").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        complete:function(respuesta){
            $("#resultadoMensaje").empty();
            $("#idMensaje").val("");
            $("#messagetextMensaje").val("");
            traerInformacionMensaje();
            alert("se ha actualizado")
        }
    });
}
function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g8ba605dcd09c9d-yy2od4tqd6xe8s2b.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSent,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensaje").empty();
            traerInformacionMensaje();
            alert("se ha eliminado")
        }
    });
}
