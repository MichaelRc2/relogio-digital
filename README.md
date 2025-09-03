Projeto: Relógio Digital

Descrição:
Relógio digital simples feito com HTML, CSS e JavaScript.
O objetivo do projeto é praticar manipulação do DOM e uso da API Date do JavaScript.
O relógio exibe as horas, minutos e segundos em tempo real, atualizando a cada segundo automaticamente.

Tecnologias utilizadas:
- HTML (estrutura da página)
- CSS (estilização e layout responsivo com flexbox)
- JavaScript (lógica de funcionamento e atualização do relógio)

Projeto criado como base de estudo pessoal por Michael Moura.


🔍 Análise do HTML – Relógio Digital


    <link rel="stylesheet" href="style.css">
Conecta o HTML ao seu arquivo de CSS externo chamado style.css, onde está o visual do relógio.

------------------
    
    <title>Relógio digital</title>
 Define o título da aba do navegador.

-----------------

<body>
    <div class="relogio">
        <span id="horas">00</span>
        <span id="minutos">00</span>
        <span id="segundos">00</span>
    </div>

Aqui está o corpo da página e o relógio propriamente dito:

A div.relogio agrupa os elementos do relógio.

Cada span tem um id específico (horas, minutos, segundos) que será acessado via JavaScript para atualizar os valores dinamicamente.
Esses <span> são perfeitos para:
Mostrar conteúdo curto (números).
Ficar na mesma linha (lado a lado).
Ser fácil de acessar no JavaScript via id.

Os valores 00 são os valores iniciais (estáticos) — o JS vai substituir depois.

------------------

    <h2>Powered by <strong>Michael Moura</strong></h2>
Um crédito com seu nome, estilizado com a tag <strong> (negrito).

-----------------

   <script src="script.js"></script>
 Conecta o HTML ao seu arquivo JavaScript externo, que vai dar vida ao relógio, atualizando as horas, minutos e segundos em tempo real.

------------------

✅ Conclusão da Parte HTML
Esse HTML é simples, limpo e funcional. Ele:

Estrutura a base do projeto.

Conecta o estilo (CSS) e o comportamento (JavaScript).

Separa logicamente os dados que o JS vai manipular via IDs (horas, minutos, segundos).


-----------------------------------------------------------------------------------------------



🔍 Análise do CSS


Variáveis CSS (Root)

:root {
    --color-dark: #000000;
    --color-white: #fff;
    --color-light: #ababab;
    --color-purple: #7700ff75;
}

🔹 Definição de variáveis no início do CSS com :root, que são reutilizadas ao longo de todo o estilo. As variáveis ajudam a manter o código limpo e facilitar mudanças no futuro.

--color-dark: cor de fundo preta para o fundo da página.

--color-white: cor branca para o texto.

--color-light: um tom mais claro de cinza para alguns detalhes (como o separador dos dois pontos).

--color-purple: cor roxa com transparência, utilizada para o crédito no final da página.

--------------------------------------


Reset Básico e Estilo Global (Universal Selector *)

* {
    background-color: var(--color-dark);
    color: var(--color-white);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
}

 O seletor * é o seletor universal, e aqui ele aplica estilos globais:

Cor de fundo preta para toda a página (background-color: var(--color-dark)).

Cor do texto branca (color: var(--color-white)).

A font-family é configurada para uma fonte moderna e limpa, sendo a primeira opção 'Gill Sans', se disponível.

Zera as margens e o padding de todos os elementos com margin: 0; padding: 0; para garantir que a estrutura fique bem controlada.

----------------------------------------


Estilo do Body

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    gap: 16px;
}


 O body está estilizado como um container flexível (flexbox):

display: flex: O conteúdo é alinhado de maneira flexível.

justify-content: center e align-items: center: Alinha os itens vertical e horizontalmente no centro da tela.

min-height: 100vh: Garante que o body ocupe pelo menos a altura total da tela.

flex-direction: column: Coloca os itens (o relógio e o título) na vertical, em uma coluna.

gap: 16px: Adiciona um espaço de 16px entre os itens dentro do body.

------------------------------------


Estilo da Div do Relógio

.relogio {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}

A classe .relogio define o contêiner do relógio (a div que contém os spans das horas, minutos e segundos):

display: flex: Exibe os itens (os 3 spans) em uma linha, como itens flexíveis.

gap: 50px: Adiciona um espaçamento de 50px entre os spans do relógio.

flex-wrap: wrap: Permite que os spans se movam para a linha seguinte caso a tela seja muito pequena (boa prática para responsividade).

-------------------------------------

Estilo dos Spans (Horas, Minutos e Segundos)

.relogio span {
    font-size: 150px;
    display: flex;
    align-items: center;
    gap: 50px;
}

Aqui estamos estilizando os spans individuais para exibir as horas, minutos e segundos:

