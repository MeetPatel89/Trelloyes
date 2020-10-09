import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'react-dom/test-utils';
import Card from './Card';
import renderer from 'react-test-renderer';

describe ('Card component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    test('renders the UI as expected', () => {
        const rendered = renderer 
            .create(<Card title="Third card" content="lorem ipsum"/>)
            .toJSON();
        expect(rendered).toMatchSnapshot();
    });
});