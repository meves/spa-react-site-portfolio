import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatusClass';
import { updateUserStatus } from '../../../../redux/profile-reducer';

const status = 'Hello, friends!';

describe('ProfileStatusClass component', () => {
    test('status goes from props to state', () => {
       const component = create(<ProfileStatus status={status}/>);
       const instance = component.getInstance();
       expect(instance.state.status).toBe(status); 
    });
    test('if editMode false then span displayed', () => { /// -> ***
        const component = create(<ProfileStatus/>);
        const root = component. root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();        
    });
    test('if editMode false then input not displayed', () => {  /// -> ***
        const component = create(<ProfileStatus/>);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });
    test('if editMode true span will not be displayed', () => {
        const component = create(<ProfileStatus/>);
        const instanse = component.getInstance();
        instanse.setState({ editMode: true});
        const root = component.root;
        expect(() => {
            root.findByType(span);
        }).toThrow();
    });
    test('if editMode true input will be displayed', () => {
        const component = create(<ProfileStatus/>);
        const instance = component.getInstance();
        instance.setState({editMode: true});
        const root = component.root;
        const input = root.findByType('input');
        expect(input).not.toBeNull();
    });
    test('status should be displayed correct in span', () => {
        const component = create(<ProfileStatus status={status}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe(status);        
    });
    test('callback updateUserStatus should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={status} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });     
});
