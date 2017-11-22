//-------------------------------- Imagens --------------------------------\\
//------------------ Lista de Imagens da montagem do lanche (ingredientes + lanches não fechados) 
var imageList = {
	PaoFechado:   'img/PaoFechado.png',
	HamburgerCru: 'img/HamburgerCru.png',
	Queijo:  	  'img/Queijo.png',
	Alface: 	  'img/Alface.png',
	HamburguerAssado:   'img/HamburguerAssado.png',
	SLanche: 	  'img/SLanche.png',
	SLancheC: 	  'img/SLancheC.png',
	SLancheCQ:    'img/SLancheCQ.png',
	SLancheCQA:   'img/SLancheCQA.png'	
};

//------------------ Lista de Imagens dos lanches Prontos
var lanchesProntos = {
	LancheC:   'img/LancheC.png',
	LancheCQ:  'img/LancheCQ.png',
	LancheCQA:  'img/LancheCQA.png'  
};

//------------------ Lista de Imagens dos Clientes
// Adotando o sufixo '1' para cliente feliz,
// e '2' para cliente bravo
var clientList = {
	Mickey1: 'img/Mickey1.png',
	Mickey2: 'img/Mickey2.png',
	Minnie1: 'img/Minnie1.png',
	Minnie2: 'img/Minnie2.png',
	Pluto1:  'img/Pluto1.png',
	Pluto2:  'img/Pluto2.png',
	Pateta1: 'img/Pateta1.png',
	Pateta2: 'img/Pateta2.png',
	Patodonald1: 'img/Patodonald1.png',
	surpresa: 'img/surpresa.jpg', 
	Patodonald2: 'img/Patodonald2.png'
}

//------------------ Lista de Imagens 
var backgroundImages = {
	BgGame:   'img/InGame.png',
	BgMenu:   'img/BgMenu.png',
	BotaoRegras:   'img/BotaoRegras.png',
	BgFinal:  'img/BgFinal.png',
	BotaoJogar:   'img/BotaoJogar.png'

};

//------------------ Arrays responsáveis pelas operações lógicas 
var pratos = [0,0,0,0];
var chapa = [0,0,0,0];
var clientes = [0,0,0,0,0];
var pedidos = [0,0,0,0,0];
var entregas = [0,0,0,0,0];

var pontuação = 0;
var vida = 3;


//-------------------------------- Variáveis --------------------------------\\
//------------------ Div's e suas Imagens dos Pratos [4]
var imgPrato0 = document.createElement('img');
var imgPrato1 = document.createElement('img');
var imgPrato2 = document.createElement('img');
var imgPrato3 = document.createElement('img');

var divePrato0 = document.createElement('div');
var divePrato1 = document.createElement('div');
var divePrato2 = document.createElement('div');
var divePrato3 = document.createElement('div');

//------------------ Div's e Imagens da Chapa [4]
var diveHamburgerAssando0 = document.createElement('div');
var diveHamburgerAssando1 = document.createElement('div');
var diveHamburgerAssando2 = document.createElement('div');
var diveHmburguerAssando3 = document.createElement('div');

var imgHamburguerAssando0 = document.createElement('img');
var imgHamburguerAssando1 = document.createElement('img');
var imgHamburguerAssando2 = document.createElement('img');
var imgHamburguerAssando3 = document.createElement('img');

//------------------ Div's das "bandeijas" dos Clientes [5]
var diveLancheCliente0 = document.createElement('div');
var diveLancheCliente1 = document.createElement('div');
var diveLancheCliente2 = document.createElement('div');
var diveLancheCliente3 = document.createElement('div');
var diveLancheCliente4 = document.createElement('div');

//------------------ Div´s e Imagens dos Clientes [5]
var diveCliente0 = document.createElement('div');
var diveCliente1 = document.createElement('div');
var diveCliente2 = document.createElement('div');
var diveCliente3 = document.createElement('div');
var diveCliente4 = document.createElement('div');

var imgCliente0 = document.createElement('img');
var imgCliente1 = document.createElement('img');
var imgCliente2 = document.createElement('img');
var imgCliente3 = document.createElement('img');
var imgCliente4 = document.createElement('img');

//------------------ Div´s e Imagens dos lanches aleatórios dos Clientes [5]
var lancheRandom0 = document.createElement('div');
var lancheRandom1 = document.createElement('div');
var lancheRandom2 = document.createElement('div');
var lancheRandom3 = document.createElement('div');
var lancheRandom4 = document.createElement('div');

var imglancheRandom0 = document.createElement('img');
var imglancheRandom1 = document.createElement('img');
var imglancheRandom2 = document.createElement('img');
var imglancheRandom3 = document.createElement('img');
var imglancheRandom4 = document.createElement('img');





//------------------ Variaveis de tela (<center> // <canvas> // <div>) 
var centraliza = document.createElement('center');
var canvMenu = document.createElement('canvas');
var diveBotaoJogar = document.createElement('div');
var diveBotaoRegras = document.createElement('div');
var diveBotaoVoltar = document.createElement('div');


