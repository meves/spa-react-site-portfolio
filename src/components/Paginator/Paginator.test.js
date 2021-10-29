import React from "react";
//import { act } from "react-dom/test-utils";
import { create, act } from 'react-test-renderer';
import Paginator from "./Paginator";

describe('Paginator component', () => {
   test('renders correctly', () => {
       const component = create(<Paginator totalCount={1000} count={5} currentPage={1}/>);
       const tree = component.toJSON();
       expect(tree).toMatchSnapshot();
   });
});
