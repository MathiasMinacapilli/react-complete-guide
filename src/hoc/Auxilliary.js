import React from 'react';

/* It's basically an empty wrapper using the property children
that refers to the content between the opening and closing tag of
the Component */
const aux = props => props.children;

/* Also React has it's own Aux Component called Fragment.
It can be imported doing React.Fragment and only wrapping our
elements with the tags <React.Fragment>. Ex.
<React.Fragment>
    <p>This is a test paragraph.</p>
    <p>This is another test paragraph.</p>
</React.Fragment> */

export default aux;