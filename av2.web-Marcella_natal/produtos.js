const produtos = [
  {
    id: 1,
    nome: "Panetone e Chocotone Artesanal",
    preco: 89.90,
    quantidade: "750 gramas",
    categoria: "Panetones",
    descrição: ["Versões recheadas com brigadeiro gourmet, doce de leite, Nutella ou trufas, decoradas com cobertura de chocolate e frutas secas." ],
    imagem: "img/chocotone.webp",
    destaque: false
  },

  {
    id: 2,
    nome: "Panetone Salgado de Queijo Canastra e Alecrim",
    preco: 69.90,
    quantidade: "600 gramas",
    categoria: "Panetones",
    descrição: ["Versão salgada com queijo canastra, alecrim fresco e toque de azeite de oliva."],
    imagem: "img/panetone-salgado.jpg",
    destaque: false
  },

  {
    id: 3,
    nome: "Biscoito de Gengibre Decorado (Gingerbread)",
    preco: 9.90,
    quantidade: "10 unidades",
    categoria: "Biscoitos Festivos",
    descrição: ["Clássico de Natal com glacê real em formatos de boneco, estrela e árvore."],
    imagem: "img/biscoitos-natalinos.webp",
    destaque: false
  },

  {
    id: 4,
    nome: "Sablé de Baunilha com Geleia de Frutas Vermelhas",
    preco: 24.00,
    quantidade: "10 unidades",
    categoria: "Biscoitos Festivos",
    descrição: ["Biscoitos amanteigados crocantes com centro recheado de geleia de frutas vermelhas."],
    imagem: "img/sable-baunilha.jpg",
    destaque: false
  },

  {
    id: 5,
    nome: "Biscoito Amanteigado de Pistache",
    preco: 39.90,
    quantidade: "10 unidades",
    categoria: "Biscoitos Festivos",
    descrição: ["Opção sofisticada com toque cítrico e raspas de limão siciliano."],
    imagem: "img/pistache.jpg",
    destaque: false
  },

  {
    id: 6,
    nome: "Stollen Bites",
    preco: 32.90,
    quantidade: "200 gramas",
    categoria: "Biscoitos Festivos",
    descrição: ["Mini biscoitos alemães recheados com frutas secas e especiarias, cobertos por açúcar de confeiteiro."],
    imagem: "img/stollen-bites.jpg",
    destaque: false
  },

  {
    id: 7,
    nome: "Biscoito Craquelado de Chocolate e Canela",
    preco: 29.90,
    quantidade: "10 unidades",
    categoria: "Biscoitos Festivos",
    descrição: ["Crocante por fora e macio por dentro, com cobertura de açúcar de confeiteiro."],
    imagem: "img/biscoito-craquelado.jpg",
    destaque: false
  },

  {
    id: 8,
    nome: "Sticks de Biscoito com Chocolate Amargo e Avelãs",
    preco: 29.90,
    quantidade: "150 gramas",
    categoria: "Biscoitos Festivos",
    descrição: ["Palitos crocantes banhados no chocolate amargo e cobertos com avelãs."],
    imagem: "img/sticks.png",  
    destaque: false
  },

  {
    id: 9,
    nome: "Bolo Natalino de Especiarias",
    preco: 89.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Bolo úmido temperado com canela, cravo, mel e noz-moscada."],
    imagem: "img/bolo-especiarias.jpg",
    destaque: false
  },

  {
    id: 10,
    nome: "Bolo Red Velvet Festivo",
    preco: 139.90,
    quantidade: "1.5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Camadas de massa vermelha com frosting de cream cheese e frutas frescas."],
    imagem: "img/bolo-red-velvet.jpg",
    destaque: false
  },

  

  {
    id: 11,
    nome: "Guirlanda de Bolo de Nozes",
    preco: 149.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    ingredientesPrincipais: ["Bolo em formato de guirlanda decorado com nozes tostadas, tâmaras e alecrim fresco."],
    imagem: "img/guirlanda-nozes.webp",
    destaque: false
  },

  {
    id: 12,
    nome: "Bolo Chiffon de Chocolate com Avelãs e Brigadeiro Gourmet",
    preco: 159.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Bolo alto e fofinho, recheado com brigadeiro cremoso e coberto com lascas de avelã tostada."],
    imagem: "img/bolo-chiffon.jpg",  
    destaque: false
  },

  {
    id: 13,
    nome: "Bolo Naked de Pistache e Frutas Vermelhas",
    preco: 169.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Camadas de massa de pistache com recheio cremoso e frutas vermelhas."],
    imagem: "img/naked-pistache.jpeg ", 
    destaque: true  //destaque home
  },

  {
    id: 14,
    nome: "Bolo Chiffon de Laranja com Frutas Cristalizadas",
    preco: 99.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Bolo leve e aromático coberto por glacê branco."],
    imagem: "img/chiffon-laranja.webp ", 
    destaque: false
  },

  {
    id: 15,
    nome: "Bolo Castelo de Neve de Coco e Baba de Moça",
    preco: 139.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Bolo fofinho de coco com chantilly e fitas de coco seco."],
    imagem: "img/bolo-baba-de-moca.webp",
    destaque: false
  },

  {
    id: 16,
    nome: "Bolo Pinheiro Rústico de Cacau e Amarenas",
    preco: 159.90,
    quantidade: "2 kg",
    categoria: "Bolo de Natal",
    descrição: ["Bolo de chocolate amargo com chantilly e cerejas amarenas inteiras."],
    imagem: "img/bolo-pinheiro.jpg",
    destaque: true  //destaque home
  },

  {
    id: 17,   
    nome: "Bolo de Anjo de Laranja Cítrica com Glacê Real",
    preco: 99.90,
    quantidade: "1,5 kg",
    categoria: "Bolos de Natal",
    descrição: ["Bolo leve e aerado feito à base de claras, com aroma cítrico e cobertura branca."],
    imagem: "img/bolo-laranja.jpeg",
    destaque: false
  },

  {
    id: 18,
    nome: "Banoffee Natalina com Nozes Pecan",
    preco: 99.90,
    quantidade: "1 kg",
    categoria: "Sobremesas de Travessa",
    descrição: ["Base de biscoito, doce de leite, bananas frescas, chantilly e nozes pralinê."],
    imagem: "img/banofe.jpg",
    destaque: false
  },

  

  {
    id: 19,
    nome: "Tiramisù de Natal com Toque de Licores",
    preco: 129.90,
    quantidade: "1,5 kg",
    categoria: "Sobremesas de Travessa",
    descrição: ["Clássica sobremesa italiana montada em travessa de vidro para compartilhar."],
    imagem: "img/tiramisu.webp",
    destaque: false
  },

  {
    id: 20,
    nome: "Travessa de Red Velvet com Geleia de Morango",
    preco: 119.90,
    quantidade: "1,2 kg",
    categoria: "Sobremesas de Travessa",
    descrição: ["Camadas de bolo red velvet, geleia de morango e cream cheese."],
    imagem: "img/travessa-red.jpg",
    destaque: false
  },

  {
    id: 21,
    nome: "Cheesecake Assado de Frutas Vermelhas",
    preco: 139.90,
    quantidade: "1,5 kg",
    categoria: "Sobremesas de Travessa",
    descrição: [
      "Base crocante com creme assado e cobertura de calda de frutas vermelhas."],
    imagem: "img/cheesecake.webp",
    destaque: true  //destque home
  },

  {
    id: 22,
    nome: "Pavê de Pistache com Chocolate Branco",
    preco: 129.00,
    quantidade: "1,2 kg",
    categoria: "Sobremesas de Travessa",
    descrição: [
      "Camadas de creme de pistache artesanal e ganache de chocolate branco."],
    imagem: "img/pave-pistache.webp",
    destaque: false
  },

  {
    id: 23,
    nome: "Guirlanda de Choux Pastry com Creme de Avelã",
    preco: 65.00,
    quantidade: "900 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Anel de carolinas recheado com creme diplomata de avelã e açúcar de confeiteiro."],
    imagem: "img/choux-pastry.webp",
    destaque: false
  },

  {
    id: 24,
    nome: "Entremet Gorro do Papai Noel",
    preco: 24.90,
    quantidade: "500 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Torta individual com mousse de baunilha, coulis de morango e base de brownie."],
    imagem: "img/entremet-noel.webp",
    destaque: false
  },

  {
    id: 25,
    nome: "Pinheirinho de Macarons",
    preco: 99.90,
    quantidade: "600 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Torre em formato de árvore de Natal com macarons de pistache, champanhe e frutas vermelhas."],
    imagem: "img/pinheirinho.webp",
    destaque: true //destque home
  },

  {
    id: 26,
    nome: "Verrine Festiva de Figo e Mascarpone",
    preco: 19.90,
    quantidade: "1 unidade",
    categoria: "Doces de Natal",
    descrição: [
      "Taça em camadas com compota de figo, creme de mascarpone e farofa de amêndoas."],
    imagem: "img/verrine.jpg",
    destaque: false
  },

  {
    id: 27,
    nome: "Tartalete de Maçã Caramelizada e Cardamomo",
    preco: 25.90,
    quantidade: "500 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Torta com base amanteigada, maçãs com cardamomo e massa folhada."],
    imagem: "img/tartalete.webp",
    destaque: false
  },

  {
    id: 28,
    nome: "Bola de Natal de Chocolate Trufado",
    preco: 34.90,
    quantidade: "500 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Esfera de chocolate recheada com mousse de chocolate amargo e crocante de praliné."],
    imagem: "img/esfera-chocolate.webp",
    destaque: false
  },

  

  {
    id: 29,
    nome: "Crème Brûlée de Cumaru e Laranja",
    preco: 19.90,
    quantidade: "150 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Sobremesa com casquinha de açúcar caramelizado, cumaru e raspas de laranja Bahia."],
    imagem: "img/creme-brulee.jpg",
    destaque: false
  },

  {
    id: 30,
    nome: "Torta Folhada de Damasco e Noz-Pecã",
    preco: 119.90,
    quantidade: "1 kg",
    categoria: "Doces de Natal",
    descrição: [
      "Massa folhada crocante recheada com creme de amêndoas, damascos e nozes tostadas."],
    imagem: "img/torta-noz-pecan.webp",
    destaque: false
  },

  {
    id: 31,
    nome: "Fudge de Chocolate Branco, Cranberry e Pistache",
    preco: 39.90,
    quantidade: "200 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Blocos macios de chocolate branco com cranberry e pistache."],
    imagem: "img/fudge-branco.webp",
    destaque: false
  },

  {
    id: 32,
    nome: "Cannoli de Natal com Creme de Ricota",
    preco: 69.90,
    quantidade: "6 unidades",
    categoria: "Doces de Natal",
    descrição: [
      "Massa crocante recheada com creme de ricota doce e laranja cristalizada."],
    imagem: "img/canoli.jpg",
    destaque: false
  },

  {
    id: 33,
    nome: "Tartalete de Caqui e Mel de Flor de Laranjeira",
    preco: 17.90,
    quantidade: "1 unidade",
    categoria: "Doces de Natal",
    descrição: [
      "Base sablée com creme frangipane, fatias de caqui e mel."],
    imagem: "img/torta-caqui.jpg",
    destaque: false
  },

  {
    id: 34,
    nome: "Bavaroise Gelada de Romã e Vinho Espumante",
    preco: 22.00,
    quantidade: "1 unidade",
    categoria: "Doces de Natal",
    descrição: [
      "Sobremesa aerada com geleia de romã e espumante."],
    imagem: "img/roma.jpeg",
    destaque: false
  },

  {
    id: 35,
    nome: "Crostata de Ameixa e Castanha-do-Pará",
    preco: 109.90,
    quantidade: "1 kg",
    categoria: "Doces de Natal",
    descrição: [
      "Torta rústica recheada com compota de ameixas e castanhas brasileiras."],
    imagem: "img/crostata-ameixa.jpg",
    destaque: true  //destque home
  },

  {
    id: 36,
    nome: "Panna Cotta de Cardamomo com Calda de Mirtilos",
    preco: 19.90,
    quantidade: "1 unidade",
    categoria: "Doces de Natal",
    descrição: [
      "Creme italiano aveludado com especiarias e calda de mirtilos."],
    imagem: "img/panna-cotta-mirtilo.jpg",
    destaque: false
  },

  {
    id: 37,
    nome: "Mil-Folhas de Creme Confeiteiro e Morangos",
    preco: 22.90,
    quantidade: "1 unidade",
    categoria: "Doces de Natal",
    descrição: [
      "Camadas crocantes de massa folhada com creme de baunilha e morangos frescos."
    ],
    imagem: "img/mil-folhas.jpg",
    destaque: false
  },


  {
    id: 38,
    nome: "Tartalete Espelhada de Chocolate 70% e Flor de Sal",
    preco: 21.90,
    quantidade: "1 unidade",
    categoria: "Doces de Natal",
    descrição: [
      "Tortinha com ganache de chocolate intenso e toque de flor de sal."],
    imagem: "img/tartalete-chocolate.jpg",
    destaque: false
  },

  {
    id: 39,
    nome: "Toucinho do Céu com Fios de Ovos",
    preco: 89.00,
    quantidade: "800 gramas",
    categoria: "Doces de Natal",
    descrição: [
      "Doce tradicional feito com gemas e amêndoas, decorado com fios de ovos."],
    imagem: "img/toucinho-fios-ovo.jpg",
    destaque: false
  },

  {
    id: 40,
    nome: "Choco-Bombas de Marshmallow",
    preco: 39.00,
    quantidade: "Caixa com 4 unidades",
    categoria: "Doces de Natal",
    descrição: [
      "Esferas de chocolate recheadas com cacau em pó e mini marshmallows para chocolate quente."],
    imagem: "img/choco-bomba.webp",
    destaque: false
  },

  {
    id: 41,
    nome: "Mini Donuts Decorados",
    preco: 69.00,
    quantidade: "Caixa com 12 unidades",
    categoria: "Doces de Natal",
    descrição: [
      "Donuts fofinhos decorados com temática de Natal feito com chocolate e confeitos festivos."],
    imagem: "img/donuts.webp",
    destaque: false
  },

  {
    id: 42,
    nome: "Torta Mousse Três Chocolates em Formato de Estrela",
    preco: 149.90,
    quantidade: "1,5 kg",
    categoria: "Doces de Natal",
    descrição: [
      "Torta gelada com três camadas de mousse: chocolate amargo, ao leite e branco."],
    imagem: "img/torta-mousse.jpg",
    destaque: false
  },

  {
    id: 43,
    nome: "Caixa Degustação Mini Panetones",
    preco: 55.90,
    quantidade: "Caixa com 4 unidades",
    categoria: "Kits e Presentes",
    descrição: [
      "Quarteto de mini panetones nos sabores gotas de chocolate, doce de leite com nozes, brigadeiro gourmet e frutas cristalizadas."],
    imagem: "img/mini-panetones.jpg",
    destaque: false
  },

  {
    id: 44,
    nome: "Caneca de Natal com Mini Biscoitos",
    preco: 49.90,
    quantidade: "100 gramas de biscoitos",
    categoria: "Kits e Presentes",
    descrição: [
      "Caneca temática recheada de mini biscoitos amanteigados, preparada para presentear."],
    imagem: "img/caneca-biscoito.jpg",
    destaque: true   //destaque home
  },

  {
    id: 45,
    nome: "Kit Monte sua Árvore de Biscoito",
    preco: 59.90,
    quantidade: "350 gramas de biscoito",
    categoria: "Kits e Presentes",
    descrição: [
      "Kit com biscoitos em tamanhos decrescentes para montar e confeitar uma árvore de Natal."],
    imagem: "img/kit-arvore.webp",
    destaque: false
  },

  

  {
    id: 46,
    nome: "Cesta Manhã de Natal",
    preco: 119.00,
    quantidade: "2 kg",
    categoria: "Kits e Presentes",
    descrição: [
      "Combinação de bolo pequeno de especiarias, pote de biscoitos, geleia artesanal e sachês de chá festivo."],
    imagem: "img/cesta-de-natal.jpeg",
    destaque: false
  },

  {
    id: 47,
    nome: "Pote de Biscoito Decorativo",
    preco: 39.00,
    quantidade: "250 gramas",
    categoria: "Kits e Presentes",
    descrição: [
      "Pote de cerâmica decorado com quebra-nozes recheado com sortimento de biscoitos finos amanteigados."],
    imagem: "img/pote-biscoito.webp",
    destaque: false
  },

  {
    id: 48,
    nome: "Kit Petit Fours de Natal",
    preco: 49.90,
    quantidade: "12 unidades",
    categoria: "Kits e Presentes",
    descrição: [
      "Caixa com 12 doces variados, incluindo mini brownies, trufas de panetone e biscoitos recheados."],
    imagem: "img/kit-petit.jpg",
    destaque: false
  },

  {
    id: 49,
    nome: "Voucher Presente Sobremesa da Ceia",
    preco: 79.90,
    quantidade: "1 voucher",
    categoria: "Kits e Presentes",
    descrição: [
      "Vale-presente para resgatar uma sobremesa especial na semana do Natal."],
    imagem: "img/voucher.jpg",
    destaque: false
  },

  {
    id: 50,
    nome: "Caixa de Brigadeiros Gourmet Temáticos",
    preco: 54.90,
    quantidade: "12 unidades",
    categoria: "Kits e Presentes",
    descrição: [
      "Seleção de brigadeiros de nozes, vinho do Porto, churros e pistache, decorados com confeitos."],
    imagem: "img/caixa-brigadeiros.jpg",
    destaque: false
  }
];