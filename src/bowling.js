const bowlgame = (game) => {
    //return bowlgameTestA(game);
    //return bowlgameTestB(game);
    //return bowlgameTestC(game);
    return bowlgameTestD(game);
    //return bowlgameTestE(game);
    //return bowlgameRefactor(game);    
}

// (A) GAME of 20 THROWS or 10 FRAMEs
const bowlgameTestA = (throws) => {
    return throws.reduce((lhs, thrw) => lhs + thrw,0);
}
// (B) SPARE -> 1-9TH FRAME, Add single THROW   
const bowlgameTestB = (throws) => {
 
    let gameScore = 0;
 
    for(i=0;i<throws.length; i++) {
  
        frame = throws[i] + throws[i+1]; // Arrow function wont go forward to get spares
        if (frame === 10) {
            gameScore += frame + throws[i+2]
            console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame} + spare ${throws[i+2]}`);
        }
        else {
            gameScore += frame
            console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame}`);
        }
        i += 1;
    }
    return gameScore;    
}
// (C) STRIKE -> 1-8TH FRAME, Add double THROW
const bowlgameTestC = (throws) => {
     
   let gameScore = 0;
   for(i=0;i<throws.length; i++) {  // Arrow function wont go forward 1/2 places to get spares/strikes
 
       frame = throws[i]
       console.log(`frame ${frame}`)
       if (frame === 10) {
           // Strike
           gameScore += frame + throws[i+1]+ throws[i+2]
           console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame} + strike (${throws[i+1]} + ${throws[i+2]})`);
       }
       else {
           frame += + throws[i+1];
           if (frame === 10) {
               // Spare
               gameScore += frame + throws[i+2]
               console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame} + spare ${throws[i+2]}`);
           }
           else {
               gameScore += frame
               console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame}`);
           }
       }
       i += (throws[i] !== 10 ? 1 : 0);
   }
   return gameScore;
}
// (D) SPARE -> 10TH FRAME, Add single THROW
const bowlgameTestD = (throws) => {
 
    let gameScore = 0;
    for(i=0;i<throws.length; i++) {  // Arrow function wont go forward 1/2 places to get spares/strikes
  
        frame = throws[i]
        if (frame === 10) {
            // Strike
            gameScore += frame + throws[i+1]+ throws[i+2]
            console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame} + strike (${throws[i+1]} + ${throws[i+2]})`);
        }
        else {
            frame += + throws[i+1];
            if (frame === 10) {
                // Spare
                gameScore += frame + throws[i+2]
                console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame} + spare ${throws[i+2]}`);
            }
            else {
                gameScore += frame
                console.log(`Pos:${i} gameScore ${gameScore} = gameScore + framescore ${frame}`);
            }
        }
        i += (throws[i] !== 10 ? 1 : 0);
    }
    return gameScore; 
}

// (E) STRIKE -> 10TH FRAME Add single THROW, 11TH FRAME nothing
const bowlgameTestE = (throws) => {}
const bowlgameTestRefactor = (throws) => {}

module.exports = {bowlgame};