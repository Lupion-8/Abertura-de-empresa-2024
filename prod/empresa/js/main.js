document.getElementById("particles-1") && particlesJS("particles-1", {
    particles: {
        number: {
            value: 40,
            density: {
                enable: !0,
                value_area: 4e3
            }
        },
        color: {
            value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },
        shape: {
            type: "image",
            stroke: {
                width: 0,
                color: "#fff"
            },
            polygon: {
                nb_sides: 6
            },
            image: {
                src: "./imgs/logot_opacity_10.png",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .15,
            random: !0,
            anim: {
                enable: !0,
                speed: .2,
                opacity_min: .15,
                sync: !1
            }
        },
        size: {
            value: 50,
            random: !0,
            anim: {
                enable: !0,
                speed: 2,
                size_min: 5,
                sync: !1
            }
        },
        line_linked: {
            enable: !1,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 1,
            direction: "top",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 0,
                rotateY: 0
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !1,
                mode: "bubble"
            },
            onclick: {
                enable: !1,
                mode: "repulse"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
});


//forçar particulas a serem o mesmo tamnho de header
const div1 = document.querySelector('header');
const div2 = document.querySelector('.particles');

// Ajustar a altura da Div 2 para corresponder à altura da Div 1
div2.style.height = div1.offsetHeight + 'px';

//===============================================================================



$(document).ready(function () {
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();

        var targetId = $(this).attr('href'); // Obtém o destino do link
        var targetElement = $(targetId); // Seleciona o elemento alvo

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top // Rolagem suave para a posição do elemento alvo
            }, 400); // 600 milissegundos de duração
        }
    });
});

let dedoview = false;
$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        gsap.to(".fa-circle-chevron-left", {
            y: 100,
        });
        if (!dedoview) {
            setTimeout(() => {
                gsap.to(".fa-hand-pointer", {
                    display: 'inline'
                });
                dedoview = true;
            }, 3000);
        }

    } else {
        gsap.to(".fa-circle-chevron-left", {
            y: -20,
        });
    }
});



const icon = document.getElementById('icon');
const sections = document.querySelectorAll('section, footer');
let text_anim = false;

function checkSection() {
    // Para cada seção, verifique a sua posição
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Se a seção está passando pelo meio da tela (ou qualquer outra lógica que você queira)
        if (sectionTop < window.innerHeight / 1 && sectionBottom > window.innerHeight / 1) {
            // Altera a cor do ícone baseado na cor da seção
            if (section.classList.contains('blue-section')) {

                gsap.to(".fa-circle-chevron-left", {
                    color: 'white',
                })
            } else if (section.classList.contains('white-section')) {

                gsap.to(".fa-circle-chevron-left", {
                    color: '#01044e',
                });
            }
            if (section.classList.contains('anim-text')) {
                if (!text_anim) {
                    text_anim = true;
                    setTimeout(() => {
                        animateText();
                    }, 3000);
                }
            }
        }
    });
}


window.addEventListener('scroll', checkSection);
document.querySelector('.wapp').addEventListener('click', () => {
    document.querySelector('.pop').style.display = 'flex';
});


setTimeout(() => {
    gsap.to(".wapp", {
        x: 0,
    })
}, 3000);

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}



function letrinhaBonitinhaAnimada() {
    const textElement = document.getElementById("animated-text");
    const letters = textElement.innerText.split('');
    textElement.innerHTML = ''; // Limpa o conteúdo original para adicionar spans

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.innerHTML = letter === ' ' ? '&nbsp;' : letter; // Preserva espaços
        span.style.color = 'white'; // Texto inicial branco
        textElement.appendChild(span);

        // Aplica a cor #ed8534 letra por letra com um delay
        setTimeout(() => {
            span.style.color = 'var(--base7)';
        }, index * 50); // Atraso de 100ms por letra
    });
}

setTimeout(() => {
    letrinhaBonitinhaAnimada();
}, 1000);

//alert("Largura da página: " + document.documentElement.clientWidth + "px, Altura da página: " + document.documentElement.clientHeight + "px");

function mostrarLogin() {
    //document.getElementById('overlay').style.display = 'block'; // Exibe o fundo
    document.querySelector('.lay_form').style.display = 'flex'; // Exibe o formulário
}

