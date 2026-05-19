export function InputForm({ tweet, setTweet }) {
  return (
    <div className="m-auto ">
      <input
        className="text-gray-800 w-100 bg-white h-10 ml-50"
        type="text"
        placeholder="enter Name"
        onChange={(event) =>
          setTweet((prev) => ({ ...prev, name: event.target.value }))
        }
        value={tweet.name}
        maxLength={20}
      ></input>

      <input
        className="text-gray-800 w-100 bg-white h-10 ml-50"
        type="text"
        placeholder="enter Username"
        onChange={(event) =>
          setTweet((prev) => ({ ...prev, userName: event.target.value }))
        }
        value={tweet.userName}
        maxLength={15}
      ></input>

      <input
        className="text-gray-800 w-100 bg-white h-30 ml-50"
        type="text"
        placeholder="enter Username"
        onChange={(event) =>
          setTweet((prev) => ({ ...prev, text: event.target.value }))
        }
        value={tweet.text}
        maxLength={600}
      ></input>
    </div>
  );
}
