import { AboutMeType, SkillsType, WorksType, ItemSkillType } from '../types/types';
import { ActionsTypes } from './redux-store';

const intialState = {
    message: 'Main',
    about: {
        heading: 'About me',
        imageUrl: '/img/avatar.jpg',
        text: 'About me text'
    } as AboutMeType,
    skills: {
        heading: 'My skills',
        items: [
            {id: 1, item: 'HTML/CSS'},
            {id: 2, item: 'JavaScript'},
            {id: 3, item: 'TypeScript'},
            {id: 4, item: 'React/Redux'},
            {id: 5, item: 'Node.js'}
        ] as Array<ItemSkillType>
    } as SkillsType,
    works: {
        heading: 'My works',
        preview: 'Preview',
        desc: 'Description',
        ref: 'More...'
    } as WorksType
};
type InitialStateType = typeof intialState;

const mainReducer = (state=intialState, action: ActionsTypes<any>): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainReducer;
