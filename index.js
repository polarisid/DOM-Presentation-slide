let myContainer = window.document.querySelector(".container-content");
let pagCounter =0;
let pg =[0,0,0];
pg[0] =`
<p class="section-title">DOM - Conceito</p>
    <div class="content">
        <ul>
            <li><ion-icon name="caret-forward-outline"></ion-icon><b>DOM – Document Object Model</b> - é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, <mark>alterar o estilo e conteúdo</mark>. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.</li>
            <li><ion-icon name="caret-forward-outline"></ion-icon>O DOM- é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como <mark>JavaScript</mark></li>
            <li><ion-icon name="caret-forward-outline"></ion-icon>O objeto <mark>Window</mark> é o principal ponto de entrada para todos os recursos e APIs de Javascript do lado do cliente. Ele representa uma janela ou quadro de navegador Web e pode ser referenciado através do identificador <code>window</code></li>
        </ul>
        <img src="https://pic2.zhimg.com/v2-4d15a42d58f2d521ead32814edbf19d5_b.jpg" alt="">
    </div>
` ;
pg[1] =`
<p class="section-title">window - object</p>
<div class="content">
    <ul>
        <li><ion-icon name="caret-forward-outline"></ion-icon>O objeto window referencia propriedades importantes, tal como <code>document</code> que representa o conteúdo (documento) exibido na tela. Referencia a propriedade <code>location</code> que se refere ao objeto Location especificando o URL atualmente exibido na janela e permite que um script carregue um novo URL na janela (redirecionamentos).</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon>O objeto window também referencia outro objeto muito utilizado que é o <code>screen</code>, com ele podemos acessar propriedades com informações sobre a tela.</li>
    </ul>
    <img src="https://lh3.googleusercontent.com/proxy/YEs8gfP0BTTS9EUwBdMxOmzIuQ-BZUwtyMcChBcmipwdrS1CQd_IuCXoM5CkUIKQeC2VG5AT1LuPibRy3xksUW4-Zs5qNutCcVb0jqgAZyra9IiE8twrFD0" alt="">
</div>
` 
pg[2] =`
<p class="section-title">window - Alguns metodos</p>
<div class="content">
    <ul>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>alert()</code> - cria uma janela de aviso</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>confirm()</code> - cria uma janela de confirmação com duas respostas possíveis</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>prompt()</code> - cria uma janela onde é solicitada uma resposta ao usuário</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>blur()</code> - retira o foco de uma janela</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>focus()</code> - coloca o foco numa janela, movendo-a para a frente de todas</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>setInterval()</code> - Chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos)</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>setTimeout()</code> - Chama uma função ou avalia uma expressão após um determinado número de milissegundos</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>clearinterval()</code> - Limpa um timer setado pelo <code>setInterval()</code></li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>clearTimeout()</code> - Limpa um timer setado pelo <code>setTimeout()</code></li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>close()</code> - Fecha a janela atual</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>stop()</code> - Impede o carregamento da janela</li>
    </ul>
</div>
` 
pg[3]=`
    <p class="section-title">window -Algumas propriedades</p>
    <div class="content">
        <ul>
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>closed</code> - Esta propriedade tem a retorna um valor booleano indicando se a janela foi fechada.</li>    
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>Document</code> - Retorna a referência para o documento contido na janela.</li>    
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>console</code> - Propriedade retorna uma referência ao objeto console, que fornece métodos para registrar informações no console do navegador.</li>    
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>fullScreen</code> - Esta propriedade indica se a janela está sendo exibida em modo de tela cheia ("full screen") ou não.</li>    
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>localStorage</code> - A propriedade permite acessar um objeto Storage local. A localStorage é similar ao sessionStorage. A única diferença é que enquanto os dados armazenados no localStorage não expiram, os dados no sessionStorage tem os seus dados limpos ao expirar a sessão da página.</li>    
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>Location</code> - Esta propriedade tem informações referentes ao endereço corrente.
            <ul>
                <li><code>reload</code> - Força o navegador a carregar a página</li>
                <li><code>replace</code> - Carrega a URL informada</li>
            </ul>
            </li>
            <li><ion-icon name="caret-forward-outline"></ion-icon><code>navigator</code>  - Esta propriedade contém informações sobre o navegador, nome, versão, e outras informações.</li>    
        </ul>
    </div>
`
pg[4]=`
<p class="section-title">DOM - Arvore</p>
<div class="content">
    <ul>
        <li>Como a grande maioria do código que usa o DOM gira em torno da manipulação de documentos HTML, é comum sempre se referir aos nós no DOM como elementos, pois em um documento HTML, <mark>cada nó é um elemento</mark></li>
        <li>Cada nó tem um nó na hierarquia de árvore</li>
        <li>Pai (parent), filho(child), irmão(sibling) e outros termos usados ​​para descrever essas relações. nó pai tem um nó filho. nós filho irmãos são chamados de irmãos (irmãos ou irmãs).</li>
        <li><img src="http://www.w3big.com/images/navigate.gif" alt=""></li>
    </ul>
    <img src="http://www.w3big.com/images/htmltree.gif" alt="">

</div>
`
pg[5] =`
<p class="section-title">DOM - Interfaces</p>
<div class="content">
    <ul>
        <li>Esta referência tenta descrever os vários objetos e tipos em termos simples. Mas há vários tipos de dados diferentes sendo transmitidos pela API que você deve conhecer.</li>
        <li><b>Document</b> - Quando um membro retorna um objeto do tipo document (por exemplo, a propriedade ownerDocument de um elemento retorna o document ao qual ele pertence),esse objeto é o próprio objeto de  document raiz.</li>
        <li><b>Node</b> - Todo objeto localizado em um documento é um nó de algum tipo. Em um documento HTML, um objeto pode ser um nó de elemento, mas também um nó de texto ou atributo.</li>
        <li><b>Element</b> - O tipo do element é baseado em node. Isso se refere a um elemento ou um nó do tipo element retornado por um membro do DOM API. Ao invés de dizer, por exemplo, que o método document.createElement()  retorna um objeto de referência para um nó, nós apenas dizemos que esse método retorna o element que acabou de ser criado no DOM.</li>
        <li><b>NodeList</b> - Uma nodeList é um array de elementos comos os que são retornados pelo método <code>document.getElementsByTagName()</code>. </li>
        <li><b>Attribute</b> - Atributos são nós no DOM bem como elementos, mesmo que raramente você possa usá-los como tal..</li>
    </ul>

</div>
`
pg[6]=`
<p class="section-title">Document - Estrutura</p>
<div class="content">
    <ul>
        <li><ion-icon name="caret-forward-outline"></ion-icon>Comumente no código utilizamos somente <code>document</code> no entanto esta é a forma simplificada de <code>window.document</code></li>
        <li><ion-icon name="caret-forward-outline"></ion-icon>O <code>document</code> retorna um objeto #document onde sua estrutura é possivel ser visualizada na imagem ao lado</li>
        <li><img src="https://i.stack.imgur.com/BkAjU.jpg" alt=""></li>
    </ul>
    <img src="https://www.todoespacoonline.com/w/wp-content/uploads/2014/05/Diagrama1.png" alt="">
</div>
`
pg[7]= `
<p class="section-title">Document - Alguns Metodos</p>
<div class="content">
    <ul>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>append()</code> - 
            Insere um conjunto de objetos Node ou objetos DOMString após o último filho do documento</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>getElementById()</code> - Retorna uma referência de objeto para o elemento identificado.</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>getElementsByClassName()</code> - 
            Retorna uma lista de elementos com o nome de classe fornecido.</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>getElementsByTagName()</code> - Retorna uma lista de elementos com o nome de tag fornecido.</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>querySelector()</code> - Retorna o primeiro nó Elemento dentro do documento, na ordem do documento, que corresponde aos seletores especificados.</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>querySelectorAll()</code> - Retorna uma lista de todos os nós de elemento dentro do documento que correspondem aos seletores especificados.</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>getElementsByName()</code> - Retorna uma lista de elementos com o nome fornecido</li>
        <li><ion-icon name="caret-forward-outline"></ion-icon><code>createElement()</code> - cria o elemento HTML especificado ou um HTMLUnknownElement (en-US) se o nome do elemento dado não for conhecido.</li>

    </ul>
</div>
`
pg[8]=`
<p class="section-title">Element</p>
<div class="content">
    <ul>
        <li>A interface Element é a classe base mais geral da qual todos os objetos em um Document herda. Ela somente tem métodos e propriedades comuns para todos os tipos de elementos. Mais classes específicas herdam de Element</li>
        <li>Propriedades:</li>
        <li><code>Element.attributes</code> - Retorna um NamedNodeMap (en-US) que lista todos os atributos associados ao elemento.</li>
        <li><code>ParentNode.childElementCount</code> - É um Number representando o número de nós filhos que são elementos.</li>
        <li><code>ParentNode.children</code> - É um HTMLCollection ao vivo contendo todos os elementos filhos do elemento, como uma coleção.</li>
        <li><code>Element.classList</code> - Retorna um DOMTokenList (en-US) contendo a lista de atributos de classe.</li>
        <li><code>Element.className</code> - É um DOMString representando a classe do elemento.</li>
        <li><code>Element.innerHTML</code> - É um DOMString representando a marcação do conteúdo do elemento..</li>
    </ul>

</div>
`
pg[9]=`

<p class="section-title">Resumo Até aqui</p>
<div class="content">
    <ul>
        <li>Objetos <code>Document</code> e <code>window</code> são os objetos cujas interfaces frequentemente utilizadas em programação DOM. De forma simples, <mark>o objeto window representa algo como o browser</mark>, e <mark>o objeto document é a raiz de todo o documento em si</mark>. Element herda dessa interface Node genérica, e juntamente com essas duas interfaces fornecem muitos dos métodos e propriedades que você utiliza em elementos individuais.</li>
        <li>A seguir uma lista breve de metodos comuns DOM:</li>
        <li><code>document.getElementById(id)</code></li>
        <li><code>document.getElementsByTagName</code></li>
        <li><code>document.createElement(name)</code></li>
        <li><code>parentNode.appendChild(node)</code> - Adiciona um nó ao final da lista de filhos de um nó pai especificado </li>
        <li><code>element.innerHTML</code></li>
        <li><code>element.style</code></li>
        <li><code>element.setAttribute()</code></li>
        <li><code>element.getAttribute()</code></li>
        <li><code>element.addEventListener()</code></li>
        <li><code>window.content</code></li>
        <li><code>console.log()</code></li>
        <li><code>window.scrollTo()</code></li>
    </ul>
</div>
`
pg[10]=`
<p class="section-title">Diferenças entre <code> innerHTML</code>, <code>innerText</code>, <code> textContent</code></p>
<div class="content">
    <ul>
        <li><code>innerText</code>- O innerText altera o conteúdo de um elemento de sua página (DOM) com o conteúdo tratado apenas como texto.</li>
        <li><code>innerHTML</code> - Já o innerHTML altera o conteúdo de um elemento com o conteúdo tratado como HTML.</li>
        <li><code>textContent</code> - A propriedade textContent da interface Node representa o conteúdo de texto de um nó e dos seus descendentes, inclusive para elementos de texto com display none.</li>
    </ul>            
</div>
<p class="section-title">Nodelist</p>
<div class="content">
<ul>
    <li>Um NodeListobjeto é basicamente uma coleção de nós DOM extraídos do documento HTML. Uma matriz é um tipo de dados especial em JavaScript, que pode armazenar uma coleção de elementos arbitrários.</li>
    <li>Nodelist vs array : NodeList é uma coleção de nós que pode ser usada para acessar e manipular elementos DOM, enquanto um array é um objeto JavaScript que pode conter mais de um valor por vez.Você pode facilmente converter a NodeListem um array se quiser, mas não o contrário.</li>
</ul>
</div>

`
pg[11] =`
<p class="section-title">Referencias</p>
<div class="content">
<ul>
    <li>https://qastack.com.br/programming/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript</li>
    <li>https://www.devmedia.com.br/forum/qual-a-diferenca-entre-window-e-document/590800</li>
    <li>https://www.w3schools.com/js/js_htmldom_elements.asp</li>
    <li>https://developer.mozilla.org/pt-BR/docs/Web/API/Element</li>
    <li>https://pt.stackoverflow.com/questions/329975/innerhtml-vs-innertext</li>
    <li>https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model</li>
    <li>https://qastack.com.br/programming/35213147/difference-between-textcontent-vs-innertext#:~:text=innerText%20retorna%20o%20texto%20vis%C3%ADvel,textContent%20retorna%20o%20texto%20completo%20.</li>
    <li>https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/</li>
    <li>https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement</li>
    <li>https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild</li>
    <li>Music: https://www.youtube.com/watch?v=uUV7SRnAcNs</li>

</ul>
</div>
`

myContainer.innerHTML=pg[0]

function nextPage(){
    
    if(pagCounter >(pg.length-2)){
        window.alert("Impossible evolute");
    }
    else{
        pagCounter++;
        myContainer.innerHTML=pg[pagCounter] 
    }
}
function previousPage(){
    
    if(pagCounter ==0){
        window.alert("Impossible voltar");
    }
    else{
        pagCounter--;
        myContainer.innerHTML=pg[pagCounter] 
    }
}


console.log(document.nodeList)
//pagina3()
