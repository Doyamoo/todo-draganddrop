import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "📝今からやること",
    tasks: [
      {
        id: uuidv4(),
        title: "Reactの勉強",
      },
      {
        id: uuidv4(),
        title: "Youtubeで勉強",
      },
      {
        id: uuidv4(),
        title: "散歩",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "📝今からやること2",
    tasks: [
      {
        id: uuidv4(),
        title: "勉強",
      },
      {
        id: uuidv4(),
        title: "勉強2",
      },
      {
        id: uuidv4(),
        title: "散歩2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "料理",
      },
      {
        id: uuidv4(),
        title: "裁縫",
      },
      {
        id: uuidv4(),
        title: "スポーツ",
      },
    ],
  },
];

export default dummyData;
