Crafty.c("PlayerShot", {
   init: function(){
//        var playerAssets = {
//            "sprites": {
//                "assets/player.png": {
//                    tile: 16,
//                    tileh: 16,
//                    map: {
//                        "playerShot" : [0,0]
//                    }
//                }
//            }
//        }
//        
//        Crafty.load(playerAssets);
       
        this.addComponent("2D, DOM, Motion, Canvas, Collision, Color")
            .attr({w: 2, h: 7, vy: -750})
            .color("rgba(255,255,255,0.60)")
            .bind("UpdateFrame", function(evt){
                if(this.y <= -7){
                    this.destroy();
                    player.shotting = false;
                    hud.total -= 25;
                }
            });
   }
});