//------------------ Variaveis do Cronometro
var diveCronometro = document.createElement('div');
var hora = document.createElement('span');
var min = document.createElement('span');
var seg = document.createElement('span');

//----------------- Variaveis score
var diveScore = document.createElement('div');
var score = document.createElement('span');


//-------------------------------- FUNÇÕES "GRÁFICAS" --------------------------------\\
function main() {
	

	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;


	document.body.appendChild(centraliza);

	
	
	canvMenu.setAttribute('id','menu');
	centraliza.appendChild(canvMenu);
	canvMenu.width = winWidth * 0.6;
	canvMenu.height = winHeight * 0.9;

	var ctx = canvMenu.getContext("2d");
	drawInOrder(backgroundImages, function(images) {
	ctx.drawImage(images.BgMenu,0,0,canvMenu.width,canvMenu.height);		

	});

	//Botão Jogar
	diveBotaoJogar.setAttribute('id','botaoJogar');
	diveBotaoJogar.setAttribute('onclick','createCanvasGame(canvMenu);')
	document.body.appendChild(diveBotaoJogar);

	
	var imgBotaoJogar = document.createElement('img');
	imgBotaoJogar.setAttribute('src',backgroundImages.BotaoJogar);
	imgBotaoJogar.setAttribute('height','100%');
	imgBotaoJogar.setAttribute('width','100%');
	diveBotaoJogar.appendChild(imgBotaoJogar);


	//Botão Regras
 	diveBotaoRegras.setAttribute('id','botaoRegras');
 	document.body.appendChild(diveBotaoRegras);

 	var imgBotaoRegras = document.createElement('img');
 	imgBotaoRegras.setAttribute('src',backgroundImages.BotaoRegras);
 	imgBotaoRegras.setAttribute('height','100%');
 	imgBotaoRegras.setAttribute('width','100%');
 	imgBotaoRegras.setAttribute('onclick','mostrarRegras();');
 	diveBotaoRegras.appendChild(imgBotaoRegras);
}

function mostrarRegras(){
	

	diveBotaoJogar.style.display = 'none';
	diveBotaoRegras.style.display = 'none';

	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	canvMenu.width = winWidth * 0.6;
	canvMenu.height = winHeight * 0.9;

	var ctx = canvMenu.getContext("2d");
	drawInOrder(backgroundImages, function(images) {
	ctx.drawImage(images.BgGame,0,0,canvMenu.width,canvMenu.height);		

	});

	diveBotaoVoltar.setAttribute('id','botaoVoltar');
	diveBotaoVoltar.style.display = 'initial';
	diveBotaoVoltar.setAttribute('onclick','voltarMenu()');
	document.body.appendChild(diveBotaoVoltar);
}

function voltarMenu ()
{

	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	canvMenu.width = winWidth * 0.6;
	canvMenu.height = winHeight * 0.9;

	var ctx = canvMenu.getContext("2d");
	drawInOrder(backgroundImages, function(images) {
	ctx.drawImage(images.BgMenu,0,0,canvMenu.width,canvMenu.height);		

	});

	diveBotaoJogar.style.display = 'initial';
	diveBotaoRegras.style.display = 'initial';
	diveBotaoVoltar.style.display = 'none';

}

function finalizarJogo(){
	
	document.body.removeChild(diveQueijo);
	document.body.removeChild(diveAlface);
	document.body.removeChild(divePrato0);
	document.body.removeChild(divePrato1);
	document.body.removeChild(divePrato2);
	document.body.removeChild(divePrato3);
	document.body.removeChild(diveCronometro);
	document.body.removeChild(diveCliente0);
	document.body.removeChild(diveCliente1);
	document.body.removeChild(diveCliente2);
	document.body.removeChild(diveLancheCliente3);
	document.body.removeChild(diveCliente3);
	document.body.removeChild(diveCliente4);
	document.body.removeChild(divePao);	
	//document.body.removeChild(divePaoFechado);
	document.body.removeChild(diveHamburgerAssando3);
	document.body.removeChild(diveHamburger);
	document.body.removeChild(diveHamburgerAssando0);
	document.body.removeChild(diveHamburgerAssando1);
	document.body.removeChild(diveHamburgerAssando2);
	document.body.removeChild(diveScore);	
	document.body.removeChild(diveLancheCliente0);
	document.body.removeChild(diveLancheCliente1);
	document.body.removeChild(diveLancheCliente2);
	document.body.removeChild(diveLancheCliente4);
	document.body.removeChild(lancheRandom0);
	document.body.removeChild(lancheRandom1);
	document.body.removeChild(lancheRandom2);
	document.body.removeChild(lancheRandom3);
	document.body.removeChild(lancheRandom4);

								
	var c = document.getElementById('myCanvas');
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	c.width = winWidth * 0.6;
	c.height = winHeight * 0.9;

	//recupera o contexto do canvas
	var ctx = c.getContext("2d");

	drawInOrder(backgroundImages, function(images) {
		ctx.drawImage(images.BgFinal,0,0,c.width,c.height);

	});
	var pontFinal = document.createElement('div');
	pontFinal.setAttribute('id','final1');
	pontFinal.innerHTML = "Sua Pontuação Final é: ";
	document.body.appendChild(pontFinal);

	var scoreFinal = document.createElement('div');
	scoreFinal.setAttribute('id','final');
	scoreFinal.innerHTML = pontuação + "pontos";
	document.body.appendChild(scoreFinal);

	var recomecar = document.createElement('div');
	recomecar.setAttribute('id','recomecar');
	recomecar.innerHTML = "Recomeçar";
	recomecar.setAttribute('onclick','location.reload();');
	document.body.appendChild(recomecar);
	
}

