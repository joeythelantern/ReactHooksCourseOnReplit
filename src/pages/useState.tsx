import React, { useState } from 'react';

const UseStatePage: React.FunctionComponent = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h3>
                <strong>Use State Hook</strong>
            </h3>
            <p>You clicked the button: {count} times!</p>
            <button onClick={() => setCount((c) => c + 1)}>Click me!</button>
        </div>
    );
};

export default UseStatePage;
