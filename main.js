songp = "";
songh = "";
function preload(){
    songh= loadSound("music.mp3");
    songp= loadSound("music2.mp3");
    }
    function setup(){
        canvas = createCanvas(600,500);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();}
        
        function draw(){
            image(video,0,0,600,500);
        }
        function play(){
            song.play();
        }
