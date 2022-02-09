import React, { useState } from 'react';


let userInput = [];

function MainPage() {

    const [typedNumbers, setTypedNumbers] = useState('Please enter numbers here');

    const addToArray = () => {
        userInput.push(document.getElementById('textarea').value);
        console.log(userInput);


    };

    const deleteArrayValues = () => {
        userInput = [];
        console.log(userInput);
    }


    return (
        <section>
            <p id=''>Hello Elenbaas Steel</p>

            <textarea id='textarea'>
                {typedNumbers}
            </textarea>

            <br></br>

            <textarea id='textarea'>
                {typedNumbers}
            </textarea>

            <br></br>

            <button onClick={addToArray}>
                GO
            </button>

            <button onClick={deleteArrayValues}>
                UNDO
            </button>

        </section >

    );
}


export default MainPage;