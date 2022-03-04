const { bowl } = require("./bowling");
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

// GAME Array of 10 FRAMEs Contain 2 THROWS.
// [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]] => (3+6)x10 = 90

// 1-9TH FRAME SPARE, FIRST THROW < 10, BOTH THROWS = 10, following THROW doubled
// [[9,1],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]] => (9+1)=10 + 3 + (3+6)x9 = 94
// [[0,10],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]] => (0+10) + 3 + (3+6)x9 = 94

// 1-9TH FRAME STRIKE, FIRST THROW = 10, following FRAME doubled
// [[10,0],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]] => 10 + 3 + 6 + (3+6)x9 = 100

// 10TH FRAME SPARE Add single THROW only
// [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[9,1],[5,0]] = (9x9) 81 + 10 + 5 = 96
// [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[9,1],[10,0]] = (9x9) 81 + 10 + 10 = 101

// 10TH FRAME STRIKE Add single FRAME only
// [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[10,0],[2,2]] = (9x9) 81 + 10 + 4 = 95 
// [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[10,0],[10,0]] =(9x9) 81 + 10 + 10 = 101

describe("bowl", () => {
    test("GAME array of 10 FRAMES containing 2 THROWS", () => {
        expect(bowl([[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]])).toEqual(90);
        expect(bowl([[3,6],[3,6],[3,6],[1,2],[3,6],[3,6],[2,1],[3,6],[3,6],[3,6]])).toEqual(78);
        expect(bowl([[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0]])).toEqual(90);
    } )
    test("1-9TH FRAME SPARE, FIRST THROW < 10, BOTH THROWS = 10, following THROW doubled", () => {
        expect(bowl([[9,1],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]])).toEqual(94);
        expect(bowl([[0,10],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]])).toEqual(94);
    } )
    test("1-9TH FRAME STRIKE, FIRST THROW = 10, following FRAME doubled", () => {
        expect(bowl([[10,0],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]])).toEqual(100);
    } )    
    test("10TH FRAME SPARE add single THROW", () => {
        expect(bowl([[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[9,1],[5,0]])).toEqual(96);
        expect(bowl([[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[9,1],[10,0]])).toEqual(101);
        expect(bowl([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,0]])).toEqual(150);
    } )    
    test("10TH FRAME STRIKE add single FRAME", () => {
        expect(bowl([[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[10,0],[2,2]])).toEqual(95);
        expect(bowl([[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[10,0],[10,0]])).toEqual(101);
        expect(bowl([[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0]])).toEqual(300);        
    } )     
})