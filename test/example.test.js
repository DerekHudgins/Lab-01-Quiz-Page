// IMPORT MODULES under test here:
import { checkForYes } from '../utills.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('should take in anything that starts with a y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkForYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