//------------------ Cria tela de Jogo, removendo o menu e os botões
function createCanvasGame(){

	centraliza.removeChild(canvMenu);
	diveBotaoJogar.style.display = 'none';
	diveBotaoRegras.style.display = 'none';
	
	var canv = document.createElement('canvas');
	canv.setAttribute('id','myCanvas');
	centraliza.appendChild(canv);


	var c = document.getElementById('myCanvas');
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	c.width = winWidth * 0.6;
	c.height = winHeight * 0.9;

	//recupera o contexto do canvas
	var ctx = c.getContext("2d");

	drawInOrder(backgroundImages, function(images) {
		ctx.drawImage(images.BgGame,0,0,c.width,c.height);
	});
	
	mapearJogo();
}

//------------------ Função utilizada para Desenhar Imagens no Canvas
function drawInOrder(imageList, callback){
	//criar uma nova lista com as imagens carregadas
	var images = {};
	//inicialmente o número de imagens já carregadas é zero
    var loadedImages = 0;
	//número total de imagens inicia com zero
    var numImages = 0;

	//identifica o total de imagens que serão desenhadas
    for(var src in imageList) {
		numImages++;
    }
    
	//para cada uma das imagens da lista de imagens
	for(var src in imageList) {
		//cria um objeto Image
		images[src] = new Image();
		//cada vez que uma imagem é carregada, incrementa loadedImages
        images[src].onload = function() {
			//somente quando o total de imagens carregadas for igual ao total de imagens da
			//lista é que desenha definitivamente as imagens
			if(++loadedImages >= numImages) {
				callback(images);
			}
		};
		//recupera o caminho da imagem da lista de imagens
		images[src].src = imageList[src];
	}
}

