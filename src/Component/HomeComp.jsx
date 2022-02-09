import React from 'react';

const HomeComp = (props) => {
    return (
        <>
            <h2>Child page</h2>
            <button onClick={() => props.changeTitle('Child')}>Change Title</button>
        </>
    );
};

export default HomeComp;
