import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "ðä»ãããããã¨",
    tasks: [
      {
        id: uuidv4(),
        title: "Reactã®åå¼·",
      },
      {
        id: uuidv4(),
        title: "Youtubeã§åå¼·",
      },
      {
        id: uuidv4(),
        title: "æ£æ­©",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "ðä»ãããããã¨2",
    tasks: [
      {
        id: uuidv4(),
        title: "åå¼·",
      },
      {
        id: uuidv4(),
        title: "åå¼·2",
      },
      {
        id: uuidv4(),
        title: "æ£æ­©2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "æç",
      },
      {
        id: uuidv4(),
        title: "è£ç¸«",
      },
      {
        id: uuidv4(),
        title: "ã¹ãã¼ã",
      },
    ],
  },
];

export default dummyData;
