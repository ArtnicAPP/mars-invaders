Crafty.c("Player", {
   init: function(){
        var playerAssets = {
            "sprites": {
                "assets/player.png": {
                    tile: 16,
                    tileh: 16,
                    map: {
                        "playerSpaceship" : [0,0]
                    }
                }
            }
        }
        
        Crafty.load(playerAssets);
       
        this.addComponent("2D, Canvas, Twoway, Sprite, Collision, playerSpaceship")
            .attr({w: 24, h: 24, shotting: false})
            .twoway(150)
            .bind("KeyDown", function(evt){
                if(evt.key == Crafty.keys.UP_ARROW && !this.shotting)
                    this.shot();
            })
            .onHit('Wall', function(hitDatas){
                var hitData = hitDatas[0];
                if(hitData.type == "SAT"){
                    this.x -= hitData.overlap * hitData.nx;
                    this.y -= hitData.overlap * hitData.ny;
                }else{
                    this.x = evt._x;
                    this.y = evt._y;
                }
            })
            .bind("UpdateFrame", function(){
                bonus -= 0.001;
                if(enemiesCount == 0)
                    Crafty.enterScene("EndScreen", {result: "win"});
            });
   },
   shot: function(){
        this.shotting = true;
        Crafty.e("PlayerShot")
            .attr({x: player.x, y: player.y});
   }
});