// Função para ocultar o formulário
function fecharLogin() {
    //document.getElementById('overlay').style.display = 'none'; // Esconde o fundo
    document.querySelector('.lay_form').style.display = 'none'; // Esconde o formulário
}

//passos mobile
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');

const bar1 = document.querySelector('.bar-1');
const bar2 = document.querySelector('.bar-2');

const num = document.querySelector('.numPas');
const textTitle = document.querySelector('.text-title');
const textDescri = document.querySelector('.text-descri');
const dedinhoMagico = document.querySelector('.fa-hand-pointer');

let startX;

const swipeArea = document.querySelector('.pas');

// Variável para armazenar o passo atual
let currentStep = 1;

function setActiveStep(stepNum) {
    const steps = [step1, step2, step3];
    const bars = [bar1, bar2];

    // Atualizar as cores dos steps e barras
    steps.forEach((step, index) => {
        step.style.borderColor = index < stepNum ? '#02033e' : '#474750';
    });
    bars.forEach((bar, index) => {
        bar.style.backgroundColor = index < stepNum - 1 ? '#02033e' : '#474750';
    });

    // Atualizar o conteúdo de acordo com o passo
    switch (stepNum) {
        case 1:
            setdata(1, 'Reunião de alinhamento', 'Atendimento personalizado, para entendermos melhor sobre seu projeto e oferecermos a melhor solução.');
            break;
        case 2:
            setdata(2, 'Envio de documentação', 'Recebimento de toda a documentação de forma digital. Você não precisa sair do conforto de sua casa.');
            dedinhoMagico.style.display = "none";
            break;
        case 3:
            setdata(3, 'Sonho realizado!', 'Oba! Seu CNPJ saiu e sua empresa já tá pronta pra te receber e te acompanhar nessa jornada.');

            break;
    }

    // Atualizar a variável currentStep
    currentStep = stepNum;

}

function setdata(n, t, tx) {
    num.textContent = n;
    textTitle.textContent = t;
    textDescri.textContent = tx;
}

// Iniciar com o passo 1 ativo
setActiveStep(1);

// Eventos de clique nos steps
step1.addEventListener('click', () => setActiveStep(1));
step2.addEventListener('click', () => setActiveStep(2));
step3.addEventListener('click', () => setActiveStep(3));

// Evento ao iniciar o toque
swipeArea.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
});

// Evento ao terminar o toque
swipeArea.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;

    handleSwipe(startX, endX);
});

// Função para calcular a direção do swipe (apenas esquerda/direita)
function handleSwipe(startX, endX) {
    const diffX = endX - startX;

    // Limite mínimo para considerar um deslize
    const minSwipeDistance = 70; // Ajuste conforme necessário

    if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) {
            // Deslizou para a direita (passo anterior)
            if (currentStep > 1) {
                setActiveStep(currentStep - 1);
            }
        } else {
            // Deslizou para a esquerda (próximo passo)
            if (currentStep < 3) {
                setActiveStep(currentStep + 1);
            }
        }
    }
}



// Debounce function para limitar chamadas frequentes
function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}


function ajustBtns() {
    const btns = document.querySelectorAll('.btn_white');
    const formDesktop = document.querySelector('.passos-abrir-empresa-desktop');
    const displayValue = getComputedStyle(formDesktop).display;

    btns.forEach(btn => {
        // Remova qualquer listener existente antes de adicionar um novo para evitar duplicatas
        btn.removeEventListener('click', mostrarLogin); // Supondo que você só adicione esse tipo de listener

        if (displayValue === "none") {
            //btn.addEventListener('click', mostrarLogin);
            btn.parentElement.href = 'form';
            document.querySelector('.lay_form').style.display = 'flex'; // Exibe o formulário
        } else {
            btn.parentElement.href = 'form';
            document.querySelector('.lay_form').style.display = 'flex'; // Exibe o formulário  
        }
    });
}

// Debounce na função ajustBtns para evitar chamadas excessivas durante o resize
const debouncedAjustBtns = debounce(ajustBtns, 250);

window.addEventListener('resize', debouncedAjustBtns);

ajustBtns(); // Chamada inicial para configurar os eventos corretamente ao carregar



for (var e = document.getElementsByClassName("accordion-item"), t = 0; t < e.length; t++)
    e[t].querySelector(".accordion-header").addEventListener("click", n);
