import React from 'react';

// A context is a value that can be acceeded without getting it from props
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;