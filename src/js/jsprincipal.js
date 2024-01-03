(function($) {
    "use strict";

    var animateHTML = function() {
        var elems;
        var windowHeight;

        function init() {
            elems = document.querySelectorAll('.animate-in');
            windowHeight = window.innerHeight;
            addEventHandlers();
            checkPosition();
        }

        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', init);
        }

        function checkPosition() {
            for (var i = 0; i < elems.length; i++) {
                var positionFromTop = elems[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    elems[i].classList.add('in');
                    if ($(elems[i]).hasClass('info-stats-item')) {
                        animateBubbles(elems[i]);
                    }
                    if ($(elems[i]).hasClass('testimonials-1-circles-item')) {
                        animateTestimonialsCircles(elems[i]);
                    }
                }
            }
        }

        return {
            init: init
        };
    };

    function windowResizeHandler() {
        resizeHeroBoxedCirculars();
    }

    function onContentScroll() {
        var scrollPosition = window.pageYOffset;
    
        if ($('.header').hasClass('bigger') || $('.header').hasClass('no-bg')) {
            if (scrollPosition > 20) {
                $('.header').addClass('is-sticky');
                $('#logo').addClass('is-sticky');
            } else {
                $('.header').removeClass('is-sticky');
                $('#logo').removeClass('is-sticky');
            }
        } else if ($('.header').hasClass('no-bg')) {
            if (scrollPosition > 0) {
                $('.header').addClass('is-sticky');
                $('#logo').addClass('is-sticky');
            } else {
                $('.header').removeClass('is-sticky');
                $('#logo').removeClass('is-sticky');
            }
        } else {
            if (scrollPosition > 93) {
                $('.header').addClass('is-sticky');
                $('#logo').addClass('is-sticky');
            } else {
                $('.header').removeClass('is-sticky');
                $('#logo').removeClass('is-sticky');
            }
        }
    }
    
    window.onscroll = function() {
        onContentScroll();
    };

})(jQuery);


// Botão ler mais celular



function lerMais(textId, btnId,event) {
    
    const textoCompleto = document.getElementById(textId);
    const lerMaisBtn = document.getElementById(btnId);

    
  
    if (textoCompleto.style.maxHeight === '100px') {
      textoCompleto.style.maxHeight = 'none';
      lerMaisBtn.innerHTML = 'Ler Menos<span class="fa fa-angle-up"></span>';
    } else {
      textoCompleto.style.maxHeight = '100px';
      lerMaisBtn.innerHTML = 'Ler Mais<span class="fa fa-angle-down"></span>';
    }
  }

  
  
//   function verificarLarguraTela() {
//     const larguraTela = window.innerWidth;

//     // Se a largura da tela for menor ou igual a 842px
//     if (larguraTela <= 842) {
//       // Mostrar os botões Ler Mais
//       const botoesLerMais = document.querySelectorAll('.BtnReadMore');
//       botoesLerMais.forEach(botao => botao.classList.remove('hidden-class'));
//     } else {
//       // Ocultar os botões Ler Mais
//       const botoesLerMais = document.querySelectorAll('.BtnReadMore');
//       botoesLerMais.forEach(botao => botao.classList.add('hidden-class'));
//     }
//   }

//   // Verificar a largura da tela quando a página carrega
//   verificarLarguraTela();

//   // Adicionar um ouvinte de evento de redimensionamento da janela
//   window.addEventListener('resize', verificarLarguraTela);

// function lerMais(secao) {
//     var dots = document.getElementById(`dots-${secao}`);
//     var moreText = document.getElementById(`more-${secao}`);
//     var btnText = document.getElementById(`BtnReadMore${secao}`);
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Saiba mais";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Saiba menos";
//       moreText.style.display = "inline";
//     }
//   }
  
// Banner carrousel

// Video código

const btnQueroConhecer = document.getElementById('btnQueroConhecer');
const btnFecharPopup = document.getElementById('btnFecharPopup');
const popupContainer = document.getElementById('popupContainer');
btnQueroConhecer.addEventListener("click", function() {
    // Criar elemento de vídeo
    var videoElement = document.createElement("video");
    videoElement.src = "/src/videos/video-site.mp4";  // 
    videoElement.controls = true;
    videoElement.style.width = "70%";
    videoElement.style.border= " border: 1px solid #ccc;"
    videoElement.className = "responsive-video";

    // videoElement.style.margin ="2%"

    // Adicionar o elemento de vídeo à estrutura do pop-up
    popupContainer.innerHTML = "";
    popupContainer.appendChild(videoElement);
    

    // Exibir o pop-up
    popupContainer.style.display = "block";
    btnFecharPopup.style.display = "block";
});

// Função para fechar o pop-up
function fecharPopup() {
    popupContainer.style.display = "none";
    btnFecharPopup.style.display="none";
}
