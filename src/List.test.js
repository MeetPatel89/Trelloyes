import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Store from './Store';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(
            <List
            key={'3'} header={'Third list'} cardIds={[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ]}
                
            
            />,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });
});