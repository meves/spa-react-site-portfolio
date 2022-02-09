import { createSelector } from "reselect";
import { UserType } from "../../types/types";
import { AppStateType } from "../redux-store";

const receiveUsersSelector = (state: AppStateType): Array<UserType> => state.usersPage.users;
export const receiveUsers = createSelector(receiveUsersSelector, (users: Array<UserType>): Array<UserType> => users);

export const receiveCurrentPage = (state: AppStateType): number => state.usersPage.currentPage;
export const receiveCount = (state: AppStateType): number => state.usersPage.count;
export const receiveTotalCount = (state: AppStateType): number => state.usersPage.totalCount;
export const receiveIsFetching = (state: AppStateType): boolean => state.usersPage.isFetching;
export const receiveFollowingProgress = (state: AppStateType): Array<number> => state.usersPage.followingProgress;
