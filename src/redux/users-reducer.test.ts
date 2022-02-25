import { InitialStateType, usersReducer, actions } from './users-reducer';


let state: InitialStateType;
beforeEach(() => {
        state = {
            users: [
            {id: 0, name: "Sergey", status: "my status", followed: false, photos: {small: null, large: null}},
            {id: 1, name: "Leo", status: "my status", followed: false, photos: {small: null, large: null}},
            {id: 2, name: "Kevin", status: "my status", followed: true, photos: {small: null, large: null}},
            {id: 3, name: "Liza", status: "my status", followed: true, photos: {small: null, large: null}}
        ],
        currentPage: 1,
        count: 5,
        totalCount: 0,
        isFetching: true,
        followingProgress: [] as Array<number>
    };}
)

describe("usersReducer", () => {
    test("case followUser", () => {
        const id: number = 0;
        const newState = usersReducer(state, actions.followUser(id));
        expect(newState.users[0].followed).toBeTruthy();
        expect(newState.users[1].followed).toBeFalsy();

    });
    test("case unfollowUser", () => {
        const id: number = 2;
        const newState = usersReducer(state, actions.unfollowUser(id));
        expect(newState.users[2].followed).toBeFalsy();
        expect(newState.users[3].followed).toBeTruthy();
    });
});
describe("action creators", () => {
    test("followUser", () => {
        const id: number = 0;
        const requiredAction = {
            type: 'site-portfolio/medvedkinsergey.ru/users/FOLLOW_USER', id
        } as const;
        const newAction = actions.followUser(id);
        expect(newAction).toEqual(requiredAction);
    });
    test("unfollowUser", () => {
        const id: number = 0;
        const requiredAction = {
            type: 'site-portfolio/medvedkinsergey.ru/users/UNFOLLOW_USER', id
        } as const;
        const newAction = actions.unfollowUser(id);
        expect(newAction).toEqual(requiredAction);
    });
});