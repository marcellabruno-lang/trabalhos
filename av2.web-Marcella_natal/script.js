document.addEventListener("DOMContentLoaded", () => { //JavaScript só comece a executar quando o HTML da página estiver completamente carregado
//===================
// PÁGINA INICIAL
//===================

//===================


//===================
//Sino tocando música

    const botao = document.getElementById("botaoMusica");
    const sino = document.getElementById("iconeSino");
    const texto = document.getElementById("textoMusica");
    const musica = document.getElementById("musicaFundo");

    // Volume inicial baixo
    musica.volume = 0.3;

    botao.addEventListener("click", async () => {

        // Se a música estiver pausada
        if (musica.paused) {

            try {

                await musica.play();

                // Inicia a animação
                sino.classList.add("tocando");

                // Altera o texto
                texto.textContent = "Parar música";

            } catch (erro) {

                console.error("Não foi possível reproduzir a música:", erro);

            }

        } else {

            // Para a música
            musica.pause();

            // Interrompe a animação
            sino.classList.remove("tocando");

            // Altera o texto
            texto.textContent = "Tocar música";
        }
    });

//===================
//Parallax
const secao = document.querySelector(".parallax");

    // Verifica se a seção existe
    if (!secao) return;

    // Camadas do cenário
    const ceu = document.querySelector("#ceu");
    const floresta = document.querySelector("#floresta");
    const vila = document.querySelector("#vila");
    const noel = document.querySelector("#noel");

    function limitar(valor, minimo, maximo) {
        return Math.max(minimo, Math.min(maximo, valor));
    }

    function atualizarParallax() {

        const alturaTela = window.innerHeight;
        const posicao = secao.getBoundingClientRect();

        // Progresso da rolagem entre 0 e 1
        const distancia = secao.offsetHeight - alturaTela;

        const progresso = limitar(
            distancia > 0 ? -posicao.top / distancia : 0,
            0,
            1
        );

        // Movimento das camadas
        const movimentoCeu = progresso * 100;
        const movimentoFloresta = progresso * 115;
        const movimentoVila = progresso * 135;
        const movimentoNoel = progresso * 145;

        // Opacidade
        const desaparecer = 1 - progresso;

        // Céu
        ceu.style.transform =
            `translateY(${movimentoCeu}vh)`;

        ceu.style.opacity = desaparecer;

        // Floresta
        floresta.style.transform =
            `translateY(${movimentoFloresta}vh)`;

        floresta.style.opacity = desaparecer;

        // Vila
        vila.style.transform =
            `translateY(${movimentoVila}vh)`;

        vila.style.opacity = desaparecer;

        // Papai Noel
        const movimentoHorizontalNoel = progresso * 25;

        noel.style.transform = `
            translate(${movimentoHorizontalNoel}vw, ${movimentoNoel}vh)
            rotate(${progresso * 4}deg)
        `;

        // Desaparece próximo ao final
        noel.style.opacity = limitar(
            1 - Math.max(0, (progresso - 0.75) / 0.25),
            0,
            1
        );
    }

    // Atualiza durante a rolagem
    window.addEventListener("scroll", atualizarParallax);

    // Atualiza quando a tela muda de tamanho
    window.addEventListener("resize", atualizarParallax);

    // Estado inicial
    atualizarParallax();

    //===================
    //Slideshow
    //==================

// SLIDESHOW DE PRODUTOS

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let indiceAtual = 0;

    const anterior = document.querySelector("#anterior");
    const proximo = document.querySelector("#proximo");
    const indicador = document.querySelector("#indicador");

    function mostrarSlide(indice) {

        slides.forEach(slide => {
            slide.classList.remove("ativo");
        });

        slides[indice].classList.add("ativo");

        indicador.textContent =
            `${String(indice + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }

    if (anterior && proximo && indicador) {

        proximo.addEventListener("click", () => {

            indiceAtual = (indiceAtual + 1) % slides.length;

            mostrarSlide(indiceAtual);

        });

        anterior.addEventListener("click", () => {

            indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;

            mostrarSlide(indiceAtual);

        });

        mostrarSlide(indiceAtual);
    }

}


// ANIMAÇÃO AO DESCER A PÁGINA

const slideshow = document.querySelector(".slideshow");

if (slideshow) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                slideshow.classList.add("visivel");

                observador.unobserve(slideshow);
            }
        });
    }, {
        threshold: 0.15
    });
    observador.observe(slideshow);
}

//===================
// DESTAQUES DA LOJA

const gradeDestaques = document.querySelector("#grade-destaques");

if (gradeDestaques && typeof produtos !== "undefined") {

    // Seleciona os produtos destacados
    const produtosDestaque = produtos
        .filter(produto => produto.destaque === true)
        .slice(0, 6);

    // Cria os cards
    produtosDestaque.forEach((produto, indice) => {

        const card = document.createElement("article");

        card.classList.add("card-destaque");

        card.style.transitionDelay = `${indice * 120}ms`;

        card.innerHTML = `
            <div class="card-imagem">

                <img src="${produto.imagem}" alt="${produto.nome}">

            </div>

            <div class="card-conteudo">

               <h3>${produto.nome}</h3>

               <p>${produto.descrição}</p>

               <span class="card-preco">
                 R$ ${Number(produto.preco).toFixed(2).replace(".", ",")}
               </span>

                <span class="card-quantidade">
                    Quantidade: ${produto.quantidade}
                </span>

               <a href="produtos.html#produtos" class="card-botao">
                Comprar
                </a>

                </div>
        `;
        gradeDestaques.appendChild(card);
    });
}

// ANIMAÇÃO DOS CARDS DE DESTAQUE

const cards = document.querySelectorAll(".card-destaque");

if (cards.length > 0) {

    const observadorDestaques = new IntersectionObserver(
        (entradas, observador) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");

                    observador.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach(card => {
        observadorDestaques.observe(card);
    });

}


// ANIMAÇÃO DA CHAMADA FINAL

const chamadaFinal = document.querySelector(".chamada-final");

if (chamadaFinal) {

    const observadorChamada = new IntersectionObserver(
        (entradas, observador) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    chamadaFinal.classList.add("visivel");

                    observador.unobserve(chamadaFinal);

                }

            });

        },
        {
            threshold: 0.15
        }
    );
    observadorChamada.observe(chamadaFinal);
}

//===================
// EFEITO DE NEVE

const canvasNeve = document.createElement("canvas");

canvasNeve.id = "neve";

canvasNeve.setAttribute("aria-hidden", "true");

document.body.appendChild(canvasNeve);

const ctx = canvasNeve.getContext("2d");

let larguraTela;
let alturaTela;

let flocos = [];

const quantidadeFlocos = window.innerWidth < 768 ? 35 : 65;

// Configuração do tamanho da tela

function ajustarCanvas() {

    const escala = Math.min(window.devicePixelRatio || 1, 2);

    larguraTela = window.innerWidth;
    alturaTela = window.innerHeight;

    canvasNeve.width = larguraTela * escala;
    canvasNeve.height = alturaTela * escala;

    ctx.setTransform(escala, 0, 0, escala, 0, 0);

}

// Criar flocos

function criarFloco() {

    return {
        x: Math.random() * larguraTela,
        y: Math.random() * alturaTela,

        tamanho: Math.random() * 2.5 + 1,

        velocidade: Math.random() * 0.8 + 0.4,

        vento: Math.random() * 0.5 - 0.25,

        opacidade: Math.random() * 0.4 + 0.3
    };

}

// Inicializar neve

function iniciarNeve() {

    ajustarCanvas();

    flocos = [];

    for (let i = 0; i < quantidadeFlocos; i++) {

        flocos.push(criarFloco());

    }

}

// Desenhar e movimentar os flocos

function animarNeve() {

    ctx.clearRect(0, 0, larguraTela, alturaTela);

    flocos.forEach(flocos => {

        ctx.beginPath();

        ctx.arc(
            flocos.x,
            flocos.y,
            flocos.tamanho,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${flocos.opacidade})`;

        ctx.fill();

        // Movimento vertical
        flocos.y += flocos.velocidade;

        // Movimento horizontal
        flocos.x += flocos.vento;

        // Quando chega ao final, retorna ao topo
        if (flocos.y > alturaTela + 5) {

            flocos.y = -5;
            flocos.x = Math.random() * larguraTela;

        }

        // Mantém os flocos dentro da tela horizontalmente
        if (flocos.x > larguraTela + 5) {

            flocos.x = -5;

        }

        if (flocos.x < -5) {

            flocos.x = larguraTela + 5;

        }

    });

    requestAnimationFrame(animarNeve);

}

