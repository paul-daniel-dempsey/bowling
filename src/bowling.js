
const bowl = (game) => {
    //return bowlTestA(game);
    //return bowlTestB(game);
    //return bowlTestC(game);
    return bowlTestD(game);
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
    let spare = false;
    game.forEach(frame => {
        frame.forEach((thrw,idxThrw) => {
            first = (idxThrw===0 ? thrw : first)
            totalGame = totalGame + thrw + (spare ? first : 0)
            spare = (idxThrw===1 && (first + thrw === 10));
            //console.log(`totalGame ${totalGame} first ${first} thrw ${thrw} idxThrw ${idxThrw} spare ${spare}`)
        });
        //console.log(`totalGame ${totalGame}`);
    });
    return totalGame;
};

const bowlTestC = (game) => {
    let totalGame = 0;
    let spare = false;
    let strike = false;
    game.forEach(frame => {
        frame.forEach((thrw,idxThrw) => {
            first = (idxThrw===0 ? thrw : first)
            totalGame += thrw + (spare ? first : 0) + (strike ? 10 : 0)
            spare = (idxThrw===1 && (first + thrw === 10) && !strike);
            strike = (idxThrw===0 && first === 10);
            //console.log(`totalGame ${totalGame} first ${first} thrw ${thrw} idxThrw ${idxThrw} spare ${spare} strike ${strike}`)
        });
        //console.log(`totalGame ${totalGame}`);
    });
    return totalGame;
};
const bowlTestD = (game) => {
    let totalGame = 0;
    let spare = false;
    let strike = false;
    game.forEach((frame, idxFrame) => {
        frame.forEach((thrw,idxThrw) => {
            first = (idxThrw===0 ? thrw : first)
            totalGame += thrw + 
                        ((spare && idxFrame < 10) ? first : 0) + 
                        (strike ? 10 : 0)
            spare = (idxThrw===1 && (first + thrw === 10) && !strike);
            strike = (idxThrw===0 && first === 10);
            //console.log(`totalGame ${totalGame} first ${first} thrw ${thrw} idxThrw ${idxThrw} spare ${spare} strike ${strike} idxFrame ${idxFrame}`)
        });
        //console.log(`totalGame ${totalGame}`);
    });
    return totalGame;
};
const bowlTestE = (game) => {};
const bowlRefactor = (game) => {};




module.exports = {bowl};