import "./App.css";
import { InputForm } from "./components/InputForm";
import { Tweet } from "./components/Tweet";
import { useState, useRef } from "react";
import { toPng } from "html-to-image";
function App() {
   type Tweet = {
     name: string;
     userName: string;
     time: string;
     date: string;
     text: string;
     comments: number;
     retweets: number;
     likes: number;
     views: number;
     bookmarks: number;
     verified: boolean;
     profileImage: string;
     darkMode: boolean;
   };

   const now = new Date();
   const pad = (n: number) => String(n).padStart(2, "0");
   const initialTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
   const initialDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

   const [tweet, setTweet] = useState<Tweet>({
     name: "rylan",
     userName: "Pixcel25",
     time: initialTime,
     date: initialDate,
     text: "Just pushed a feature at 2am, tests are passing, coffee is cold, and I have absolutely no idea what I changed. Shipping to prod anyway.We move. 🚀 #buildinpublic #devlife",
     comments: 5,
     retweets: 112,
     likes: 112,
     views: 112,
     bookmarks: 42,
     verified: true,
     profileImage: "../src/assets/profile.jpg",
     darkMode: false,
   });

  const tweetRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (!tweetRef.current) return;
    const dataUrl = await toPng(tweetRef.current, { quality: 1, pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = "tweet.png";
    link.href = dataUrl;
    link.click();
  }

  return (
    <>
      <Tweet ref={tweetRef} tweet={tweet} />
      <InputForm tweet={tweet} setTweet={setTweet} onDownload={handleDownload} />
    </>
  );
}

export default App;
