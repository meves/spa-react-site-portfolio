import { actions, follow, unfollow } from "./users-reducer";
import { followAPI } from "../api/follow-api";
import { ResponseDataType } from "../api/types";
import { ResultCodes } from "../enums/responseCodes";

jest.mock("../api/follow-api");
const followAPIMock = followAPI as jest.Mocked<typeof followAPI>;

const result: ResponseDataType = {
    data: {},
    messages: [],
    resultCode: ResultCodes.Success
}

const dispatchMock = jest.fn();
const getStateMock = jest.fn();
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    followAPIMock.followUser.mockClear();
    followAPIMock.unfollowUser.mockClear();
});

describe("follow unfollow thunk", () => {
    test("follow thunk", async () => {        
        const userId: number = 1; 
        followAPIMock.followUser.mockReturnValue(Promise.resolve(result));
        const thunkAction = follow(userId); 
        await thunkAction(dispatchMock, getStateMock, {});
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, userId));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followUser(userId));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, userId));
    });
    test("unfollow thunk", async () => {        
        const userId: number = 1; 
        followAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result));
        const thunkAction = unfollow(userId); 
        await thunkAction(dispatchMock, getStateMock, {});
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, userId));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowUser(userId));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, userId));
    });
});