// Respeitar preferência por movimento reduzido
const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (!movimentoReduzido.matches) {

    iniciarNeve();

    animarNeve();

    window.addEventListener("resize", iniciarNeve);

}
});

//===================
// PÁGINA PRODUTOS
//===================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sistema de produtos carregado!");

    // ========================================
    // ELEMENTOS HTML
    // ========================================

    const container = document.getElementById("container-produtos");
    const inputBusca = document.getElementById("campo-busca");
    const selectCategoria = document.getElementById("filtro-categoria");
    const contador = document.getElementById("contador-produtos");
    const mensagemVazia = document.getElementById("mensagem-vazia");

    // Modal
    const modal = document.getElementById("modal-detalhes");
    const fecharModalBtn = document.getElementById("fechar-modal");

    const modalImagem = document.getElementById("modal-imagem");
    const modalCategoria = document.getElementById("modal-categoria");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalQuantidade = document.getElementById("modal-quantidade");
    const modalDescricao = document.getElementById("modal-descricao");
    const modalPreco = document.getElementById("modal-preco");
    const modalBtnComprar = document.getElementById("modal-btn-comprar");

    // Toast
    const toastContainer = document.getElementById("toast-container");


    // ========================================
    // VERIFICAR PRODUTOS
    // ========================================

    if (typeof produtos === "undefined") {
        console.error("Erro: produtos.js não foi carregado!");
        return;
    }


    // ========================================
    // FORMATAÇÃO DE PREÇO
    // ========================================

    function formatarPreco(preco) {
        return Number(preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }


    // ========================================
    // MENSAGEM DE CONFIRMAÇÃO
    // ========================================

    function adicionarAoCarrinho(id) {

        const produto = produtos.find(p => p.id === Number(id));

        if (!produto) {
            console.error("Produto não encontrado!");
            return;
        }

        if (!toastContainer) return;

        const toast = document.createElement("div");

        toast.classList.add("toast");
        toast.textContent = `${produto.nome} foi adicionado ao carrinho!`;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);

        console.log("Compra adicionada:", produto.nome);
    }


    // ========================================
    // ABRIR MODAL
    // ========================================

    function abrirModal(id) {

        const produto = produtos.find(p => p.id === Number(id));

        if (!produto || !modal) return;

        // Descrição
        const descricao = produto.descrição ?? produto.descricao ?? "";

        const textoDescricao = Array.isArray(descricao)
            ? descricao.join(" ")
            : descricao;

        // Informações
        modalImagem.src = produto.imagem;
        modalImagem.alt = produto.nome;

        modalCategoria.textContent = produto.categoria;
        modalTitulo.textContent = produto.nome;

        modalQuantidade.textContent = produto.quantidade
            ? `Quantidade: ${produto.quantidade}`
            : "";

        modalDescricao.textContent = textoDescricao;

        modalPreco.textContent = formatarPreco(produto.preco);

        // Botão de compra do modal
        modalBtnComprar.onclick = () => {
            adicionarAoCarrinho(produto.id);
            fecharModal();
        };

        // Exibir modal
        modal.style.display = "flex";

        console.log("Modal aberto:", produto.nome);
    }


    // ========================================
    // FECHAR MODAL
    // ========================================

    function fecharModal() {
        if (modal) {
            modal.style.display = "none";
        }
    }

    if (fecharModalBtn) {
        fecharModalBtn.addEventListener("click", fecharModal);
    }

    if (modal) {

        modal.addEventListener("click", (evento) => {

            if (evento.target === modal) {
                fecharModal();
            }

        });
    }

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            fecharModal();
        }

    });


    // ========================================
    // CRIAR CARDS DOS PRODUTOS
    // ========================================

    function renderizarProdutos(lista) {

        if (!container) return;

        container.innerHTML = "";

        if (contador) {
            contador.textContent =
                `Mostrando ${lista.length} de ${produtos.length} produtos`;
        }

        if (lista.length === 0) {

            if (mensagemVazia) {
                mensagemVazia.style.display = "block";
            }

            return;
        }

        if (mensagemVazia) {
            mensagemVazia.style.display = "none";
        }

        lista.forEach(produto => {

            const card = document.createElement("div");
            card.classList.add("card-produto");

            // Imagem
            const imagem = document.createElement("img");

            imagem.src = produto.imagem;
            imagem.alt = produto.nome;
            imagem.loading = "lazy";

            imagem.addEventListener("click", () => {
                abrirModal(produto.id);
            });

            // Categoria
            const categoria = document.createElement("span");

            categoria.classList.add("categoria-tag");
            categoria.textContent = produto.categoria;

            // Título
            const titulo = document.createElement("h3");

            titulo.classList.add("titulo");
            titulo.textContent = produto.nome;

            titulo.addEventListener("click", () => {
                abrirModal(produto.id);
            });

            // Preço
            const preco = document.createElement("p");

            preco.classList.add("preco");
            preco.textContent = formatarPreco(produto.preco);

            // Botão comprar
            const botaoComprar = document.createElement("button");

            botaoComprar.textContent = "Comprar";

            botaoComprar.addEventListener("click", () => {
                adicionarAoCarrinho(produto.id);
            });

            // Montar card
            card.append(
                imagem,
                categoria,
                titulo,
                preco,
                botaoComprar
            );

            container.appendChild(card);

        });
    }


    // ========================================
    // BUSCA E FILTROS
    // ========================================

    function aplicarFiltros() {

        const termo = inputBusca
            ? inputBusca.value.toLowerCase().trim()
            : "";

        const categoria = selectCategoria
            ? selectCategoria.value.toLowerCase()
            : "todos";

        const filtrados = produtos.filter(produto => {

            const correspondeNome =
                produto.nome.toLowerCase().includes(termo);

            const correspondeCategoria =
                categoria === "todos" ||
                produto.categoria.toLowerCase() === categoria;

            return correspondeNome && correspondeCategoria;

        });

        renderizarProdutos(filtrados);
    }

    if (inputBusca) {
        inputBusca.addEventListener("input", aplicarFiltros);
    }

    if (selectCategoria) {
        selectCategoria.addEventListener("change", aplicarFiltros);
    }


    // ========================================
    // INICIALIZAÇÃO
    // ========================================

    aplicarFiltros();

    console.log("Todos os eventos foram registrados!");

});