font-size: 150px: Define o tamanho da fonte como 150px, deixando os números bem grandes.

display: flex e align-items: center: Usa flexbox para garantir que o conteúdo do span (os números) fique alinhado verticalmente no centro.

gap: 50px: Um espaçamento entre cada span no caso de se usar o conteúdo dentro de um flex container.


-------------------------------------


Separador dos Dois Pontos (:)

.relogio span:not(:last-child):after {
    content: ':';
    margin-bottom: 25px;
    color: var(--color-light)
}

Esse código é responsável por adicionar o separador : entre as horas, minutos e segundos:

:not(:last-child): Aplica o estilo somente aos span que não são o último (evita adicionar o : após o "segundos").

:after: Cria um conteúdo adicional após cada span — no caso, o dois-pontos (:).

margin-bottom: 25px: Ajusta a posição do : para alinhar melhor com os números.

color: var(--color-light): Usa a cor clara definida nas variáveis (#ababab) para o separador.

--------------------------------------

 Estilo do Título (<h2>)

h2 strong {
    color: var(--color-purple);
}

h2 {
    font-size: 15px;
}


Estiliza o título que aparece no final da página:

h2 strong: A palavra "Michael Moura" fica com a cor roxa (#7700ff75) definida na variável.

h2: O título tem tamanho de fonte 15px, pequeno para não chamar tanto a atenção, já que é um crédito no final.


---------------------------------------

✅ Conclusão da Parte CSS

O layout do relógio é simples, mas moderno e estilizado com o uso de flexbox para centralização e alinhamento dos elementos.

A tipografia grande e o separador : estilizado deixam o relógio digital visualmente agradável e de fácil leitura.

O fundo escuro e o texto branco criam um contraste forte, facilitando a leitura e destacando o relógio.


-----------------------------------------------------------------------------------------------------



🧠 Explicando o JavaScript (script.js)


1. Selecionando os elementos do HTML

const horasElement = document.getElementById('horas') 
const minutosElement = document.getElementById('minutos') 
const segundosElement = document.getElementById('segundos') 

Aqui estamos pegando os elementos <span> do HTML que têm os respectivos id:

horas

minutos

segundos

🔹 Isso permite que a gente altere o conteúdo desses elementos dinamicamente usando .textContent.


------------------------------------------


2. Função newTime() – Atualiza o horário

function newTime() {
    const date = new Date(); // pega o horário atual

    const hours = date.getHours();     // pega as horas
    const minutes = date.getMinutes(); // pega os minutos
    const seconds = date.getSeconds(); // pega os segundos

    horasElement.textContent = fixTime(hours);
    minutosElement.textContent = fixTime(minutes);
    segundosElement.textContent = fixTime(seconds);
}


A função newTime():

Cria um novo objeto Date, que traz data e hora atual do sistema.

Usa os métodos .getHours(), .getMinutes() e .getSeconds() para pegar os valores atuais.

Usa .textContent para mostrar esses valores dentro dos spans.

Chama a função fixTime() para garantir que fique com 2 dígitos sempre (ex: 07, 09, etc).

----------------------------------------


3. Função fixTime(time) – Corrige o formato com 2 dígitos

function fixTime(time) {
    return time < 10 ? '0' + time : time;
}


Essa função é um ternário (versão curta de if/else):

Se o valor for menor que 10, adiciona um 0 antes (ex: 07, 08).

Se for maior ou igual a 10, retorna o valor como está.

👉 Isso garante que o relógio fique sempre no formato HH:MM:SS, mesmo quando os números são pequenos.


----------------------------------------


4. Execução inicial + Atualização constante

newTime(); // chama a função uma vez logo que a página carrega

setInterval(newTime, 1000); // chama a função a cada 1000ms (1 segundo)


newTime() é chamada assim que a página carrega, para o relógio já aparecer com a hora atual.
🔹 setInterval(newTime, 1000) faz com que a função seja chamada a cada 1 segundo, atualizando os valores de hora, minuto e segundo em tempo real.

------------------------------------------------------------------------------------------------------


✅ Resumo Final – O que você usou no projeto


| Tecnologia     | O que fez                                          | Por que usou                                

| **HTML**       | Estruturou os elementos (horas, minutos, segundos) | Para criar a base do relógio                |

| **CSS**        | Estilizou o relógio (cores, fontes, layout)        | Para deixar visualmente agradável           |

| **JavaScript** | Capturou a hora atual e atualizou os elementos     | Para o relógio funcionar em tempo real      |

| **DOM**        | `getElementById`, `textContent`                    | Manipulou diretamente os elementos HTML     |

| **Funções**    | `newTime()`, `fixTime()`                           | Separou lógica em blocos fáceis de entender |

| **Date API**   | `new Date().getHours()` etc                        | Pegou a hora atual do sistema               |

| **Intervalo**  | `setInterval()`                                    | Atualizou o relógio a cada segundo          |






