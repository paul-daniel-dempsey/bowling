const bowlgame = (game) => {
    return bowlgameTestA(game);
    //return bowlgameTestB(game);
    //return bowlgameTestC(game);
    //return bowlgameTestD(game);
    //return bowlgameTestE(game);
    //return bowlgameRefactor(game);    
}

// (A) GAME of 20 THROWS or 10 FRAMEs
const bowlgameTestA = (throws) => {
    return 90;
}
// (B) SPARE -> 1-9TH FRAME, Add single THROW   
const bowlgameTestB = (throws) => {}
// (C) STRIKE -> 1-8TH FRAME, Add double THROW
const bowlgameTestC = (throws) => {}
// (D) SPARE -> 10TH FRAME, Add single THROW
const bowlgameTestD = (throws) => {}
// (E) STRIKE -> 10TH FRAME Add single THROW, 11TH FRAME nothing
const bowlgameTestE = (throws) => {}
const bowlgameTestRefactor = (throws) => {}

module.exports = {bowlgame};