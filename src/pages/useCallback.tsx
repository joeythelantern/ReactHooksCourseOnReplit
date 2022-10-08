import React, { useCallback, useState } from 'react';

const UseCallbackPage: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);

    const helloWorldCallback = useCallback((number: number) => {
        alert('Number was ' + number);
    }, []);

    return (
        <div>
            <h3>
                <strong>Use Callback Hook</strong>
            </h3>
            <p>You clicked the button: {count} times!</p>
            <button onClick={() => setCount((c) => c + 1)}>Add to Count</button>
            <button onClick={() => helloWorldCallback(count)}>Callback!</button>
        </div>
    );
};

export default UseCallbackPage;
