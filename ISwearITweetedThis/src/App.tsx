import "./App.css";
import { InputForm } from "./components/InputForm";
import { Tweet } from "./components/Tweet";
import { useState } from "react";
function App() {
  type Tweet = {
    name: string;
    userName: string;
    time: string;
    text: string;
    comments: number;
    retweets: number;
    likes: number;
    views: number;
  };

  const [tweet, setTweet] = useState<Tweet>({
    name: "rylan",
    userName: "Pixcel25",
    time: "8h",
    text: "Just pushed a feature at 2am, tests are passing, coffee is cold, and I have absolutely no idea what I changed. Shipping to prod anyway.We move. 🚀 #buildinpublic #devlife",
    comments: 5,
    retweets: 112,
    likes: 112,
    views: 112,
  });
  return (
    <>
      <Tweet tweet={tweet} />
      <InputForm tweet={tweet} setTweet={setTweet} />
    </>
  );
}

export default App;
