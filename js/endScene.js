Crafty.defineScene("EndScreen", function(params){
    clearInterval(0);
    clearInterval(1);
    clearInterval(2);
    clearInterval(3);
    clearInterval(4);
    
    if(localStorage.getItem("record") < hud.total)
        localStorage.setItem("record", hud.total);
    
    Crafty.background("#000000 url(assets/background.png) no-repeat center center");
    
    Crafty.e("Canvas, Text")
        .attr({x: 100, y: 50})
        .text("You " + params.result)
        .textColor("white")
        .textFont({size: '24px'})
        .bind("KeyDown", function(evt){
            if(evt.key == Crafty.keys.SPACE){
                Crafty.enterScene('PlayScreen');
            }
        });
    
    Crafty.e("Canvas, Text")
        .attr({x: 100, y: 100})
        .text("Points: " + Math.ceil(bonus + hud.total))
        .textColor("white")
        .textFont({size: '24px'})
        .bind("KeyDown", function(evt){
            if(evt.key == Crafty.keys.SPACE){
                Crafty.enterScene('PlayScreen');
            }
        });
    
    Crafty.e("Canvas, Text")
    .attr({x: 152, y: 250})
    .text("Press SPACE to start")
    .textColor("white")
    .bind("KeyDown", function(evt){
        if(evt.key == Crafty.keys.SPACE){
            score = 0;
            hud.total = 0;
            Crafty.enterScene('PlayScreen');
        }
    });
});