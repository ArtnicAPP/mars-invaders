Crafty.c("Enemy", {
    init: function(){
        var enemyAssets = {
            "sprites": {
                "assets/enemy.png": {
                    tile: 16,
                    tileh: 16,
                    map: {
                        "enemySpaceship" : [0,0]
                    }
                }
            }
        }
        
        Crafty.load(enemyAssets);
       
        this.addComponent("2D, Canvas, Twoway, Sprite, SpriteAnimation, Collision, Tween, AngularMotion, enemySpaceship")
            .attr({w: 24, h: 24, points: 125, arotation: 5})
            .reel("explosion", 250, 0, 0, 6)
            .onHit("PlayerShot", function(hitDatas){
                this.z = -5;
                this.removeComponent("Collision");
                player.shotting = false;
                hitDatas[0].obj.destroy();
                if(hitDatas[0].type == "SAT"){
                    hitDatas[0].obj.x -= hitDatas[0].overlap * hitDatas[0].nx;
                    hitDatas[0].obj.y -= hitDatas[0].overlap * hitDatas[0].ny;
                }else{
                    hitDatas[0].obj.x = evt._x;
                    hitDatas[0].obj.y = evt._y;
                }
                this.explode();            
                var that = this;
                setTimeout(function(){
                    that.destroy();
                    enemiesCount--;
                }, 260);
            })
            .bind("UpdateFrame", function(){
                this.arotation = 5;
                if(this.y + 24 > 300)
                    Crafty.enterScene("EndScreen", {result: "lose"});
            });
   },
   defaultMove: function() {
        var originalX = this.x,
            originalY = this.y,
            that = this;
        this.tween({ x: originalX - 20}, 1500)
        setInterval(function(){
            that.tween({ x: originalX + 20}, 1500)
            setTimeout(function(){
                that.tween({ x: originalX - 20}, 1400)
            }, 2500);
        }, 5000);
        setInterval(function(){
           that.tween({y: that.y + 30}, 750);           
       }, 7500);
   },
   explode: function() {
       score += this.points + this.x;
       this.animate("explosion");
   }
});