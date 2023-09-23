import React from 'react';

const ThemedButton = (props) => {
    return (
        <>
            <button className="btn">{props.content}</button>
        </>
    );
};

export default ThemedButton;
