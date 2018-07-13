Crafty.defineScene("GameScreen", function(){
    var titleAssets = {
        "sprites": {
            "assets/title.png":{
                tile: 128,
                tileh: 128,
                map: {
                    title: [0,0]
                }
            }
        }
    }
    var startColor = 'white';
    
    Crafty.background("#000000 url(assets/background.png) no-repeat center center");
    Crafty.load(titleAssets);
    Crafty.e("Canvas, Sprite, title")
        .attr({x: 136, y: 15});
    var start = Crafty.e("Canvas, Text")
        .attr({x: 152, y: 250})
        .text("Press SPACE to start")
        .textColor(startColor)
        .bind("KeyDown", function(evt){
            if(evt.key == Crafty.keys.SPACE){
                Crafty.enterScene('PlayScreen');
            }
        });
    
        setInterval(function(){
            startColor = (startColor == 'white') ? 'black' : 'white';
            start.textColor(startColor);
        }, 750);
});