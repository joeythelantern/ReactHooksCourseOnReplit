import React, { useEffect } from 'react';

const UseLayoutEffectPage: React.FunctionComponent = () => {
    useEffect(() => {
        console.log('The component has been re-rendered');
    });

    return (
        <div>
            <h3>
                <strong>Use Layout Effect Hook</strong>
            </h3>
        </div>
    );
};

export default UseLayoutEffectPage;
