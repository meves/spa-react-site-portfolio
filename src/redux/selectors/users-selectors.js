import { createSelector } from "reselect";

const receiveUsersSelector = state => state.usersPage.users;
export const receiveUsers = createSelector(receiveUsersSelector, users => users);
export const receiveCurrentPage = state => state.usersPage.currentPage;
export const receiveCount = state => state.usersPage.count;
export const receiveTotalCount = state => state.usersPage.totalCount;
export const receiveIsFetching = state => state.usersPage.isFetching;
export const receiveFollowingProgress = state => state.usersPage.followingProgress;
