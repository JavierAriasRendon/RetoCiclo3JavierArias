//Funciones para Partyroom

function traerInformacionSalones(){

    $.ajax({
        url:"http://localhost:8080/api/Partyroom/all",
        type:'GET',
        dataType:'JSON',
        success : function (respuesta){
            pintarSalones(respuesta);
        },
        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });
}


function pintarSalones(datos){
    let html = "";
    html += "<thead>";
    html += "<tr>"
    html += "<th>Name</th>"
    html += "<th>Owner</th>"
    html += "<th>Capacity</th>"
    html += "<th>Description</th>"
    html += "</tr>"
    html += "</thead>";

    html += "<body>"
    for (dato of datos){
        html += "<tr>"
        html += "<td>"+dato.name+"</td>";
        html += "<td>"+dato.owner+"</td>";
        html += "<td>"+dato.capacity+"</td>";
        html += "<td>"+dato.description+"</td>";
        html +="<td> <button onclick='borrarPartyroom("+dato.id+")'>Borrar</button>";
        html +="<td> <button onclick='selActualizarPartyroom("+dato.id+")'>Actualizar</button>";
        html += "</tr>"
    }

    html += "</body>"
    $("#tablaSalones").html(html);



}


function guardarInformacionPartyroom() {
    let myData = {

        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        description: $("#description").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Partyroom/save",
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#owner").val("");
            $("#capacity").val("");
            $("#description").val("");
            $("#name").val("");
            traerInformacionSalones();
            alert("Se ha guardado Partyroom")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



function borrarPartyroom(id){

    let opcion=confirm("¿Esta seguro de eliminar el Partyroom?");

    if(opcion===true){
        $.ajax({
            url:"http://localhost:8080/api/Partyroom/"+id,
            type:"DELETE",
            datatype:"JSON",
            success:function(respuesta){
                alert("Partyroom Borrado");
                traerInformacionSalones();
            }
        });
    }
}

function selActualizarPartyroom(id){

    $.ajax({
        url:"http://localhost:8080/api/Partyroom/"+id,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
                $("#id").val(respuesta.id),
                $("#owner").val(respuesta.owner),
                $("#capacity").val(respuesta.capacity),
                $("#description").val(respuesta.description),
                $("#name").val(respuesta.name)
        },

        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });

}

function actualizarPartyroom() {
    let myData = {
        id:$("#id").val(),
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        description: $("#description").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Partyroom/update",
        type: 'PUT',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#owner").val("");
            $("#capacity").val("");
            $("#description").val("");
            $("#name").val("");
            traerInformacionSalones();
            alert("Se ha actualizado Partyroom")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



//Funciones Clientes

function traerInformacionClientes(){

    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:'GET',
        dataType:'JSON',
        success : function (respuesta){
            pintarClientes(respuesta);
        },
        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });
}


function pintarClientes(datos){
    let html = "";
    html += "<thead>";
    html += "<tr>"
    html += "<th>Name</th>"
    html += "<th>Email</th>"
    html += "<th>Age</th>"
    html += "</tr>"
    html += "</thead>";

    html += "<body>"
    for (dato of datos){
        html += "<tr>"
        html += "<td>"+dato.name+"</td>";
        html += "<td>"+dato.email+"</td>";
        html += "<td>"+dato.age+"</td>";
        html +="<td> <button onclick='borrarCliente("+dato.idClient+")'>Borrar</button>";
        html +="<td> <button onclick='selActualizarCliente("+dato.idClient+")'>Actualizar</button>";
        html += "</tr>"
    }

    html += "</body>"
    $("#tablaClientes").html(html);



}


function guardarInformacionCliente() {
    let myData = {

        name: $("#nameCliente").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#nameCliente").val("");
            $("#email").val("");
            $("#password").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("Se ha guardado Cliente")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



function borrarCliente(id){

    let opcion=confirm("¿Esta seguro de eliminar el Cliente?");

    if(opcion===true){
        $.ajax({
            url:"http://localhost:8080/api/Client/"+id,
            type:"DELETE",
            datatype:"JSON",
            success:function(respuesta){
                alert("Cliente Borrado");
                traerInformacionClientes();
            }
        });
    }
}

function selActualizarCliente(id){

    $.ajax({
        url:"http://localhost:8080/api/Client/"+id,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            $("#idClient").val(respuesta.idClient),
                $("#nameCliente").val(respuesta.name),
                $("#email").val(respuesta.email),
                $("#age").val(respuesta.age)
        },

        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });

}

function actualizarCliente() {
    let myData = {
        idClient:$("#idClient").val(),
        name: $("#nameCliente").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: 'PUT',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#nameCliente").val("");
            $("#email").val("");
            $("#password").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("Se ha actualizado Cliente")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}


//Funciones Mensajes

function traerInformacionMensaje(){

    $.ajax({
        url:"http://localhost:8080/api/Message/all",
        type:'GET',
        dataType:'JSON',
        success : function (respuesta){
            pintarMensajes(respuesta);
        },
        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });
}


function pintarMensajes(datos){
    let html = "";
    html += "<thead>";
    html += "<tr>"
    html += "<th>Messages</th>"
    html += "</tr>"
    html += "</thead>";

    html += "<body>"
    for (dato of datos){
        html += "<tr>"
        html += "<td>"+dato.messageText+"</td>";
        html +="<td> <button onclick='borrarMensaje("+dato.idMessage+")'>Borrar</button>";
        html +="<td> <button onclick='selActualizarMensaje("+dato.idMessage+")'>Actualizar</button>";
        html += "</tr>"
    }

    html += "</body>"
    $("#tablaMensajes").html(html);



}


function guardarInformacionMensaje() {
    let myData = {

        messageText: $("#messageText").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Message/save",
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#messageText").val("");
            traerInformacionMensaje();
            alert("Se ha guardado Mensaje")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



function borrarMensaje(id){

    let opcion=confirm("¿Esta seguro de eliminar el Mensaje?");

    if(opcion===true){
        $.ajax({
            url:"http://localhost:8080/api/Message/"+id,
            type:"DELETE",
            datatype:"JSON",
            success:function(respuesta){
                alert("Mensaje Borrado");
                traerInformacionMensaje();
            }
        });
    }
}

function selActualizarMensaje(id){

    $.ajax({
        url:"http://localhost:8080/api/Message/"+id,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            $("#idMessage").val(respuesta.idMessage),
                $("#messageText").val(respuesta.messageText)

        },

        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });

}

function actualizarMensaje() {
    let myData = {
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Message/update",
        type: 'PUT',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#messageText").val("");
            traerInformacionMensaje();
            alert("Se ha actualizado Mensaje")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}

//Funciones Categorias

function traerInformacionCategorias(){

    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:'GET',
        dataType:'JSON',
        success : function (respuesta){
            pintarCategorias(respuesta);
        },
        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });
}


function pintarCategorias(datos){
    let html = "";
    html += "<thead>";
    html += "<tr>"
    html += "<th>Name Category</th>"
    html += "<th>Description Category</th>"
    html += "</tr>"
    html += "</thead>";

    html += "<body>"
    for (dato of datos){
        html += "<tr>"
        html += "<td>"+dato.name+"</td>";
        html += "<td>"+dato.description+"</td>";
        html +="<td> <button onclick='borrarCategoria("+dato.id+")'>Borrar</button>";
        html +="<td> <button onclick='selActualizarCategoria("+dato.id+")'>Actualizar</button>";
        html += "</tr>"
    }

    html += "</body>"
    $("#tablaCategorias").html(html);



}


function guardarInformacionCategoria() {
    let myData = {

        name: $("#nameCategory").val(),
        description: $("#descriptionCategory").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Category/save",
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            traerInformacionCategorias();
            alert("Se ha guardado Categoria")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



function borrarCategoria(id){

    let opcion=confirm("¿Esta seguro de eliminar la Categoria?");

    if(opcion===true){
        $.ajax({
            url:"http://localhost:8080/api/Category/"+id,
            type:"DELETE",
            datatype:"JSON",
            success:function(respuesta){
                alert("Categoria Borrada");
                traerInformacionCategorias();
            }
        });
    }
}

function selActualizarCategoria(id){

    $.ajax({
        url:"http://localhost:8080/api/Category/"+id,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
                $("#idCategory").val(respuesta.id),
                $("#nameCategory").val(respuesta.name),
                $("#descriptionCategory").val(respuesta.description)

        },

        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });

}

function actualizarCategoria() {
    let myData = {
        id:$("#idCategory").val(),
        name:$("#nameCategory").val(),
        description: $("#descriptionCategory").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Category/update",
        type: 'PUT',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            traerInformacionCategorias();
            alert("Se ha actualizado Categoria")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}


//Funciones Reservas

function traerInformacionReservas(){

    $.ajax({
        url:"http://localhost:8080/api/Reservation/all",
        type:'GET',
        dataType:'JSON',
        success : function (respuesta){
            pintarReservas(respuesta);
        },
        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });
}


function pintarReservas(datos){
    let html = "";
    html += "<thead>";
    html += "<tr>"
    html += "<th>StartDate</th>"
    html += "<th>DavolutionDate</th>"
    html += "<th>Status</th>"
    html += "</tr>"
    html += "</thead>";

    html += "<body>"
    for (dato of datos){
        html += "<tr>"
        html += "<td>"+dato.startDate+"</td>";
        html += "<td>"+dato.devolutionDate+"</td>";
        html += "<td>"+dato.status+"</td>";
        html +="<td> <button onclick='borrarReserva("+dato.idReservation+")'>Borrar</button>";
        html +="<td> <button onclick='selActualizarReserva("+dato.idReservation+")'>Actualizar</button>";
        html += "</tr>"
    }

    html += "</body>"
    $("#tablaReservas").html(html);



}


function guardarInformacionReserva() {
    let myData = {

        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Reservation/save",
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            traerInformacionReservas();
            alert("Se ha guardado Reserva")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



function borrarReserva(id){

    let opcion=confirm("¿Esta seguro de eliminar la Reserva?");

    if(opcion===true){
        $.ajax({
            url:"http://localhost:8080/api/Reservation/"+id,
            type:"DELETE",
            datatype:"JSON",
            success:function(respuesta){
                alert("Reserva Borrada");
                traerInformacionReservas();
            }
        });
    }
}

function selActualizarReserva(id){

    $.ajax({
        url:"http://localhost:8080/api/Reservation/"+id,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
                $("#idReservation").val(respuesta.idReservation),
                $("#status").val(respuesta.status)

        },

        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });

}

function actualizarReserva() {
    let myData = {
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Reservation/update",
        type: 'PUT',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            traerInformacionReservas();
            alert("Se ha actualizado Reserva")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}



//Funciones Score

function traerInformacionScore(){

    $.ajax({
        url:"http://localhost:8080/api/Score/all",
        type:'GET',
        dataType:'JSON',
        success : function (respuesta){
            pintarScore(respuesta);
        },
        error:function(respuesta, xhr){
            alert("Error de petición");
        }
    });
}


function pintarScore(datos){
    let html = "";
    html += "<thead>";
    html += "<tr>"
    html += "<th>Messages</th>"
    html += "<th>Stars</th>"
    html += "</tr>"
    html += "</thead>";

    html += "<body>"
    for (dato of datos){
        html += "<tr>"
        html += "<td>"+dato.messageText+"</td>";
        html += "<td>"+dato.stars+"</td>";
        html += "</tr>"
    }

    html += "</body>"
    $("#tablaScore").html(html);



}


function guardarInformacionScore() {
    let myData = {

        messageText: $("#messageTextScore").val(),
        stars: $("#stars").val(),


    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Score/save",
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/json',
        data: dataToSend,
        success: function (respuesta) {
            $("#resultado").empty();
            $("#messageTextScore").val("");
            $("#stars").val("");
            traerInformacionScore();
            alert("Se ha guardado Calificación")
        },
        error: function (respuesta, xhr) {
            alert("Error de petición");
        }
    });
}
