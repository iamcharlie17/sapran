import React from 'react';

const Button = ({ children, type, size }) => {
    return (
        <button className={`bg-${type} text-white font-bold py-1 px-4 rounded-md
        text-${size == "normal" ? 'lg' : size == "small" ? 'xs' : size == 'large' ? '2xl' : ''} `}>
            {children}
        </button>
    );
};

export default Button;