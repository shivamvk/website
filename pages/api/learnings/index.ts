import type { NextApiRequest, NextApiResponse } from 'next';
import { IAPIResponse } from '../../../interfaces/API';
import { ILearning } from '../../../interfaces/Lotd';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAPIResponse<ILearning>>
) {
  res.status(200).json({
    status: 0,
    statusMessage: "Successfully fetched",
    data: {
      title: "Learning of the day",
      text: `Immediately after every macrotask, the JavaScript engine executes all
        tasks from microtask queue, prior to running any other macrotasks or
        rendering or anything else.`,
      tags: ["#javascript", "#eventloop"],
    }
  });
}
