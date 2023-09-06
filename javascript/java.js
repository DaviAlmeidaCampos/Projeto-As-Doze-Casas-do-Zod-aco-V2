function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const p = document.getElementById('paragrafo')
    var d = document.getElementById('valor').value
    var [ano, mes, dia] = d.split('-').map(Number)


    if((dia >= 23 && mes == 8) && (dia <= 31 && mes <= 8) || (dia>=1 && mes == 9) && (dia <= 22 && mes == 9)){
        texto.innerHTML = "virgem";
        p.innerHTML = "Após se sacrificar junto dos demais cavaleiros de ouro, Shaka atingiu o Nirvana. Contudo, quando Shun de Andrômeda chegou à Casa de Virgem em Saint Seiya: Next Dimension, o DNA do sangue do Cavaleiro de Virgem, que havia sido usado para restaurar a armadura de Andrômeda, fez com que uma memória residual surgisse diante dos presentes para enfrentar Shijima, o cavaleiro de Virgem da Guerra Santa do século XVIII, que também estava presente apenas em espírito (o corpo real dele segurava a bebê Saori para protegê-la de Cardinale de Peixes)."
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 4) && (dia <= 31 && mes <= 4) || (dia>=1 && mes == 5) && (dia <= 20 && mes == 5)){
        texto.innerHTML = "touro";
        p.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades. Lutou com Niobe de Deep quando os Espectros invadiram o Santuário, tendo um fim heroico.";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)){
        texto.innerHTML = "sargitario"; 
        p.innerHTML = "Aiolos de Sagitário (射手座サジタリアスのアイオロス Sajitariasu no Aiorosu?) é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. Mesmo morto, sua alma continua a controlar sua Armadura de Sagitário, sempre ajudando, nos momentos críticos – emprestou-a a Seiya durante a luta contra Poseidon, por exemplo.";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
        texto.innerHTML = "libra";
        p.innerHTML = "Dohko de Libra (天秤座の童虎, Raibura no Dōko?) fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. Após o fim do conflito e ser incumbido por Atena de vigiar o selo que aprisionava o espectros do Imperador dos Mortos, Dohko ficou recluso nos Cinco Picos Antigos de Rozan até o Século XX, período que passara a ser venerado como Mestre Ancião (老師, Rōshi?) e, ao mesmo tempo que mantinha sua vigília, treinou Shiryu, que se tornaria o Cavaleiro de Bronze de Dragão. Nesta época, depois de descobrir que Saga de Gêmeos havia tomado o lugar de Shion como Grande Mestre do Santuário, Dohko auxilou seu discípulo junto de seus demais amigos em inúmeras ocasiões a fim de impedir os planos do Cavaleiro renegado de dominar o mundo bem como fora um dos principais articuladores para desmascarar sua farsa.";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 23 && mes == 6) || (dia <= 22 && mes == 7)){
        texto.innerHTML = "leao";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 23 && mes == 12) || (dia <= 20 && mes == 1)){
        texto.innerHTML = "capricornio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)){
        texto.innerHTML = "cancer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "aries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "aquario";
        p.innerHTML = "Camus mantém muito do seu caráter original, sendo frio na maior parte do tempo, mas nesta versão o Santo de Aquário é levado por seus sentimentos de culpa por ter sido responsável pela morte da irmã de seu velho amigo, por isso que eu trai seus companheiros e se une aos Guerreiros Deuses. Mostrando um grande afinco em derrotar quem se opor a eles.";   
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
    }

    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
    }
    
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "Peixes";
        texto.innerHTML = "";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Escreve o seu signo burro";
        imagem.setAttribute("src","img/X.png");
        imagem.setAttribute("width","250px");
    }
}