//------------------ Cria todas as div's que "mapeiam" o jogo
function mapearJogo(){

	/////////////////Pao
	var divePaoFechado = document.createElement('div');
	divePaoFechado.setAttribute('id','divePao');
	divePaoFechado.setAttribute('onclick','ingredientePrato(imageList.SLanche,0);');
	document.body.appendChild(divePaoFechado);

	
	var imgPaoFechado = document.createElement('img');
	imgPaoFechado.setAttribute('src','img/PaoFechado.png');
	imgPaoFechado.setAttribute('height','100%');
	imgPaoFechado.setAttribute('width','100%');
	divePaoFechado.appendChild(imgPaoFechado);
	
	/////////////////HamburgerCru
	var diveHamburgerCru = document.createElement('div');
	diveHamburgerCru.setAttribute('id','diveHamburger');
	diveHamburgerCru.setAttribute('onclick','ingredienteHamburger();');
	document.body.appendChild(diveHamburgerCru);


	var imgHamburguerCru = document.createElement('img');
	imgHamburguerCru.setAttribute('src',imageList.HamburgerCru);	
	imgHamburguerCru.setAttribute('height','100%');
	imgHamburguerCru.setAttribute('width','100%');
	diveHamburgerCru.appendChild(imgHamburguerCru);
	

	/////////////////Queijo
	var diveQueijo = document.createElement('div');
	diveQueijo.setAttribute('id','diveQueijo');
	diveQueijo.setAttribute('onclick','ingredientePrato(imageList.SLancheCQ,2);');
	document.body.appendChild(diveQueijo);

	var imgQueijo = document.createElement('img');
	imgQueijo.setAttribute('src',imageList.Queijo);	
	imgQueijo.setAttribute('height','100%');
	imgQueijo.setAttribute('width','100%');
	diveQueijo.appendChild(imgQueijo);


	/////////////////Alface
	var diveAlface = document.createElement('div');
	diveAlface.setAttribute('id','diveAlface');
	diveAlface.setAttribute('onclick','ingredientePrato(imageList.SLancheCQA,3);');
	document.body.appendChild(diveAlface);

	var imgAlface = document.createElement('img');
	imgAlface.setAttribute('src',imageList.Alface);	
	imgAlface.setAttribute('height','100%');
	imgAlface.setAttribute('width','100%');
	diveAlface.appendChild(imgAlface);


	/////////////////HamburgerAssando0
	diveHamburgerAssando0.setAttribute('id','diveHamburgerAssando0');
	diveHamburgerAssando0.setAttribute('onclick','montarHamburguer(0,imgHamburguerAssando0);');
	document.body.appendChild(diveHamburgerAssando0);


	
	/////////////////HamburgerAssando1

	diveHamburgerAssando1.setAttribute('id','diveHamburgerAssando1');
	diveHamburgerAssando1.setAttribute('onclick','montarHamburguer(1,imgHamburguerAssando1);');
	document.body.appendChild(diveHamburgerAssando1);

	
	
	/////////////////HamburgerAssando2

	diveHamburgerAssando2.setAttribute('id','diveHamburgerAssando2');
	diveHamburgerAssando2.setAttribute('onclick','montarHamburguer(2,imgHamburguerAssando2);');
	document.body.appendChild(diveHamburgerAssando2);

	
	/////////////////HamburgerAssando3
	
	diveHmburguerAssando3.setAttribute('id','diveHamburgerAssando3');
	diveHmburguerAssando3.setAttribute('onclick','montarHamburguer(3,imgHamburguerAssando3);');
	document.body.appendChild(diveHmburguerAssando3);

	
	
	/////////////////Prato 0
	
	divePrato0.setAttribute('id','divePrato0');
	divePrato0.setAttribute('class','prato');
	divePrato0.setAttribute('onclick','fecharLanche(0,imgPrato0)');
	document.body.appendChild(divePrato0);	

	
	
	/////////////////Prato 1
	divePrato1.setAttribute('id','divePrato1');
	divePrato1.setAttribute('class','prato');
	divePrato1.setAttribute('onclick','fecharLanche(1,imgPrato1)');
	document.body.appendChild(divePrato1);


	
	/////////////////Prato 2	
	divePrato2.setAttribute('id','divePrato2');
	divePrato2.setAttribute('class','prato');
	divePrato2.setAttribute('onclick','fecharLanche(2,imgPrato2)');
	document.body.appendChild(divePrato2);

	
	/////////////////Prato 3
	divePrato3.setAttribute('id','divePrato3');
	divePrato3.setAttribute('class','prato');
	divePrato3.setAttribute('onclick','fecharLanche(3,imgPrato3)');
	document.body.appendChild(divePrato3);

	
	/////////////////Lanche Cliente 1
	diveLancheCliente0.setAttribute('id','diveLancheCliente0');	
	diveLancheCliente0.setAttribute('class','droptarget');
	document.body.appendChild(diveLancheCliente0);

	
	/////////////////Lanche Cliente 2
	diveLancheCliente1.setAttribute('id','diveLancheCliente1');
	diveLancheCliente1.setAttribute('class','droptarget');
	document.body.appendChild(diveLancheCliente1);

		
	/////////////////Lanche Cliente 3
	diveLancheCliente2.setAttribute('id','diveLancheCliente2');
	diveLancheCliente2.setAttribute('class','droptarget');
	document.body.appendChild(diveLancheCliente2);


	/////////////////Lanche Cliente 4
	diveLancheCliente3.setAttribute('id','diveLancheCliente3');
	diveLancheCliente3.setAttribute('class','droptarget');
	document.body.appendChild(diveLancheCliente3);

	
	/////////////////Lanche Cliente 5
	diveLancheCliente4.setAttribute('id','diveLancheCliente4');
	diveLancheCliente4.setAttribute('class','droptarget');
	document.body.appendChild(diveLancheCliente4);	

	/////////////////Cliente 0	
	diveCliente0.setAttribute('id','diveCliente0');
	document.body.appendChild(diveCliente0);
	
	
	imgCliente0.style.display = 'none';
	imgCliente0.setAttribute('height','100%');
	imgCliente0.setAttribute('width','100%');
	diveCliente0.appendChild(imgCliente0);
	
	/////////////////Cliente 1	
	diveCliente1.setAttribute('id','diveCliente1');
	document.body.appendChild(diveCliente1);
	

	imgCliente1.style.display = 'none';
	imgCliente1.setAttribute('height','100%');
	imgCliente1.setAttribute('width','100%');
	diveCliente1.appendChild(imgCliente1);
	
	/////////////////Cliente 2
	diveCliente2.setAttribute('id','diveCliente2');
	document.body.appendChild(diveCliente2);
	

	imgCliente2.style.display = 'none';
	imgCliente2.setAttribute('height','100%');
	imgCliente2.setAttribute('width','100%');
	diveCliente2.appendChild(imgCliente2);
	
	/////////////////Cliente 3
	diveCliente3.setAttribute('id','diveCliente3');
	document.body.appendChild(diveCliente3);

	imgCliente3.style.display = 'none';
	imgCliente3.setAttribute('height','100%');
	imgCliente3.setAttribute('width','100%');
	diveCliente3.appendChild(imgCliente3);

	/////////////////Cliente 4
	diveCliente4.setAttribute('id','diveCliente4');
	document.body.appendChild(diveCliente4);

	imgCliente4.style.display = 'none';
	imgCliente4.setAttribute('height','100%');
	imgCliente4.setAttribute('width','100%');
	diveCliente4.appendChild(imgCliente4);

	/////////////////lancheRandom0
	lancheRandom0.setAttribute('id','lancheRandom0');
	document.body.appendChild(lancheRandom0);	
	
	imglancheRandom0.style.display = 'none';
	imglancheRandom0.setAttribute('height','100%');
	imglancheRandom0.setAttribute('width','100%');
	lancheRandom0.appendChild(imglancheRandom0);

	/////////////////lancheRandom1
	lancheRandom1.setAttribute('id','lancheRandom1');
	document.body.appendChild(lancheRandom1);	
	
	imglancheRandom1.style.display = 'none';
	imglancheRandom1.setAttribute('height','100%');
	imglancheRandom1.setAttribute('width','100%');
	lancheRandom1.appendChild(imglancheRandom1);

	/////////////////lancheRandom2
	lancheRandom2.setAttribute('id','lancheRandom2');
	document.body.appendChild(lancheRandom2);	
	
	imglancheRandom2.style.display = 'none';
	imglancheRandom2.setAttribute('height','100%');
	imglancheRandom2.setAttribute('width','100%');
	lancheRandom2.appendChild(imglancheRandom2);

	/////////////////lancheRandom3
	lancheRandom3.setAttribute('id','lancheRandom3');
	document.body.appendChild(lancheRandom3);	
	
	imglancheRandom3.style.display = 'none';
	imglancheRandom3.setAttribute('height','100%');
	imglancheRandom3.setAttribute('width','100%');
	lancheRandom3.appendChild(imglancheRandom3);

	/////////////////lancheRandom4
	lancheRandom4.setAttribute('id','lancheRandom4');
	document.body.appendChild(lancheRandom4);	
	
	imglancheRandom4.style.display = 'none';
	imglancheRandom4.setAttribute('height','100%');
	imglancheRandom4.setAttribute('width','100%');
	lancheRandom4.appendChild(imglancheRandom4);


	/////////////////Cronometro
	diveCronometro.setAttribute('id','Cronometro');
	document.body.appendChild(diveCronometro);

	hora.setAttribute('id','hora');
	hora.innerHTML = "00h";
	diveCronometro.appendChild(hora);
	min.setAttribute('id','minuto');
	min.innerHTML = "00m";
	diveCronometro.appendChild(min);
	seg.setAttribute('id','segundo');
	seg.innerHTML = "00s";
	diveCronometro.appendChild(seg);
	cronometrar();

	////////////////score
	diveScore.setAttribute('id','score');
	document.body.appendChild(diveScore);

	score.setAttribute('id','pontos');
	score.innerHTML = "0 pontos";
	diveScore.appendChild(score);
}

