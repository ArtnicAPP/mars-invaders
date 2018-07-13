Crafty.defineScene("PlayScreen", function(){
    Crafty.e("Wall, 2D, Collision")
        .attr({x:0, y: 0, w: 5, h: 300});
    Crafty.e("Wall, 2D, Collision")
        .attr({x:395, y: 0, w: 5, h: 300});
    
    hud = Crafty.e("HUD").attr({total : score});
    
    current_level += 1;
    for(i = 0; i < 8; i++){
        for(j = 0; j < 4; j++){
            enemies[i] = Crafty.e("Enemy").attr({x: 75 + i * 30, y: 30 + 30 * j, level: current_level});
            enemies[i].defaultMove();
        }
    }
        
    enemiesCount = 32;
    bonus = 0;    
    player = Crafty.e("Player")
        .attr({x:192, y: 270});
});