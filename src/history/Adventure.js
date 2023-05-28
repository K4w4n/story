export default [
    {
        id: 0,
        text: "Você e seu melhor amigo(a) estão de férias e decidem explorar uma pequena cidade misteriosa chamada 'Pineville'. Ao chegar, vocês encontram um cartaz que diz: 'Bem-vindos a Pineville, lar de mistérios e maravilhas ocultas'. Intrigados, vocês decidem investigar.",
        options: [
            { text: "Seguir o sinal para a Floresta Encantada", nextPage: 1 },
            { text: "Explorar a Mansão Assombrada", nextPage: 2 },
        ],
    },
    {
        id: 1,
        text: "A trilha da Floresta Encantada está repleta de árvores altas e estranhas. Enquanto vocês caminham, começam a ouvir vozes sussurrantes e ver criaturas brilhantes entre as folhagens. O que vocês fazem?",
        options: [
            { text: "Seguir as vozes e procurar a origem", nextPage: 3 },
            { text: "Ignorar as vozes e continuar caminhando", nextPage: 4 },
        ],
    },
    {
        id: 2,
        text: "A Mansão Assombrada é escura e assustadora. À medida que vocês exploram os corredores sombrios, objetos se movem sozinhos e vozes ecoam pelos cômodos vazios. O que vocês fazem?",
        options: [
            { text: "Seguir as vozes e investigar os sons", nextPage: 5 },
            { text: "Sair correndo e voltar à cidade", nextPage: 6 },
        ],
    },
    {
        id: 3,
        text: "Vocês seguem as vozes e chegam a uma clareira mágica. Seres místicos dançam ao redor de uma fogueira, e um deles os convida para participar. Vocês aceitam o convite?",
        options: [
            { text: "Aceitar o convite e dançar com os seres místicos", nextPage: 7 },
            { text: "Recusar o convite e observar de longe", nextPage: 8 },
        ],
    },
    {
        id: 4,
        text: "Ao ignorar as vozes, vocês continuam caminhando pela trilha até encontrar uma caverna secreta. Dentro dela, há um baú brilhante. Vocês decidem abrir?",
        options: [
            { text: "Abrir o baú e descobrir seu conteúdo", nextPage: 9 },
            { text: "Ignorar o baú e voltar para Pineville", nextPage: 10 },
        ],
    },
    {
        id: 5,
        text: "Seguindo as vozes, vocês chegam a um salão subterrâneo onde fantasmas dançam em uma festa macabra. Parece que vocês foram convidados. Vocês decidem participar da dança?",
        options: [
            { text: "Aceitar o convite e dançar com os fantasmas", nextPage: 11 },
            { text: "Recusar o convite e tentar encontrar uma saída", nextPage: 12 },
        ],
    },
    {
        id: 6,
        text: "Aterrorizados, vocês correm para fora da Mansão Assombrada e voltam para a cidade de Pineville. Parece que a aventura acabou, mas a sensação de mistério ainda permanece.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 7,
        text: "Vocês dançam com os seres místicos até o nascer do sol. Em agradecimento, eles concedem a vocês um artefato mágico capaz de conceder um desejo. Qual é o desejo de vocês?",
        options: [
            { text: "Desejar sabedoria eterna", nextPage: 13 },
            { text: "Desejar voltar para casa com segurança", nextPage: 14 },
        ],
    },
    {
        id: 8,
        text: "Vocês observam de longe enquanto os seres místicos dançam. Quando o sol nasce, eles desaparecem. A experiência de presenciar tamanha magia permanecerá em suas memórias para sempre.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 9,
        text: "Ao abrir o baú, vocês descobrem um mapa do tesouro antigo que leva a riquezas escondidas na Floresta Encantada. Vocês decidem seguir o mapa?",
        options: [
            { text: "Seguir o mapa e procurar o tesouro", nextPage: 15 },
            { text: "Decidir que o tesouro não vale o risco", nextPage: 16 },
        ],
    },
    {
        id: 10,
        text: "Ignorando o baú, vocês decidem voltar para Pineville. Enquanto retornam, a sensação de curiosidade permanece, deixando-os com a pergunta: 'O que mais estará escondido em Pineville?'",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 11,
        text: "Vocês dançam com os fantasmas até a meia-noite. Quando o relógio bate as doze badaladas finais, os fantasmas desaparecem. Vocês estão seguros, mas com uma história incrível para contar.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 12,
        text: "Ao procurar uma saída, vocês se deparam com um portal mágico que os leva de volta para Pineville. A aventura termina, mas a lembrança dos fantasmas permanecerá com vocês para sempre.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 13,
        text: "Vocês desejam sabedoria eterna e imediatamente são inundados com conhecimento. Agora, vocês são capazes de desvendar todos os mistérios e enigmas de Pineville, tornando-se lendas na cidade.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 14,
        text: "Desejando voltar para casa com segurança, vocês são transportados de volta para o conforto de seus lares. Embora a aventura em Pineville tenha terminado, as memórias permanecem vivas em seus corações.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 15,
        text: "Seguindo o mapa, vocês enfrentam desafios e perigos, mas, finalmente, encontram o tesouro escondido. Rodeados por riquezas, vocês se perguntam o que farão a seguir.",
        options: [
            { text: "Decidir compartilhar o tesouro com a cidade", nextPage: 17 },
            { text: "Decidir manter o tesouro em segredo", nextPage: 18 },
        ],
    },
    {
        id: 16,
        text: "Ao decidir que o tesouro não vale o risco, vocês abandonam a busca e voltam para Pineville. No entanto, a sensação de aventura permanece e a cidade guarda muitos outros segredos para serem descobertos.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 17,
        text: "Vocês decidem compartilhar o tesouro com a cidade de Pineville, tornando-se heróis locais e sendo lembrados como aqueles que trouxeram prosperidade à cidade.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
    {
        id: 18,
        text: "Decidindo manter o tesouro em segredo, vocês voltam para Pineville e desfrutam das riquezas em segredo, tornando-se lendas entre aqueles que acreditam nas histórias de tesouros escondidos.",
        options: [{ text: "Recomeçar a história", nextPage: 0 }],
    },
];