function n(e) {
    this.parentNode.classList.toggle("expanded"),
        "rotate(180deg)" == this.parentNode.querySelector(".accordion-icon").style.webkitTransform ? this.parentNode.querySelector(".accordion-icon").style.transform = "rotate(0deg)" : this.parentNode.querySelector(".accordion-icon").style.transform = "rotate(180deg)"
}



const cardServ1 = document.querySelectorAll('.csv1');
const cardServ2 = document.querySelectorAll('.csv2');

document.querySelector('._578').addEventListener('mouseenter', () => {
    cardServ1.forEach(element => {
        element.classList.add('card-serv-open');
    });
    cardServ2.forEach(element => {
        element.classList.remove('card-serv-open');
    });
});


document.querySelector('._579').addEventListener('mouseenter', () => {
    cardServ2.forEach(element => {
        element.classList.add('card-serv-open');
    });
    cardServ1.forEach(element => {
        element.classList.remove('card-serv-open');
    });

});




//desescrever texto e reescrever
const texts = ["Abertura de empresa simples e rápido!", "Transforme sua ideia em realidade"];
let currentTextIndex = 0;
const element = document.getElementById('animatedText');
let index = 0;

function animateText() {
    eraseText(() => {
        writeText(() => {
            // Espera 3 segundos antes de reiniciar a animação com o outro texto
            setTimeout(() => {
                currentTextIndex = 1 - currentTextIndex; // Alterna entre 0 e 1
                animateText();
            }, 5000);
        });
    });
}

function eraseText(callback) {
    if (index >= 0) {
        element.textContent = texts[currentTextIndex].slice(0, index);
        index--;
        setTimeout(() => eraseText(callback), 50);
    } else {
        index = 0;
        callback();
    }
}

function writeText(callback) {
    if (index < texts[1 - currentTextIndex].length) {
        element.textContent += texts[1 - currentTextIndex].charAt(index);
        index++;
        setTimeout(() => writeText(callback), 50);
    } else {
        callback();
    }
}
//===============================================================================\\



//form whatt
document.querySelector(".wapp").addEventListener("click", (() => {
    document.querySelector(".pop").style.visibility = "visible"
}

)),
    document.querySelector(".fa-times").addEventListener("click", (() => {
        document.querySelector(".pop").style.visibility = "hidden"
    }
    )),
    document.querySelector(".country-image").src = "https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/br.svg",
    document.getElementById("countrySelect").addEventListener("change", (function () {
        var e = document.getElementById("countrySelect")
            , t = e.options[e.selectedIndex].dataset.code;
        t && (document.querySelector(".code").textContent = t),
            document.querySelector(".country-image").src = "https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/" + this.value + ".svg"
    }
    ));
const telef = document.querySelectorAll(".telf");
telef.forEach(element => {
    element.addEventListener("input", (function () {
        const e = function (e) {
            return e.length <= 10 ? e.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3") : e.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
        }(this.value.replace(/\D/g, ""));
        this.value = e
    }
    ));
});
//=================================================================================================================//


function cbOrbt(){
    window.location.assign('./successful');
}

function mostrarNotificacaoDeCookie() {
    // Verifica se o cookie já foi aceito
    if (!document.cookie.split('; ').find(row => row.startsWith('cookieAceito=true'))) {
      // Cria o elemento da notificação
      const notificacao = document.createElement('div');
      notificacao.classList.add('cookie-notification');
      notificacao.innerHTML = `
        Utilizamos apenas cookies essenciais para melhorar sua experiência e garantir o bom funcionamento deste site. Ao prosseguir, você concorda com o uso de cookies.
        <button id="aceitarCookies">Aceitar</button>
      `;

      // Adiciona a notificação ao body
      document.body.appendChild(notificacao);
      notificacao.style.display = 'block';

      // Quando o usuário clicar no botão "Aceitar"
      document.getElementById('aceitarCookies').addEventListener('click', function() {
        // Armazena um cookie indicando que o usuário aceitou
        document.cookie = "cookieAceito=true; max-age=31536000; path=/"; // Expira em 1 ano
        // Remove a notificação
        notificacao.style.display = 'none';
      });
    }
  }
  mostrarNotificacaoDeCookie();