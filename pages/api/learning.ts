import type { NextApiRequest, NextApiResponse } from 'next'

export interface ILearning {
    title: string;
    text: string;
    tags: string[];
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILearning>
) {
  res.status(200).json({
    title: "Learning of the day",
    text: `Immediately after every macrotask, the JavaScript engine executes all
      tasks from microtask queue, prior to running any other macrotasks or
      rendering or anything else.`,
    tags: ["javascript", "eventloop"],
  });
}