//===================
// PÁGINA DA GALERIA
//===================

document.addEventListener("DOMContentLoaded", () => {
 
  const imagens = document.querySelectorAll(".galeria img");

    if (imagens.length === 0) return;

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const imagemAmpliada = document.createElement("img");
    imagemAmpliada.classList.add("lightbox-imagem");

    const fechar = document.createElement("span");
    fechar.classList.add("lightbox-fechar");
    fechar.innerHTML = "&times;";

    lightbox.appendChild(fechar);
    lightbox.appendChild(imagemAmpliada);
    const textoAmpliado = document.createElement("p");
textoAmpliado.classList.add("lightbox-texto");

lightbox.appendChild(textoAmpliado);
    document.body.appendChild(lightbox);

    imagens.forEach(imagem => {
        imagem.addEventListener("click", () => {
            imagemAmpliada.src = imagem.src;
            imagemAmpliada.alt = imagem.alt;
            lightbox.classList.add("ativo");
            textoAmpliado.textContent = imagem.nextElementSibling.textContent;
        });
    });

    fechar.addEventListener("click", () => {
        lightbox.classList.remove("ativo");
    });

    lightbox.addEventListener("click", (evento) => {
        if (evento.target === lightbox) {
            lightbox.classList.remove("ativo");
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            lightbox.classList.remove("ativo");
        }
    });
  });

  //===================
