Crafty.defineScene("PlayScreen", function(){
    Crafty.e("Wall, 2D, Collision")
        .attr({x:0, y: 0, w: 5, h: 300});
    Crafty.e("Wall, 2D, Collision")
        .attr({x:395, y: 0, w: 5, h: 300});
    
    for(i = 0; i < 8; i++){
        for(j = 0; j < 4; j++){
            enemies[i] = Crafty.e("Enemy").attr({x: 75 + i * 30, y: 10 + 30 * j});
            enemies[i].defaultMove();
        }
    }
    
    score = 0;
    enemiesCount = 32;
    bonu = 250000;
    player = Crafty.e("Player")
        .attr({x:192, y: 270});
});