import { IPurchaseBlendsState } from "@microsoft-commerce/purchase-blends-component-library";

import { Author } from "../models/author";
import { Course } from "./../models/course";

export interface State extends IPurchaseBlendsState {
    courses: Course[];
    authors: Author[];
    numAjaxCallsInProgress: number;
}