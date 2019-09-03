import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            { /* Doing {...props we send the props to the WrappedComponent */ }
            <WrappedComponent {...props} /> 
        </div>
    );
}

export default withClass;