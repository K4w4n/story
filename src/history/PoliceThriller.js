export default {
    name: "Suspense policial",
    pages: [
        {
            id: 0,
            text: "Você é um detetive renomado chamado John Davis, conhecido por desvendar casos complexos. Certo dia, você recebe uma ligação anônima informando sobre um assassinato misterioso em uma mansão isolada nos arredores da cidade. Você decide investigar o caso.",
            options: [
                { text: "Dirigir até a mansão e começar a investigação", nextPage: 1 },
            ],
        },
        {
            id: 1,
            text: "Ao chegar à mansão, você se depara com um cenário sombrio. A casa está em silêncio e as luzes estão apagadas. Você decide entrar pela porta da frente ou procurar uma entrada alternativa?",
            options: [
                { text: "Entrar pela porta da frente", nextPage: 2 },
                { text: "Procurar uma entrada alternativa", nextPage: 3 },
            ],
        },
        {
            id: 2,
            text: "Você entra pela porta da frente e encontra o corpo de um homem no saguão. Ele foi brutalmente assassinado. O que você faz?",
            options: [
                { text: "Examinar o corpo em busca de pistas", nextPage: 4 },
                { text: "Procurar por evidências na sala de estar", nextPage: 5 },
            ],
        },
        {
            id: 3,
            text: "Enquanto procura uma entrada alternativa, você encontra uma janela semiaberta nos fundos da mansão. Você decide entrar por lá e explorar o interior.",
            options: [
                { text: "Investigar a cozinha", nextPage: 6 },
                { text: "Subir as escadas para os quartos", nextPage: 7 },
            ],
        },
        {
            id: 4,
            text: "Ao examinar o corpo, você encontra uma carteira com a identificação da vítima. Parece ser um empresário local de sucesso. Além disso, você nota marcas estranhas no pescoço da vítima. O que você faz em seguida?",
            options: [
                { text: "Analisar as marcas no pescoço para determinar a causa da morte", nextPage: 8 },
                { text: "Procurar por pistas adicionais no local", nextPage: 9 },
            ],
        },
        {
            id: 5,
            text: "Você encontra uma carta de ameaça em cima da mesa na sala de estar. A carta é anônima e parece ser direcionada à vítima. Ela menciona segredos obscuros e um ultimato. O que você faz?",
            options: [
                { text: "Analisar a caligrafia da carta para possíveis correspondências", nextPage: 10 },
                { text: "Continuar procurando por pistas adicionais na sala de estar", nextPage: 9 },
            ],
        },
        {
            id: 6,
            text: "Ao investigar a cozinha, você encontra vestígios de uma refeição recente. Parece que alguém esteve aqui recentemente. Você decide examinar a despensa ou a geladeira?",
            options: [
                { text: "Examinar a despensa", nextPage: 11 },
                { text: "Examinar a geladeira", nextPage: 12 },
            ],
        },
        {
            id: 7,
            text: "Ao subir as escadas, você ouve um barulho vindo de um dos quartos. Você decide verificar o quarto de hóspedes ou o quarto principal?",
            options: [
                { text: "Verificar o quarto de hóspedes", nextPage: 13 },
                { text: "Verificar o quarto principal", nextPage: 14 },
            ],
        },
        {
            id: 8,
            text: "Ao analisar as marcas no pescoço da vítima, você percebe que são consistentes com o uso de uma corda. Parece que a vítima foi estrangulada até a morte. Agora você precisa encontrar a arma do crime.",
            options: [
                { text: "Continuar procurando por pistas adicionais na mansão", nextPage: 9 },
                { text: "Questionar os possíveis suspeitos", nextPage: 15 },
            ],
        },
        {
            id: 9,
            text: "Enquanto procura por pistas adicionais, você encontra um bilhete rasgado embaixo do tapete. Ele menciona um encontro secreto na noite do assassinato. Parece que há mais pessoas envolvidas nesse mistério. O que você faz?",
            options: [
                { text: "Reunir informações sobre os possíveis suspeitos", nextPage: 15 },
                { text: "Continuar explorando a mansão em busca de mais pistas", nextPage: 16 },
            ],
        },
        {
            id: 10,
            text: "Ao analisar a caligrafia da carta de ameaça, você percebe semelhanças com a caligrafia de uma pessoa conhecida. Pode ser um possível suspeito. Agora você precisa encontrá-lo e interrogá-lo.",
            options: [
                { text: "Reunir informações sobre o possível suspeito", nextPage: 17 },
                { text: "Continuar explorando a mansão em busca de mais pistas", nextPage: 16 },
            ],
        },
        {
            id: 11,
            text: "Ao examinar a despensa, você encontra uma garrafa de vinho parcialmente vazia. Parece que alguém estava bebendo aqui recentemente. Há também um rótulo estranho na garrafa. O que você faz?",
            options: [
                { text: "Investigar o rótulo estranho", nextPage: 18 },
                { text: "Continuar procurando por pistas adicionais na mansão", nextPage: 16 },
            ],
        },
        {
            id: 12,
            text: "Ao examinar a geladeira, você encontra uma embalagem de comida para viagem. Parece que alguém fez uma refeição aqui recentemente. Há também uma nota escrita à mão com uma lista de nomes. O que você faz?",
            options: [
                { text: "Investigar os nomes na lista", nextPage: 19 },
                { text: "Continuar procurando por pistas adicionais na mansão", nextPage: 16 },
            ],
        },
        {
            id: 13,
            text: "Ao verificar o quarto de hóspedes, você encontra uma mala aberta com roupas reviradas. Parece que alguém fez uma saída rápida. Há também um bilhete deixado para trás. O que você faz?",
            options: [
                { text: "Ler o bilhete deixado para trás", nextPage: 20 },
                { text: "Continuar investigando o quarto de hóspedes", nextPage: 16 },
            ],
        },
        {
            id: 14,
            text: "Ao verificar o quarto principal, você encontra uma janela aberta. Parece que alguém entrou ou saiu por aqui. Há também um diário em cima da cama. O que você faz?",
            options: [
                { text: "Ler o diário deixado na cama", nextPage: 21 },
                { text: "Continuar investigando o quarto principal", nextPage: 16 },
            ],
        },
        {
            id: 15,
            text: "Você reúne informações sobre os possíveis suspeitos, incluindo o possível autor da carta de ameaça e os nomes mencionados no bilhete encontrado. Agora você precisa confrontá-los para obter respostas.",
            options: [
                { text: "Interrogar o possível autor da carta de ameaça", nextPage: 22 },
                { text: "Interrogar os suspeitos mencionados no bilhete", nextPage: 23 },
            ],
        },
        {
            id: 16,
            text: "Enquanto continua explorando a mansão, você encontra mais pistas e evidências que começam a se encaixar. O quadro geral do caso começa a se formar, mas ainda há mais trabalho a ser feito.",
            options: [
                { text: "Continuar investigando a mansão em busca de respostas", nextPage: 9 },
                { text: "Interrogar os possíveis suspeitos", nextPage: 15 },
            ],
        },
        {
            id: 17,
            text: "Ao reunir informações sobre o possível suspeito, você descobre seu paradeiro. Agora é hora de confrontá-lo e descobrir sua relação com o assassinato.",
            options: [
                { text: "Ir ao encontro do possível suspeito", nextPage: 24 },
                { text: "Continuar investigando a mansão em busca de mais pistas", nextPage: 16 },
            ],
        },
        {
            id: 18,
            text: "Investigando o rótulo estranho na garrafa de vinho, você descobre que está relacionado a uma organização criminosa conhecida por sua violência. Agora você precisa descobrir se há uma conexão com o assassinato.",
            options: [
                { text: "Investigar a conexão entre a organização criminosa e o assassinato", nextPage: 25 },
                { text: "Continuar procurando por pistas adicionais na mansão", nextPage: 16 },
            ],
        },
        {
            id: 19,
            text: "Ao investigar os nomes na lista encontrada na geladeira, você descobre que todos estão relacionados a negócios ilícitos. Agora você precisa descobrir o motivo por trás disso e se há alguma ligação com o assassinato.",
            options: [
                { text: "Investigar a ligação entre os nomes e o assassinato", nextPage: 26 },
                { text: "Continuar procurando por pistas adicionais na mansão", nextPage: 16 },
            ],
        },
        {
            id: 20,
            text: "Ao ler o bilhete deixado para trás no quarto de hóspedes, você descobre informações sobre um plano de fuga. Parece que alguém estava com pressa para sair da mansão. Agora você precisa descobrir quem e por quê.",
            options: [
                { text: "Investigar o plano de fuga e suas conexões com o assassinato", nextPage: 27 },
                { text: "Continuar investigando o quarto de hóspedes", nextPage: 16 },
            ],
        },
        {
            id: 21,
            text: "Ao ler o diário deixado no quarto principal, você descobre segredos sombrios e relatos de chantagem. Parece que alguém estava sendo pressionado. Agora você precisa descobrir quem estava envolvido e se isso está relacionado ao assassinato.",
            options: [
                { text: "Investigar os segredos e a chantagem mencionados no diário", nextPage: 28 },
                { text: "Continuar investigando o quarto principal", nextPage: 16 },
            ],
        },
        {
            id: 22,
            text: "Ao interrogar o possível autor da carta de ameaça, você descobre que ele tinha motivos pessoais para querer prejudicar a vítima. No entanto, ele nega ter cometido o assassinato. Agora você precisa encontrar provas para confirmar sua inocência ou culpa.",
            options: [
                { text: "Continuar investigando a mansão em busca de provas", nextPage: 16 },
                { text: "Interrogar outros possíveis suspeitos", nextPage: 23 },
            ],
        },
        {
            id: 23,
            text: "Ao interrogar os suspeitos mencionados no bilhete encontrado, você obtém informações contraditórias e histórias confusas. Parece que todos têm algo a esconder. Agora você precisa confrontá-los com as evidências que possui e descobrir a verdade.",
            options: [
                { text: "Apresentar as evidências e confrontar os suspeitos", nextPage: 29 },
                { text: "Continuar investigando a mansão em busca de mais pistas", nextPage: 16 },
            ],
        },
        {
            id: 24,
            text: "Ao chegar ao encontro com o possível suspeito, você se depara com uma armadilha. Agora você está preso e precisa encontrar uma maneira de escapar antes que seja tarde demais.",
            options: [{ text: "Encontrar uma maneira de escapar", nextPage: 30 }],
        },
        {
            id: 25,
            text: "Ao investigar a conexão entre a organização criminosa e o assassinato, você descobre uma trama complexa envolvendo vingança e corrupção. Agora você precisa reunir todas as informações e revelar a verdade por trás do assassinato.",
            options: [{ text: "Revelar a verdade por trás do assassinato", nextPage: 31 }],
        },
        {
            id: 26,
            text: "Ao investigar a ligação entre os nomes encontrados na lista e o assassinato, você descobre uma conspiração envolvendo interesses ocultos e chantagem. Agora você precisa juntar as peças e expor os responsáveis pelo crime.",
            options: [{ text: "Expor os responsáveis pelo crime", nextPage: 31 }],
        },
        {
            id: 27,
            text: "Ao investigar o plano de fuga e suas conexões com o assassinato, você descobre uma rede de cumplicidade e traição. Agora você precisa seguir as pistas e capturar os envolvidos antes que eles escapem.",
            options: [{ text: "Capturar os envolvidos antes que escapem", nextPage: 31 }],
        },
        {
            id: 28,
            text: "Ao investigar os segredos e a chantagem mencionados no diário, você desvenda uma teia de segredos sombrios e traição. Agora você precisa confrontar os envolvidos e descobrir a verdade por trás do assassinato.",
            options: [{ text: "Descobrir a verdade por trás do assassinato", nextPage: 31 }],
        },
        {
            id: 29,
            text: "Ao apresentar as evidências e confrontar os suspeitos, a verdade começa a emergir. Motivos ocultos, mentiras e manipulação são revelados. Agora você precisa resolver o quebra-cabeça final e trazer justiça para a vítima.",
            options: [{ text: "Resolver o quebra-cabeça final e trazer justiça", nextPage: 31 }],
        },
        {
            id: 30,
            text: "Você encontra uma maneira engenhosa de escapar da armadilha. Agora você precisa correr contra o tempo para desvendar o mistério e capturar o assassino antes que ele faça mais vítimas.",
            options: [{ text: "Correr contra o tempo para capturar o assassino", nextPage: 31 }],
        },
        {
            id: 31,
            text: "Com todas as pistas e evidências reunidas, você finalmente descobre a verdade por trás do assassinato na mansão. Agora é hora de confrontar o assassino e garantir que ele seja levado à justiça.",
            options: [{ text: "Confrontar o assassino e garantir justiça", nextPage: -1 }],
        },
    ]
}