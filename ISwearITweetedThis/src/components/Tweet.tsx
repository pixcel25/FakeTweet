export function Tweet() {
  return (
    <>
      <div className="bg-white border-3 border-gray-200 font-sans w-full px-4 py-2 max-w-150 m-auto my-10 flex ">
        <div className="w-40 mr-4">
          {" "}
          <img
            alt="image"
            className="mr-2 w-13 h-13 rounded-4xl"
            src="../src/assets/profile.jpg"
          ></img>
        </div>
        <div className="mb-0">
          <div className="flex-1 flex mb-1">
            <p className="font-bold text-lg mr-1">Rylan</p>
            <p className="text-gray-500 text-lg">@pixcel25</p>
            <p className="text-gray-500 text-lg">&nbsp; · &nbsp; 8h</p>
          </div>
          <section className="pb-0.5 text-xl">
            Just pushed a feature at 2am, tests are passing, coffee is cold, and
            I have absolutely no idea what I changed. Shipping to prod anyway.
            We move. 🚀 #buildinpublic #devlife
          </section>

          <div className="text-gray-500 grid mt-0 grid-cols-5">
            <div className="flex">
              <img
                alt="Retweets"
                src="../src/assets/speech-bubble.png"
                className="w-5 h-5 mx-1"
              ></img>
              <span className="font-medium text-black">112 </span>
            </div>
            <div className="flex">
              <img
                alt="Retweets"
                src="../src/assets/repeat.png"
                className="w-5 h-5 mx-1"
              ></img>
              <span className="font-medium text-black">112 </span>
            </div>
            <div className="flex">
              <img
                alt="Retweets"
                src="../src/assets/heart.png"
                className="w-5 h-5 mx-1"
              ></img>
              <span className="font-medium text-black">112 </span>
            </div>
            <div className="flex">
              <img
                alt="Retweets"
                src="../src/assets/bar-graph.png"
                className="w-5 h-5 mx-1"
              ></img>
              <span className="font-medium text-black">112 </span>
            </div>
            <div className="flex justify-between max-w-10">
              <img
                alt="Retweets"
                src="../src/assets/bookmark-white.png"
                className="w-5 h-5 mx-1"
              ></img>
              <img
                alt="Retweets"
                src="../src/assets/up-loading.png"
                className="w-5 h-5 mx-1"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <img src="../src/assets/tweet.png" className="my-10 m-auto"></img>
    </>
  );
}
