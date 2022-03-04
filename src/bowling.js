
const bowl = (game) => {
    //return bowlTestA(game);
    //return bowlTestB(game);
    return bowlTestC(game);
    // return bowlTestD(game);
    // return bowlTestE(game);
    // return bowlRefactor(game);    
}

// (A) GAME array of 10 FRAMES containing 2 THROWS
const bowlTestA = (game) => {

    // V1
    // let total = 0;
    // game.forEach(frame => {total = total + frame.reduce((lhs, thrw) => lhs + thrw,0);});
    // return total;

    // V2
    // return game.reduce((lhs, frame) => lhs + frame.reduce((lhs, thrw) => lhs + thrw,0),0)

    // V3 Expanded
    let totalGame = 0;
    let totalFrame = 0;
    game.forEach(frame => {
        frame.forEach(thrw => {
            totalFrame += thrw
        });
        totalGame += totalFrame;
        totalFrame = 0;
    });
    return totalGame; 
};

// (B) 1-9TH FRAME SPARE, FIRST THROW < 10, BOTH THROWS = 10, following THROW doubled
const bowlTestB = (game) => {
    let totalGame = 0;
    let totalFrame = 0;
    let multiplier = 1;
    game.forEach(frame => {
        frame.forEach((thrw,index) => {
            totalFrame += (thrw * multiplier);
            multiplier = ((index===1 && (totalFrame === 10)) ? 2 : 1);
        });
        totalGame += totalFrame;
        totalFrame = 0;
    });
    return totalGame;
};

const bowlTestC = (game) => {
    let totalGame = 0;
    let totalFrame = 0;
    let spare = 1;
    let strike = 0;
    game.forEach(frame => {
        frame.forEach((thrw,index) => {
            totalFrame += (thrw * spare);
            spare = ((totalFrame === 10 && index===1 && strike !== 10) ? 2 : 1);
            strike = ((totalFrame === 10 && index===0) ? 10 : strike);
            console.log(`totalFrame ${totalFrame} thrw ${thrw} index ${index} multiplySpare ${spare} strike ${strike}`)
        });
        totalGame += totalFrame + strike;
        console.log(`totalGame ${totalGame}`);
        strike = 0
        totalFrame = 0;
    });
    return totalGame;
};
const bowlTestD = (game) => {};
const bowlTestE = (game) => {};
const bowlRefactor = (game) => {};




module.exports = {bowl};