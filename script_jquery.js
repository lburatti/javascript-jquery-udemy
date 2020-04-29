// PARA VERIFICAR SE TODO DOCUMENTO/PAGINA FOI CARREGADO - E APÓS VAI RODAR A FUNÇÃO ABAIXO

// $(document).ready(function() {
//     //$(elemento).ação(função p/ o button)
//     $('button').click(function() {
//         //ao clicar no botão ele vai executar a função
//         $('h1').hide(); //esconder
//     });
// });

// FORMA REDUZIDA PARA LEIRUTA DO DOCUMENT

// $(function() {
//     $('button').click(function() {
//         $('h1').hide(); 
//     });
// });

// ALTERAR CSS

$(function() {
    $('button').click(function() {
        //$(elemento).ação(1º "propriedade", 2º "valor")
        $('#unico').css("color", "green"); 
    });
});

// $(function() {
//     $('#azul').click(function() {
//         $('p').css("color", "blue"); 
//     });
//     $('#vermelho').click(function() {
//         $('p').css("color", "red"); 
//     });
// });

// EFEITO FADE E DELAY + MENSAGEM + ENCADEAMENTO EM BLOCO

$(function() {
    $('#azul').click(function() {
        $('p').css("color", "blue");
        // fadeOut() - oculta de forma "leve"
        $('p').fadeOut(); 
        // delay(tempo em milisegundos, ou seja 1s = 1000ms)
        $('p').delay(1000); 
        // fadeIn() - reexibe de forma "leve" - pode usar tempo, por exemplo:
        $('p').fadeIn(5000);
    });
    $('#vermelho').click(function() {
        $('p').css("color", "red"); 
        // fadeOut() - oculta de forma "leve" (PODE passar parâmetro, por exemplo 'slow' para mais suave, ou 'fast' para mais rapido)
        $('p').fadeOut('slow'); 
        // delay(tempo em milisegundos, ou seja 1s = 1000ms)
        $('p').delay(1000); 
        // fadeIn() - reexibe de forma "leve"
        $('p').fadeIn('fast');

        // mensagem após clicar
        // $('#mensagem').text('Cor alterada com sucesso');
        // $('#mensagem').css('color', 'red');
        // $('#mensagem').css('border', '1px solid red');
        // $('#mensagem').delay(3000); 
        // $('#mensagem').fadeOut('fast');

        // mensagem - encadeamento em bloco
        $('#mensagem')
            .text('Cor alterada com sucesso')
            .css({color: 'red', border: '1px solid red', backgroundColor: '#F5F2F2'})//declaração multipla de css
            .delay(3000)
            .fadeOut('fast');
    });
});

// ADICIONANDO UMA CLASS

$(function() {
    $('button').addClass('black');
});

// REMOVENDO UMA CLASS

$(function() {
    $('p').removeClass('texto');
});

// SLIDESHOW - objetivo: quando clicar em no link, só exibirá a imagem deste link e as demais ficam escondidas

$(function() {
    //clicando no link 1
    $('#link1').click(function() {
        $('#img1').show();//exibindo
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });
    //clicando no link 2, exibo a img2 e escondo as demais
    $('#link2').click(function() {
        $('#img1').hide();
        $('#img2').show();//exibindo
        $('#img3').hide();
        $('#img4').hide();
    });
    //clicando no link 3
    $('#link3').click(function() {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show();//exibindo
        $('#img4').hide();
    });
    //clicando no link 4
    $('#link4').click(function() {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show();//exibindo
    });
});

