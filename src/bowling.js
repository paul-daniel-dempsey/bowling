const bowlgame = (throws) => {
 
    let gameScore = 0;
    for(i=0;i<throws.length; i++) {  // Arrow function wont go forward 1/2 places to get spares/strikes
        frame = throws[i]
        if (frame === 10) {
            // Strike
            gameScore += frame + ((throws[i+1]) ? throws[i+1] : 0) + ((throws[i+2]) ? throws[i+2] : 0)
        }
        else {
            frame += ((throws[i+1]) ? throws[i+1] : 0);
            if (frame === 10) {
                // Spare
                gameScore += frame + ((throws[i+2]) ? throws[i+2] : 0)
            }
            else {
                // Pair
                gameScore += frame
            }
        }
        // Skip over 2 throws (Spare/Pair) if not Strike
        i += (throws[i] !== 10 ? 1 : 0);
    }
    return gameScore;    
}

module.exports = {bowlgame};