// PÁGINA DO CONTATO
//===================

document.addEventListener("DOMContentLoaded", () => {
 

    const formulario = document.getElementById("formContato");

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        // Captura dos campos
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const assunto = document.getElementById("assunto");
        const mensagem = document.getElementById("mensagem");

        const resultado = document.getElementById("resultado");

        let valido = true;

        // Limpa mensagens anteriores
        document.querySelectorAll(".erro").forEach(erro => {
            erro.textContent = "";
        });

        document.querySelectorAll(".campo input, .campo textarea")
            .forEach(campo => {
                campo.classList.remove("invalido");
            });

        resultado.textContent = "";
        resultado.className = "";

        // Função para mostrar erros
        function mostrarErro(campo, texto) {

            campo.classList.add("invalido");

            campo.parentElement.querySelector(".erro")
                .textContent = texto;

            valido = false;
        }

        // Validação do nome
        if (nome.value.trim() === "") {
            mostrarErro(nome, "Digite seu nome.");
        }

        // Validação do e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            mostrarErro(email, "Digite seu e-mail.");

        } else if (!emailValido.test(email.value.trim())) {

            mostrarErro(email, "Digite um e-mail válido.");

        }

        // Validação do assunto
        if (assunto.value.trim() === "") {
            mostrarErro(assunto, "Digite o assunto.");
        }

        // Validação da mensagem
        if (mensagem.value.trim() === "") {
            mostrarErro(mensagem, "Digite sua mensagem.");
        }

        // Resultado da validação
        if (valido) {

            resultado.textContent =
                "Mensagem enviada com sucesso!";

            resultado.classList.add("sucesso");

            formulario.reset();
        }
    });
});
  

