import React, { useState, useMemo } from 'react';

const UseMemoDemo = () => {
    const [counter, setCounter] = useState(1);
    const result = useMemo( () => {
        return factorial(counter);
    }, [counter]);
   
    const [name, setName] = useState('');

    function factorial(n) {
        let i = 0;
        while (i < 200000) i++;
        console.log('useMemo Called');
        if(n < 0) {
        return -1;
        } 
        if(n === 0) {

            return 1;
        }
        return n * factorial(n-1);
        
    }

    return(
        <>
            <h3>The factorial of {counter} is: {result}</h3>
            <hr />
            <button onClick = {() => setCounter(counter - 1)}>Decrement</button>
            <button onClick = {() => setCounter(counter + 1)}>Increment</button>
            <hr />

            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            <p>My Name is : {name}</p>
        </>
    );

}

export default UseMemoDemo;