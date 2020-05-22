let preguntas; 
let count;


function displayListElement(item,num){
    str = '<div class="post-preview"><h2 class="post-title">' + num + ".- " + item.pregunta + '</h2><p class="post-meta">' + item.respuesta + '</p></div><hr>'
    $("#lista").append(str);
}
function displayLista(lista){
    $("#lista").text("");
    for(lis in lista){
        displayListElement(lista[lis], lis);
    }
}
function getPreguntas(deck){
    $.getJSON(deck, function(r){
        displayLista(r);
        preguntas = r;
        count = 0;
        displayQuestion(preguntas[count]);
    });
}
function displayQuestion(question){
    $("#main-pregunta").html(question.pregunta);
    $("#main-respuesta").hide();
    $("#main-respuesta").html(question.respuesta);
}
function siguientePregunta(){
    if((count+=1)>=preguntas.length){
    count = 0;
    }
    displayQuestion(preguntas[count]);
}



getPreguntas("json/mi.json");
