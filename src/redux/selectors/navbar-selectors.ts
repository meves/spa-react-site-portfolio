import { NavbarTitleType } from "../../types/types";
import { AppStateType } from "../redux-store";

export const receiveTitles = (state: AppStateType): Array<NavbarTitleType> => state.navbarPage.titles;
