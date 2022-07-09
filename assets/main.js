
$(document).ready(function(){

    $('section').load('home.html')

    //função load na navbar
    $('#menu_home').click(function(){
        $('section').load('home.html', function())
    })
    $('#menu_enviar').click(function(){
        $('section').load('enviar.html',function())
    })
    $('#menu_quemsomos').click(function(){
        $('section').load('quemsomos.html',function())
    })
    $('#menu_resenhas').click(function(){
        $('section').load('resenhas.html',function())
    })






    //mostrar e ocultar conteudo
    $('#mostrar').click(function(){
        $('#conteudo').show()
    })
    $('#ocultar').click(function(){
        $('#conteudo').hide()
    })


    


});



