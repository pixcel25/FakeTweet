export function InputForm({ tweet, setTweet, onDownload }) {
  return (
    <div className="m-auto flex flex-col gap-4 max-w-2xl px-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label className="text-gray-700 text-sm font-semibold mb-1">Name</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="text"
            placeholder="enter name"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, name: event.target.value }))
            }
            value={tweet.name}
            maxLength={20}
          />
        </div>

         <div className="flex flex-col flex-1">
           <label className="text-gray-700 text-sm font-semibold mb-1">Username</label>
           <input
             className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
             type="text"
             placeholder="enter username"
             onChange={(event) =>
               setTweet((prev) => ({ ...prev, userName: event.target.value }))
             }
             value={tweet.userName}
             maxLength={15}
           />
         </div>

         <div className="flex flex-col flex-1">
           <label className="text-gray-700 text-sm font-semibold mb-1">Profile Image</label>
           <input
             className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3 file:mr-3 file:border-0 file:bg-gray-100 file:text-gray-700 file:font-medium file:px-3 file:py-1 file:cursor-pointer"
             type="file"
             accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,image/svg+xml"
             onChange={(event) => {
               const file = event.target.files?.[0];
               if (file) {
                 const reader = new FileReader();
                 reader.onload = (e) => {
                   setTweet((prev) => ({ ...prev, profileImage: e.target?.result }));
                 };
                 reader.readAsDataURL(file);
               }
             }}
           />
         </div>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-semibold mb-1">Text</label>
        <textarea
          className="text-gray-800 w-full bg-white h-30 border border-gray-300 rounded px-3"
          placeholder="enter tweet text"
          onChange={(event) =>
            setTweet((prev) => ({ ...prev, text: event.target.value }))
          }
          value={tweet.text}
          maxLength={280}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label className="text-gray-700 text-sm font-semibold mb-1">Time</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="time"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, time: event.target.value }))
            }
            value={tweet.time}
          />
        </div>

        <div className="flex flex-col flex-1">
          <label className="text-gray-700 text-sm font-semibold mb-1">Date</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="date"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, date: event.target.value }))
            }
            value={tweet.date}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
        <input
          type="checkbox"
          checked={tweet.verified}
          onChange={(event) =>
            setTweet((prev) => ({ ...prev, verified: event.target.checked }))
          }
          className="w-4 h-4"
        />
        Verified
      </label>

      {/* Night / Day Toggle */}
      <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
        <input
          type="checkbox"
          checked={tweet.darkMode}
          onChange={(event) =>
            setTweet((prev) => ({ ...prev, darkMode: event.target.checked }))
          }
          className="w-4 h-4"
        />
        Night Mode
      </label>

      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <div className="flex flex-col flex-1 min-w-[100px]">
          <label className="text-gray-700 text-sm font-semibold mb-1">Comments</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="number"
            placeholder="enter comment count"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, comments: Number(event.target.value) }))
            }
            value={tweet.comments}
          />
        </div>

        <div className="flex flex-col flex-1 min-w-[100px]">
          <label className="text-gray-700 text-sm font-semibold mb-1">Retweets</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="number"
            placeholder="enter retweet count"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, retweets: Number(event.target.value) }))
            }
            value={tweet.retweets}
          />
        </div>

        <div className="flex flex-col flex-1 min-w-[100px]">
          <label className="text-gray-700 text-sm font-semibold mb-1">Likes</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="number"
            placeholder="enter like count"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, likes: Number(event.target.value) }))
            }
            value={tweet.likes}
          />
        </div>

        <div className="flex flex-col flex-1 min-w-[100px]">
          <label className="text-gray-700 text-sm font-semibold mb-1">Views</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="number"
            placeholder="enter view count"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, views: Number(event.target.value) }))
            }
            value={tweet.views}
          />
        </div>

        <div className="flex flex-col flex-1 min-w-[100px]">
          <label className="text-gray-700 text-sm font-semibold mb-1">Bookmarks</label>
          <input
            className="text-gray-800 w-full bg-white h-10 border border-gray-300 rounded px-3"
            type="number"
            placeholder="enter bookmark count"
            onChange={(event) =>
              setTweet((prev) => ({ ...prev, bookmarks: Number(event.target.value) }))
            }
            value={tweet.bookmarks}
          />
        </div>
      </div>

      <button
        onClick={() => onDownload()}
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 cursor-pointer"
      >
        Download Tweet
      </button>
    </div>
  );
}
