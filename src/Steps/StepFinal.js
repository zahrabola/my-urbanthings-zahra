import React from 'react';

const StepFinal = ({state}) => {
    return (
        <div>
               <h2>Form Json</h2>
           <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
        </div>
    );
}

export default StepFinal;
