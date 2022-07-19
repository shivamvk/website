import { BASE_URL } from "../helpers/constants";
import { IAPIResponse } from "../interfaces/API";
import { ILearning } from "../interfaces/Lotd";

export const getLotd = async (): Promise<IAPIResponse<ILearning>> => {
    return fetch(`${BASE_URL}/api/learnings`).then((res) => res.json());
}