
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                // I get bricks array is being spliced but how does that make the bricks show up?
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                
                if( c == 0 ) {
                    // fill style is blue
                     ctx.fillStyle = "blue"
                } else if( c == 1 ) {
                     // fill style green
                     ctx.fillStyle = "purple"
                } else if( c == 2 ) {
                     // fill orange
                     ctx.fillStyle = "magenta"
                } else if( c == 3 ) {
                    // fill orange
                    ctx.fillStyle = "red"
                } else {
                    // fill orange
                    ctx.fillStyle = "gold"
                }

                ctx.fill();
                ctx.closePath(); 
            }
        }
    }
}