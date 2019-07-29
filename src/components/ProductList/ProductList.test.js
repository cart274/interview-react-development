import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<ProductList />', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ProductList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Render article list', () => {
        let products = [
            { id : 1, sku : '1', name : 'product1', price : 10},
            { id : 2, sku : '2', name : 'product2', price : 20},
            { id : 3, sku : '3', name : 'product3', price : 30}
        ]
        const wrapper = shallow(<ProductList products ={products} />);
        expect(wrapper.find('article')).to.have.lengthOf(products.length);
    });
})