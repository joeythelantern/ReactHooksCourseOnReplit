import React from 'react';

const UseStatePage: React.FunctionComponent = () => {
    let count = 0

    return (
        <div>
            <h3>
                <strong>Use State Hook</strong>
            </h3>
            <p>You clicked the button: {count} times!</p>
            <button onClick={() => { count = count + 1; console.log(count) }}>Click me!</button>
        </div>
    );
};

export default UseStatePage;
