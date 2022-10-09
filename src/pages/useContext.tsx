import React, { useState } from 'react';

const UseContextPage: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    return (
        <div>
            <h3>
                <strong>Use Context Hook</strong>
            </h3>
            <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
            <br />
            Input: <input type="text" onChange={(event) => setInput(event.target.value)} />
                <hr style={{ color: 'white', width: '100%' }} />
                <ExampleOne />
                <hr style={{ color: 'white', width: '100%' }} />
                <ExampleTwo />
        </div>
    );
};

const ExampleOne: React.FunctionComponent = () => {
    return (
        <div>
            <h3>
                <strong>Example 1</strong>
            </h3>
        </div>
    );
};

const ExampleTwo: React.FunctionComponent = () => {
    return (
        <div>
            <h3>
                <strong>Example 2</strong>
            </h3>
        </div>
    );
};

export default UseContextPage;
