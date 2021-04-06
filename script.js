var Larry = ''
var Milo = '' 
var Duke = ''
var Nix = ''                 
var Fuzzy = ''               
var Skippy = ''
var Yara = ''                 
var Donna = '' 

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3)
    return pontos
}

jogadores = []

exibirJogadoresTela(jogadores)

function exibirJogadoresTela(jogadores) {
    let html = ""
    for (var i = 0; i < jogadores.length; i++){
      html += "<tr><td> <img class='avatares' src="+ jogadores[i].avatar + "></td>"
      html += "<td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button class='buttonActions' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button class='buttonActions' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }   
    var tabelaJogadores = document.getElementById("dadosJogadores")
    tabelaJogadores.innerHTML = html
  }
  function adicionarVitoria(i){
    jogadores[i].vitorias++
    jogadores[i].pontos = calculaPontos(jogadores[i])
    exibirJogadoresTela(jogadores)
}
function adicionarEmpate(i){
    jogadores[i].empates++
    jogadores[i].pontos = calculaPontos(jogadores[i])
    exibirJogadoresTela(jogadores)
}
function adicionarDerrota(i){
    jogadores[i].derrotas++
    exibirJogadoresTela(jogadores)
}

function addForm(){
    let html = ""
    html += "<tr><td> Digite o nome do jogador</td>"
    html += "<td class='input'> <input type='text' id='nomeJogador' placeholder='Digite o nome aqui'> </td></tr>"
    html += "<tr><td> Escolha seu personagem</td>"
    html += '<td><select id="personagem"><option value=""></option><option value="https://i.imgur.com/k8t0B2P.png">Finn</option><option value="https://i.imgur.com/f7nWtA1.png">Jade</option><option value="sbc">Larry</option><option value="sbc">Milo</option><option value="https://i.imgur.com/hEN42Yg.png">Duke</option><option value="https://i.imgur.com/8vY1lui.png">Nix</option><option value="https://i.imgur.com/VNh0xdt.png">Fuzzy</option><option value="https://i.imgur.com/GsBsfKk.png">Buck</option><option value="https://i.imgur.com/Bsr1mSO.png">Chippy</option><option value="https://i.imgur.com/bYwdnDI.png">Yara</option><option value="sbc">Donna</option><option value="https://i.imgur.com/UmK1TsG.png">Louie</option></select></td></tr>'
    html += "<tr><td colspan='2'> <button id='adicionar' onclick='adicionaJogador()'>Adicionar</button> </td> </tr>"
    var adicionarNome = document.getElementById("addJogador")
    adicionarNome.innerHTML = html
}   
function adicionaJogador(){
    let nomeJogador = document.getElementById('nomeJogador')
    var player = document.getElementById("personagem")
    numAleatorio = parseInt(Math.random()*(5-0)-0)
    novoJogador = {
        avatar: player.options[player.selectedIndex].value,
        nome: nomeJogador.value,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
  console.log(player.options[player.selectedIndex].value)
  nomeJogador.value = null
    jogadores.push(novoJogador)
    exibirJogadoresTela(jogadores)
}