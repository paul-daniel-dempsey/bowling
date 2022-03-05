const { bowlgame } = require("./bowling");
// We can briefly summarize the scoring for this form of bowling:

// Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
// In each frame, the bowler gets up to two tries to knock down all the pins.
// If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
// If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
// If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
// If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
// The game score is the total of all frame scores.

// Assumptions ->
// We will not check for valid rolls.
// We will not check for correct number of rolls and frames.
// We will not provide scores for intermediate frames.

// (A) GAME of 20 THROWS or 10 FRAMEs.
// [3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6] = 90
// [3,6,3,6,3,6,1,2,3,6,3,6,2,1,3,6,3,6,3,6] = 78
// [9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0] = 90

// (B) SPARE -> 1-9TH FRAME, Add single THROW   
// [9,1,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6] = (10+3) + (9x9) = 94
// [5,5,5,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] = (10+5) + (10+1) + 1 = 27 
// [0,10,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6] => (10+3) + (9x9) = 94

// (C) STRIKE -> 1-8TH FRAME, Add double THROW
// [10,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6] => (10+3+6) + (9x9) = 100
// [10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] => (10+10+0) + 10 = 30
    
// (D) SPARE -> 10TH FRAME, Add single THROW
// [3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,9,1,5,0] = (9x9) + (10+5) + 5  = 101
// [3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,9,1,9,0] = (9x9) + (10+9) + 9 = 109
// [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5] = (10x15) + 5 = 155

// (E) STRIKE -> 10TH FRAME Add single THROW, 11TH FRAME nothing
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,5,2] = (10+5+2) + 5 + 2 = 24
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,5,5] = (10+10+5) + (10+5+5) + 5 + 5 = 55
// [10,10,10,10,10,10,10,10,10,10,10] = (30x9) + (10+10) + 10 = 300

describe("bowlgame", () => {
    test("(A) GAME array of 10 FRAMES containing 2 THROWS", () => {    
        expect(bowlgame([3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6])).toEqual(90);
        expect(bowlgame([3,6,3,6,3,6,1,2,3,6,3,6,2,1,3,6,3,6,3,6])).toEqual(78);
        expect(bowlgame([9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0])).toEqual(90);
    } )
    test("(B) 1-9TH FRAME SPARE, FIRST THROW < 10, BOTH THROWS = 10, following THROW doubled", () => {
         expect(bowlgame([9,1,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6])).toEqual(94);
         expect(bowlgame([5,5,5,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toEqual(27);
         expect(bowlgame([0,10,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6])).toEqual(94);
    } )
    // test("(C) 1-9TH FRAME STRIKE, FIRST THROW = 10, following FRAME doubled", () => {
    //      expect(bowlgame([10,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6])).toEqual(100);
    //      expect(bowlgame([10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toEqual(30);
    // } )    
    // test("(D) SPARE -> 10TH FRAME, Add single THROW", () => {
    //      expect(bowlgame([3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,9,1,5,0])).toEqual(101);
    //      expect(bowlgame([3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,9,1,9,0])).toEqual(109);
    //      expect(bowlgame([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0])).toEqual(155);
    // } )    
    // test("(E) STRIKE -> 10TH FRAME Add single THROW, 11TH FRAME nothing", () => {
    //     expect(bowlgame([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,5,2])).toEqual(24);
    //     expect(bowlgame([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,5,5])).toEqual(55);
    //     expect(bowlgame([10,10,10,10,10,10,10,10,10,10,10])).toEqual(300);        
    // } ) 
})
