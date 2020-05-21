let preguntas; 
let count;


function displayListElement(item){
    str = '<div class="post-preview"><h2 class="post-title">' + item.pregunta + '</h2><p class="post-meta">' + item.respuesta + '</p></div><hr>'
    $("#lista").append(str);
}
function displayLista(lista){
    $("#lista").text("");
    for(lista of lista){
        displayListElement(lista);
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
