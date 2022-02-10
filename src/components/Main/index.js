import React, { useState } from 'react';


let userInput = [];

function MainPage() {

    const [typedNumbers, setTypedNumbers] = useState('Please enter numbers here');
    const [howManyYears, setHowManyYears] = useState('How many years of values are you using?')

    let numberOfYears = 0;

    const changeYears = () => {
        numberOfYears = document.getElementById('textarea1').value;
        console.log(numberOfYears);
    }

    const deleteYears = () => {
        numberOfYears = 0;
        console.log(numberOfYears);
    }

    const addToArray = () => {
        userInput.push(document.getElementById('textarea2').value);
        console.log(userInput);
    };

    const deleteArrayValues = () => {
        userInput = [];
        console.log(userInput);
    }


    return (
        <section>
            <p id=''>Hello Elenbaas Steel</p>

            <textarea id='textarea1'>
                {howManyYears}
            </textarea>

            <br></br>

            <button onClick={changeYears}>
                Add
            </button>

            <button onClick={deleteYears}>
                Undo
            </button>

            <br></br>
            <br></br>

            <textarea id='textarea2'>
                {typedNumbers}
            </textarea>

            <br></br>

            <button onClick={addToArray}>
                Run
            </button>

            <button onClick={deleteArrayValues}>
                Undo
            </button>

        </section >

    );
}


export default MainPage;