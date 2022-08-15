var ball;
var pBola,bancoddados

function setup(){
    bancoddados = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var pBola2 = bancoddados.ref("bola/posisao");
    pBola2.on("value",lPosisao,mErro);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    bancoddados.ref("bola/posisao").set({
        "x":pBola.x + x,
        "y":pBola.y + y,
    })
}

function mErro(){
    console.log("deu zica");
}

function lPosisao(dados){
    pBola = dados.val();
    ball.x = pBola.x;
    ball.y = pBola.y;
}