//------------------ Cronometro
function cronometrar() {
	
	var s = 1;
	var m = 0;
	var h = 0;
	var intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) hora.innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) segundo.innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) minuto.innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";		
		s++;
	},1000);


	//---------------------- CASOS DE TESTE PARA PRINTAR CLIENTES

	var intervalo2 = window.setInterval(function(){
		randomizarCliente();
		if(vida < 1) { window.clearInterval(intervalo); window.clearInterval(intervalo2); finalizarJogo(); }
	},1000);
	
}

//-------------------------------- FUNÇÕES JOGABILIDADE --------------------------------\\
//------------------ Cria um Cliente Aleatório
function randomizarCliente(){
	var min =0;
	var max =4;
	var numeroRandomico;
	var Minnie1 = 0;
	var Mickey1 = 1;
	var Pluto1 = 2;
	var Pateta1 = 3;
	var Patodonald1 = 4;
	var pedido;
	min = Math.ceil(min);
	max = Math.floor(max);
	numeroRandomico = Math.floor(Math.random() * (max - min + 1)) + min;

	pedido = randomizarLanche();

	if(numeroRandomico == Minnie1){
		printarCliente(clientList.Minnie1,clientList.Minnie2,pedido,40);	
	}
	if(numeroRandomico == Mickey1){
		printarCliente(clientList.Mickey1,clientList.Mickey2,pedido,40);
	}
	if(numeroRandomico == Pluto1){
		printarCliente(clientList.Pluto1,clientList.Pluto2,pedido,20);
	}
	if(numeroRandomico == Pateta1){
		printarCliente(clientList.Pateta1,clientList.Pateta2,pedido,50);
	}
	if(numeroRandomico == Patodonald1){
		printarCliente(clientList.Patodonald1,clientList.Patodonald2,pedido,20);
	}
	//console.log("pedido: "+pedido);
}

