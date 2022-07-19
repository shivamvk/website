import type { NextApiRequest, NextApiResponse } from 'next';
import { IAPIResponse } from '../../../interfaces/API';
import { IStory } from '../../../interfaces/Story';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAPIResponse<IStory[]>>
) {
  res.status(200).json({
    statusMessage: "Successfully fetched",
    status: 0,
    data: [{
      time: "Oct 27, 2021",
      readingTime: "4 min read",
      title: `Let’s Deduce the Reduce Method in JavaScript`,
      subheading: "I’ve been learning JavaScript for two years now and got familiar with almost all of its tricks pretty soon — the map function, filter, sort, and others. Well, not lying, I got stuck at points but some decent explanations...",
      image: "deducethereducemethod_d8tqco.png",
      id: "lets-deduce-the-reduce-method-in-javascript-bdc828f368a2",
      tags: ["#javascript"],
      link: "https://javascript.plainenglish.io/lets-deduce-the-reduce-method-in-javascript-bdc828f368a2"
    },
    {
      time: "Oct 25, 2021",
      readingTime: "5 min read",
      title: `The JavaScript Nobody Told You About`,
      subheading: "I’ve used JVM languages like Java and Kotlin for most of my college life. Ironically, my first job right after college was as a ReactJS developer. The language that I feared and ran away from in the past 4 years was now in...",
      image: "javascriptnobodytoldyouabout_scs0ku.png",
      id: "the-javascript-nobody-told-you-about-ac1bf4f56eb9",
      tags: ["#javascript"],
      link: "https://javascript.plainenglish.io/the-javascript-nobody-told-you-about-ac1bf4f56eb9"
    },
    {
      time: "May 16, 2021",
      readingTime: "4 min read",
      title: `TypeScript — JavaScript with No Surprises`,
      subheading: "Yes, TypeScript is like JavaScript but with no surprises. That’s how I describe the open-source programming language introduced by Microsoft in 2012. Last year, Github marked it among the top 10 most...",
      image: "1_e1kRPupIPsi6F2F84AttNw_fgyt3y.png",
      id: "typescript-javascript-with-no-surprises-bbc4cf5c23a6",
      tags: ["#typescript"],
      link: "https://javascript.plainenglish.io/typescript-javascript-with-no-surprises-bbc4cf5c23a6"
    },
    {
      time: "Feb 6, 2021",
      readingTime: "5 min read",
      title: `3 Brain Exercising Habits for Writing Better Software`,
      subheading: "Just like physical exercises are essential for our body, it's equally important to exercise our brain, which most of us, due to our busy...",
      image: "1_Zv7PqdvRLTL9CU6YpAGDXQ_pxzut8.jpg",
      id: "three-brain-exercising-habits-for-writing-better-software-79ce6b3dccdc",
      tags: ["#programming"],
      link: "https://javascript.plainenglish.io/three-brain-exercising-habits-for-writing-better-software-79ce6b3dccdc"
    },
    {
      time: "Jan 30, 2021",
      readingTime: "5 min read",
      title: `Journey of a console.log in React Native`,
      subheading: "A brief introduction to React Native’s new architecture. — I’ve been developing user interfaces for a long time now. I learned many new things during this phase, switched from JavaScript to TypeScript for a while,...",
      image: "1_U0WSAruR02OOZFWXJ03Yeg_pg2u7n.png",
      id: "journey-of-a-console-log-in-react-native-6148b4627563",
      tags: ["#javasript"],
      link: "https://javascript.plainenglish.io/journey-of-a-console-log-in-react-native-6148b4627563"
    },
    {
      time: "Apr 26, 2021",
      readingTime: "5 min read",
      title: `Cryptocurrency for a 10-year-old`,
      subheading: "Complex terms like crypto or bitcoin are some of the highest-searched words on google these days. I heard of these the very first time back in my first year of engineering. Here I’ve simplified my 5 years of...",
      image: "1_3us2iiKwcqjEirRieoBL8g_ejt4gi.jpg",
      id: "cryptocurrency-for-a-10-year-old-e0f28d2ee08",
      tags: ["#cryptocurrency"],
      link: "https://medium.com/geekculture/cryptocurrency-for-a-10-year-old-e0f28d2ee08"
    },
    {
      time: "Nov 5, 2021",
      readingTime: "4 min read",
      title: `Let’s build our own Redux`,
      subheading: "I coded in Java/Kotlin for most of my college life, and hence, followed the MVC pattern mostly for projects. Ironically, my first job right after college was as a ReactJS developer. Now that I had to shift my paradigm from...",
      image: "1_Y8d2YnHhgwEBNr8a6Krvkg_nsgdvz.png",
      id: "lets-build-our-own-redux-9384b283529c",
      tags: ["#javasript"],
      link: "https://javascript.plainenglish.io/lets-build-our-own-redux-9384b283529c"
    },]
  });
}
