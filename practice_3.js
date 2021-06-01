//sound ------------------------------------------------------------------------------------>
var soundeffect = true;

document.getElementById("volumnUpdiv").addEventListener("click", function () {
    soundeffect = false;
    TweenMax.to('#mutediv', 0, {display: 'flex'}); 
    TweenMax.to('#volumnUpdiv', 0, {display: 'none'});   
});
document.getElementById("mutediv").addEventListener("click", function () {
    soundeffect = true;
    TweenMax.to('#mutediv', 0, {display: 'none'}); 
    TweenMax.to('#volumnUpdiv', 0, {display: 'flex'});   
});

//run ------------------------------------------------------------------------------------>
document.getElementById("startJump").addEventListener("click", function nextPic() {
    
    if (soundeffect == true){
    var x = document.getElementById("jumpAudio");
    x.play();
    }
    

    //run elem ------------------------------------------------------------------------------------>
    document.getElementById("dinoPic").src = "images/dinoRunRun.png";
    
       
    if (jumpVar == true) {
        TweenMax.to('#virtualJump', 0, {display: 'flex'}); 
        TweenMax.to('#startJump', 0, {display: 'none'});   

        TweenMax.to('#dinosaurIMG', 0.4, {bottom: '60vh', ease: Power1.easeOut});
        TweenMax.to('#dinosaurIMG', 0.4, {delay: 0.4, bottom: '40vh', ease: Power1.easeIn});
        jumpVar = false;
        setTimeout(function changevarback(){jumpVar = true;}, 800);
    } 
        
    document.querySelector('#cactusCtn1').classList.add('cactusRun');
    document.querySelector('#cactusCtn2').classList.add('cactusRun');

    //dino touch 1 ------------------------------------------------------------------------------------>
    var result;
    function intersectRect() {
        var r1 = document.getElementById("dinosaurIMG").getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
        var r2 = document.getElementById("cactusCtn1").getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT
        result = !(r2.left > r1.right || 
            r2.right < r1.left || 
            r2.top > r1.bottom ||
            r2.bottom < r1.top);

        if (result == true) {
            document.getElementById("dinoPic").src = "images/dinoOver.png";
            document.querySelector('#cactusCtn2').classList.remove('cactusRun');
            document.querySelector('#cactusCtn1').classList.remove('cactusRun');
            TweenMax.to('#end', 0, {display: 'flex'});
            TweenMax.to('#end', 0.3, {opacity: 1, ease: Power1.easeIn});
            TweenMax.to('#scoreBoard', 0, {display: 'none'});
            document.getElementById("showScore").innerHTML = score;

            if (soundeffect == true){
                var x = document.getElementById("loseAudio");
                x.play();
            };
        };
    };
    setInterval(intersectRect, 100);

    //dino touch 2 ------------------------------------------------------------------------------------>
    var result2;
    function intersectRect2() {
        var r1 = document.getElementById("dinosaurIMG").getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
        var r2 = document.getElementById("cactusCtn2").getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

        result2 = !(r2.left > r1.right || 
            r2.right < r1.left || 
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
        if (result2 == true) {
            document.getElementById("dinoPic").src = "images/dinoOver.png";
            document.querySelector('#cactusCtn2').classList.remove('cactusRun');
            document.querySelector('#cactusCtn1').classList.remove('cactusRun');
            TweenMax.to('#end', 0, {display: 'flex'});
            TweenMax.to('#end', 0.3, {opacity: 1, ease: Power1.easeIn});
            TweenMax.to('#scoreBoard', 0, {display: 'none'});
            document.getElementById("showScore").innerHTML = score;
            
            if (soundeffect == true){
                var x = document.getElementById("loseAudio");
                x.play();
            };
        };
    };
    setInterval(intersectRect2, 100);

    //score ------------------------------------------------------------------------------------>
    var score = 0;
    function updateScore () {
        score = score + 1
        document.getElementById("scoreBoard").innerHTML = score;
    };
    var scoreRun = setInterval(updateScore, 100);

    //cloud------------------------------------------------------------------------------------>
    TweenMax.to('#cloud1', 25, {left: '-40vh', ease: Power0.easeNone});
    document.querySelector('#cloud1').classList.add('cloud1MoveClass');

    TweenMax.to('#cloud2', 60, {left: '-40vh', ease: Power0.easeNone});
    document.querySelector('#cloud2').classList.add('cloud2MoveClass');

});



//retry ------------------------------------------------------------------------------------>
document.getElementById("try").addEventListener("click", function () {
    window.location.reload(true)
});


//jump button ------------------------------------------------------------------------------------>
document.getElementById("virtualJump").addEventListener("click", function () {
    if (jumpVar == true) {
        jump();
        jumpVar = false;
        setTimeout(function changevarback(){jumpVar = true;}, 800);
    }
});

//jump function ------------------------------------------------------------------------------------>

var jumpVar = true;
function jump() {
    TweenMax.to('#dinosaurIMG', 0.4, {bottom: '55vh', ease: Power1.easeOut});
    TweenMax.to('#dinosaurIMG', 0.4, {delay: 0.4, bottom: '40vh', ease: Power1.easeIn});
    TweenMax.to('#virtualJump', 0, {display: 'none'});
    TweenMax.to('#virtualJump', 0, {delay: 0.8, display: 'flex'});

    if (soundeffect == true){
    var x = document.getElementById("jumpAudio");
    x.play();
    }
};

//key press jump ------------------------------------------------------------------------------------>
document.addEventListener('keypress', function() {
    if (jumpVar == true) {
        jump();
        jumpVar = false;
        setTimeout(function changevarback(){jumpVar = true;}, 800);
    }
});