//------------------ Gera o ID de um Lanche Aleatório
function randomizarLanche(){
	var min = 0;
	var max = 2;
	var lanche1 = 0;
	var lanche2 = 1;
	var lanche3 = 2;
	var numeroRandomico;
	min = Math.ceil(min);
	max = Math.floor(max);
	numeroRandomico = Math.floor(Math.random() * (max - min +1)) + min;
	if(numeroRandomico == lanche1){
		return 20;
	}
	if(numeroRandomico == lanche2){
		return 30;
	}
	if(numeroRandomico == lanche3){
		return 40;
	}
}

//------------------ Coloca o cliente na tela e também nas variáveis lógicas
function printarCliente(img1,img2,pedido,tempo){

	var pontosCliente = 1000/tempo;
	
	
	if (clientes[0] == 0)
	{
		clientes[0] = 1;
		imgCliente0.style.display = 'initial';
		imgCliente0.setAttribute('src',img1);
		pedidos[0] = pedido;
		imglancheRandom0.style.display = 'initial';
		imglancheRandom0.setAttribute('src',identificarLanche(pedido));

		

		var i = 0;
		var intervalo = window.setInterval(function() {
			
			if(pedidos[0] == entregas[0]){
				imgCliente0.style.display = 'none';
				clientes[0] = 0;
				entregas[0] = 0;
				pontuação += pontosCliente;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
				imglancheRandom0.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo){
				imgCliente0.setAttribute('src',clientList.surpresa);
				clientes[0] = -1;
				vida -= 1;
				imglancheRandom0.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo/2){
				imgCliente0.setAttribute('src',img2);
				pontosCliente = pontosCliente/2;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";			
			}
			
			i++;
		},1000);
		return;
	}

	if (clientes[1] == 0)
	{
		clientes[1] = 1;
		imgCliente1.style.display = 'initial';
		imgCliente1.setAttribute('src',img1);
		pedidos[1] = pedido;
		imglancheRandom1.style.display = 'initial';
		imglancheRandom1.setAttribute('src',identificarLanche(pedido));
		
		var i = 0;
		var intervalo = window.setInterval(function() {
			
			if(pedidos[1] == entregas[1]){
				imgCliente1.style.display = 'none';
				clientes[1] = 0;
				entregas[1] = 0;
				pontuação += pontosCliente;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
				imglancheRandom1.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo){
				imgCliente1.setAttribute('src',clientList.surpresa);
				clientes[1] = -1;
				vida -= 1
				imglancheRandom1.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo/2){
				imgCliente1.setAttribute('src',img2);
				pontosCliente = pontosCliente/2;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
			}
			
			i++;
		},1000);

		return;
	}

	if (clientes[2] == 0)
	{
		clientes[2] = 1;
		imgCliente2.style.display = 'initial';
		imgCliente2.setAttribute('src',img1);
		pedidos[2] = pedido;
		imglancheRandom2.style.display = 'initial';
		imglancheRandom2.setAttribute('src',identificarLanche(pedido));
		
		var i = 0;
		var intervalo = window.setInterval(function() {
			
			if(pedidos[2] == entregas[2]){
				imgCliente2.style.display = 'none';
				clientes[2] = 0;
				entregas[2] = 0;
				pontuação += pontosCliente;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
				imglancheRandom2.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo){
				imgCliente2.setAttribute('src',clientList.surpresa);
				clientes[2] = -1;
				vida -= 1
				imglancheRandom2.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo/2){
				imgCliente2.setAttribute('src',img2);
				pontosCliente = pontosCliente/2;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
			}
			
			i++;
		},1000);
		return;
	}

	if (clientes[3] == 0)
	{
		clientes[3] = 1;
		imgCliente3.style.display = 'initial';
		imgCliente3.setAttribute('src',img1);
		pedidos[3] = pedido;
		imglancheRandom3.style.display = 'initial';
		imglancheRandom3.setAttribute('src',identificarLanche(pedido));
		
		var i = 0;
		var intervalo = window.setInterval(function() {
			
			if(pedidos[3] == entregas[3]){
				imgCliente3.style.display = 'none';
				clientes[3] = 0;
				entregas[3] = 0;
				pontuação += pontosCliente;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
				imglancheRandom3.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo){
				imgCliente3.setAttribute('src',clientList.surpresa);
				clientes[3] = -1;
				vida -= 1;
				imglancheRandom3.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo/2){
				imgCliente3.setAttribute('src',img2);
				pontosCliente = pontosCliente/2;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
			}
			
			i++;
		},1000);
		return;
	}

	if (clientes[4] == 0)
	{
		clientes[4] = 1;
		imgCliente4.style.display = 'initial';
		imgCliente4.setAttribute('src',img1);
		pedidos[4] = pedido;
		imglancheRandom4.style.display = 'initial';
		imglancheRandom4.setAttribute('src',identificarLanche(pedido));
		
		var i = 0;
		var intervalo = window.setInterval(function() {
			
			if(pedidos[4] == entregas[4]){
				imgCliente4.style.display = 'none';
				clientes[4] = 0;
				entregas[4] = 0;
				pontuação += pontosCliente;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
				imglancheRandom4.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo){
				imgCliente4.setAttribute('src',clientList.surpresa);
				clientes[4] = -1;
				vida -= 1
				imglancheRandom4.style.display = 'none';
				window.clearInterval(intervalo);
			}
			if(i+1 ==tempo/2){
				imgCliente4.setAttribute('src',img2);
				pontosCliente = pontosCliente/2;
				document.getElementById("pontos").innerHTML = pontuação + "pontos";
			}
			
			i++;
		},1000);
		return;
	}
}


