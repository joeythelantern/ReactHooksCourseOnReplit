import React, { useState } from 'react';

const UseRefPage: React.FunctionComponent = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                <strong>Use Ref Example 1: Accessing DOM Elements</strong>
            </h3>
            <input />
            <button>Focus Input</button>
        </div>
    );
};

const ExampleTwo: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>
                <strong>Use Ref Example 2: Avoiding Re-Renders</strong>
            </h3>
            <p>You clicked the button: {count} times!</p>
            <button onClick={() => setCount((c) => c + 1)}>Click me!</button>
            <p>You clicked the cool button: times!</p>
            <button
            >
                Click me!
            </button>
        </div>
    );
};

export default UseRefPage;
