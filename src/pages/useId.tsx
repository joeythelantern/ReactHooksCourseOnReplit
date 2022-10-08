import React, { useId, useState } from 'react';

const UseIdPage: React.FunctionComponent = () => {
    const [, setCount] = useState<number>(0);
    const id = useId();

    return (
        <div>
            <h3>
                <strong>Use ID Hook</strong>
            </h3>
            <p>Your ID is: {id}</p>
            <button onClick={() => setCount((c) => c + 1)}>Re-render!</button>
        </div>
    );
};

export default UseIdPage;
