import { ILearning } from "../interfaces/Lotd";

export const LotdData: ILearning = {
    title: "Learning of the day",
    text: `Immediately after every macrotask, the JavaScript engine executes all
      tasks from microtask queue, prior to running any other macrotasks or
      rendering or anything else.`,
    tags: ["#javascript", "#eventloop"],
}