//------------------ Ideintifica o numero do Pedido e devolve a imagem correspondente	
function identificarLanche(pedido)
{
	if(pedido == 20){
		return lanchesProntos.LancheC;
	}
	if(pedido == 30){
		return lanchesProntos.LancheCQ;
	}
	if(pedido == 40){
		return lanchesProntos.LancheCQA;
	}
}

//------------------ Retira o Lanche do prato e põe na "bandeija" de entrega
function identificarEntrega(idEntrega, indicePrato){

	if(idEntrega == 'diveLancheCliente0')
	{
		entregas[0] = pratos[indicePrato];
	}
	if(idEntrega == 'diveLancheCliente1')
	{
		entregas[1] = pratos[indicePrato];
	}
	if(idEntrega == 'diveLancheCliente2')
	{
		entregas[2] = pratos[indicePrato];
	}
	if(idEntrega == 'diveLancheCliente3')
	{
		entregas[3] = pratos[indicePrato];
	}
	if(idEntrega == 'diveLancheCliente4')
	{
		entregas[4] = pratos[indicePrato];
	}
}




//-------------------------------- PREPARO DO LANCHE --------------------------------\\
//------------------ Acrescenta ingrendiente no prato de preparo
function ingredientePrato(src,estadoMontagem){

	if (pratos[0] == estadoMontagem)
		{

			imgPrato0.setAttribute('src',src);
			imgPrato0.setAttribute('id','imgPrato0');
			imgPrato0.setAttribute('height','100%');
			imgPrato0.setAttribute('width','100%');			
			imgPrato0.style.display = 'initial';
			divePrato0.appendChild(imgPrato0);
			pratos[0] = estadoMontagem + 1;
			return;
		}
	if (pratos[1] == estadoMontagem)
		{
			imgPrato1.setAttribute('src',src);
			imgPrato1.setAttribute('id','imgPrato1');
			imgPrato1.setAttribute('height','100%');
			imgPrato1.setAttribute('width','100%');
			imgPrato1.style.display = 'initial';
			divePrato1.appendChild(imgPrato1);
			pratos[1] = estadoMontagem + 1;
			return;
		}
	if (pratos[2] == estadoMontagem)
		{
			imgPrato2.setAttribute('src',src);
			imgPrato2.setAttribute('id','imgPrato2');
			imgPrato2.setAttribute('height','100%');
			imgPrato2.setAttribute('width','100%');
			divePrato2.appendChild(imgPrato2);
			imgPrato2.style.display = 'initial';
			pratos[2] = estadoMontagem + 1;
			return;
		}	
	if (pratos[3] == estadoMontagem)
		{
			imgPrato3.setAttribute('src',src);
			imgPrato3.setAttribute('id','imgPrato3');
			imgPrato3.setAttribute('height','100%');
			imgPrato3.setAttribute('width','100%');
			imgPrato3.style.display = 'initial';
			divePrato3.appendChild(imgPrato3);
			pratos[3] = estadoMontagem + 1;
			return;
		}

		return 0;
}

//------------------ Acrescenta um hamburguer na Chapa
function ingredienteHamburger(){

	if (chapa[0] == 0)
		{
			
			assarHamburguer(0,imgHamburguerAssando0,diveHamburgerAssando0,imageList.HamburgerCru,imageList.HamburguerAssado);
			
			return;
		}
	if (chapa[1] == 0)
		{
			
			assarHamburguer(1,imgHamburguerAssando1,diveHamburgerAssando1,imageList.HamburgerCru,imageList.HamburguerAssado);
			
			return;
		}
	if (chapa[2] == 0)
		{
			
			assarHamburguer(2,imgHamburguerAssando2,diveHamburgerAssando2,imageList.HamburgerCru,imageList.HamburguerAssado);
			
			return;
		}	
	if (chapa[3] == 0)
		{
			
			assarHamburguer(3,imgHamburguerAssando3,diveHamburgerAssando3,imageList.HamburgerCru,imageList.HamburguerAssado);
			
			return;
		}
}

