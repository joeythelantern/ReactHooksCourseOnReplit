import React, { useState } from 'react';

const UseEffectPage: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>
                <strong>Use Effect Hook</strong>
            </h3>
            <p>You clicked the button: {count} times!</p>
            <button onClick={() => setCount((c) => c + 1)}>Click me!</button>
        </div>
    );
};

export default UseEffectPage;
