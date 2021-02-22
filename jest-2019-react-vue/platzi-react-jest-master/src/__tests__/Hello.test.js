import React from 'react';
import Hello from '../components/Hello';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

describe('React tests', () => {
    it('testing text from props', () => {
        const data = { title: "test title" };
        const wrapper = mount(
            <Hello title={data.title} />
        );
        expect(wrapper.props()).toEqual(data)
    })
})