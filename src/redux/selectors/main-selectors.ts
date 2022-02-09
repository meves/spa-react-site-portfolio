import { AboutMeType, SkillsType, WorksType } from "../../types/types";
import { AppStateType } from "../redux-store";

export const receiveMessage = (state: AppStateType): string => state.mainPage.message;
export const receiveAbout = (state: AppStateType): AboutMeType => state.mainPage.about;
export const receiveSkills = (state: AppStateType): SkillsType => state.mainPage.skills;
export const receiveWorks = (state: AppStateType): WorksType => state.mainPage.works;