//========================
// PÁGINA SOBRE A HISTÓRIA
//========================

document.addEventListener("DOMContentLoaded", () => {
  // Animação do card da história ao rolar a página

const cardHistoria = document.querySelector(".card-historia");

if (cardHistoria) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                cardHistoria.classList.add("visivel");

                observador.unobserve(cardHistoria);

            }

        });

    }, {
        threshold: 0.2
    });

    observador.observe(cardHistoria);

}

// Contagem regressiva para o Natal

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function atualizarNatal() {

    const agora = new Date();

    let anoNatal = agora.getFullYear();

    // Data do Natal
    let natal = new Date(anoNatal, 11, 25, 0, 0, 0);

    // Se o Natal já passou, considera o próximo ano
    if (
        agora > natal &&
        !(agora.getMonth() === 11 && agora.getDate() === 25)
    ) {
        anoNatal++;
        natal = new Date(anoNatal, 11, 25, 0, 0, 0);
    }

    const diferenca = natal - agora;

    // Quando chegar o Natal
    if (diferenca <= 0) {

        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        return;
    }

    const d = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const m = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const s = Math.floor(
        (diferenca / 1000) % 60
    );

    dias.textContent = String(d).padStart(2, "0");
    horas.textContent = String(h).padStart(2, "0");
    minutos.textContent = String(m).padStart(2, "0");
    segundos.textContent = String(s).padStart(2, "0");

}

// Atualiza imediatamente
atualizarNatal();

// Atualiza a cada segundo
setInterval(atualizarNatal, 1000);

const elementosNatal = document.querySelectorAll(
    ".card-historia, .contagem-natal"
);

if (elementosNatal.length > 0) {

    const observadorNatal = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

                observadorNatal.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.2
    });

    elementosNatal.forEach(elemento => {
        observadorNatal.observe(elemento);
    });

}
  });