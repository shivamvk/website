import { BASE_URL } from "../helpers/constants";
import { IAPIResponse } from "../interfaces/API";
import { IStory } from "../interfaces/Story";

export const getStories = async (): Promise<IAPIResponse<IStory[]>> => {
    return fetch(`${BASE_URL}/api/stories`).then((res) => res.json());
}