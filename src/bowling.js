
const bowl = (game) => {
    return bowlTestA(game);
    // return bowlTestB(game);
    // return bowlTestC(game);
    // return bowlTestD(game);
    // return bowlTestE(game);
    // return bowlRefactor(game);    
}

const bowlTestA = (game) => {

    // V1
    // let total = 0;
    // game.forEach(frame => {total = total + frame.reduce((lhs, thrw) => lhs + thrw,0);});
    // return total;

    // V2
    return game.reduce((lhs, frame) => lhs + frame.reduce((lhs, thrw) => lhs + thrw,0),0)
};

const bowlTestB = (game) => {};
const bowlTestC = (game) => {};
const bowlTestD = (game) => {};
const bowlTestE = (game) => {};
const bowlRefactor = (game) => {};




module.exports = {bowl};