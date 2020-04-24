// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isDead, calculateEnergy } from '../battlefield/battlefield-utils.js';
import { findById } from '../common/utils.js';

const test = QUnit.test;

test('testing findById', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const array = [
        {
            id: 'object1'
        },
        {
            id: 'object2'
        }
    ];

    const id1 = 'object1';
    const id2 = 'object3';

    const object1 = {
        id: 'object1'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const foundId1 = findById(array, id1);
    const foundId2 = findById(array, id2);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(foundId1, object1);
    assert.equal(foundId2, undefined);
});


test('testing isDead', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player1Health = 1;
    const player2Health = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const player1Dead = isDead(player1Health);
    const player2Dead = isDead(player2Health);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(player1Dead, false);
    assert.equal(player2Dead, true);
});

test('testing calculateEnergy', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const action1 = 'action1';
    const array = [
        {
            id: 'action1',
            energyReq: 5
        }
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const action1Energy = calculateEnergy(array, action1);
    const expectedEnergy1 = 5;


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(action1Energy, expectedEnergy1);
});