//------------------ Assa o Hamburguer
function assarHamburguer(indice,img,slot,cru,assado){

	img.setAttribute('src',cru);
	img.setAttribute('height','100%');
	img.setAttribute('width','100%');
	img.style.display = 'initial';
	slot.appendChild(img);

	chapa[indice] = 1;

	setTimeout(function(){ 
		img.setAttribute('src',assado);
		chapa[indice] = 2;
	},1000)



	return;
}

//------------------ Acrescenta o Hamburguer Assado no prato de preparo
function montarHamburguer(indice,img){


	if(chapa[indice] == 1)
	{
		alert('Hamburger Cru Maluco');
		return;
	}
	if(chapa[indice] == 2)
	{

		if (ingredientePrato(imageList.SLancheC,1) != 0){
			img.style.display = 'none';			
			chapa[indice] = 0;
		}


	}
}

//------------------ Conclui a montagem do lanche
function fecharLanche(indice,img){

	if(pratos[indice] < 2)
	{
		alert("Não dá pra montar um lanche só com isso mano ");
		return;
	}
	if(pratos[indice] == 2)
	{
		img.setAttribute('src',lanchesProntos.LancheC);
		img.setAttribute('draggable','true');
		pratos[indice] = 20;
		return;
	}
	if(pratos[indice] == 3)
	{
		img.setAttribute('src',lanchesProntos.LancheCQ);
		img.setAttribute('draggable','true');
		pratos[indice] = 30;
		return;
	}
	if(pratos[indice] == 4)
	{
		img.setAttribute('src',lanchesProntos.LancheCQA);
		img.setAttribute('draggable','true');
		pratos[indice] = 40;
		return;
	}
}



//-------------------------------- DRAGGABLE --------------------------------\\
//------------------ ORIGEM
document.addEventListener('dragstart',function (event) {
	
	// dataTransfer.setData(): define chave e id do elemento arrastado
	event.dataTransfer.setData('elementID', event.target.getAttribute('id'));

	if(event.target.getAttribute('id') == 'imgPrato0')
	{
		if(pratos[0]<20)
		{
			alert('Sanduiche não foi montado');
			return;
		}
	}
		if(event.target.getAttribute('id') == 'imgPrato1')
	{
		if(pratos[1]<20)
		{
			alert('Sanduiche não foi montado');
		}
	}
		if(event.target.getAttribute('id') == 'imgPrato2')
	{
		if(pratos[2]<20)
		{
			alert('Sanduiche não foi montado');
		}
	}
		if(event.target.getAttribute('id') == 'imgPrato3')
	{
		if(pratos[3]<20)
		{
			alert('Sanduiche não foi montado');
		}
	}
		
	// Muda a opacidade do elemento que está sendo arrastado
	//event.target.style.opacity = '0.4';
});

document.addEventListener('drag', function (event) {

	event.target.style.display = 'none';
});

document.addEventListener('dragend',function (event) {
	
	event.target.style.display = 'initial';
});




//------------------ DESTINO
document.addEventListener('dragenter', function (event) {
	// apenas elementos da classe 'droptarget' podem ser destino do elemento de origem
	if (event.target.className == 'droptarget') {
		
		event.target.style.border = '3px dotted red';
	}
	event.preventDefault();
			
});

document.addEventListener('dragover', function (event) {

	event.preventDefault();
});
		

document.addEventListener('dragleave', function (event) {
	// apenas elementos da classe 'droptarget' podem ser destino do elemento de origem
	if (event.target.className == 'droptarget') {
		
		event.target.style.border = '';

		}
	event.preventDefault();
});

document.addEventListener('drop', function (event) {
	// Permite que o elemento de origem seja adicionado no elemento de destino
	// caso contrário, abriria um link com o elemento
	event.preventDefault();
	// apenas elementos da classe 'droptarget' podem ser destino do elemento de origem
	if (event.target.className == 'droptarget')	{
		
		event.target.style.border = '';		
		// Obtém o elemento de origem na carga de dados
		var data = event.dataTransfer.getData('elementID');
		// Adiciona o elemento de origem no elemento de destino
		event.target.appendChild(document.getElementById(data));

		
		if(data == 'imgPrato0')
		{
			identificarEntrega(event.target.getAttribute('id'),0);
			setTimeout(function(){
				event.target.removeChild(document.getElementById(data));
			},250);
			
			pratos[0] = 0;

		}
		if(data == 'imgPrato1')
		{
			identificarEntrega(event.target.getAttribute('id'),1);
			setTimeout(function(){
				event.target.removeChild(document.getElementById(data));
			},500);
			pratos[1] = 0;	
		}
		if(data == 'imgPrato2')
		{
			identificarEntrega(event.target.getAttribute('id'),2);
			setTimeout(function(){
				event.target.removeChild(document.getElementById(data));
			},500);
			pratos[2] = 0;	
		}
		if(data == 'imgPrato3')
		{
			identificarEntrega(event.target.getAttribute('id'),3);
			setTimeout(function(){
				event.target.removeChild(document.getElementById(data));
			},500);
			pratos[3] = 0;	
		}

		
		
	}
});
