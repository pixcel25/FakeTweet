import { forwardRef } from "react";
import {
  MessageCircleIcon,
  ReplyIcon,
  HeartIcon,
  BookmarkIcon,
  UploadIcon,
} from "@animateicons/react/lucide";
import type { Tweet as TweetType } from "../types";
import verifiedBadge from "../assets/verified.png";

function formatCount(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

function formatText(text: string) {
  const parts = text.split(/(#\w+|@\w+)/g);
  return parts.map((part, i) => {
    if (part.startsWith("#") || part.startsWith("@")) {
      return (
        <span key={i} className="text-blue-500">
          {part}
        </span>
      );
    }
    return part;
  });
}

function formatTime(time: string) {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const Tweet = forwardRef<HTMLDivElement, { tweet: TweetType }>(({ tweet }, ref) => {
  return (
    <>
      <div className="p-4">
        <div ref={ref} className="p-2">
          <div
            className="font-sans w-full px-4 py-2 max-w-xl m-auto my-10 flex flex-col"
            style={{
              background: tweet.darkMode ? "#15202b" : "#ffffff",
              border: `2px solid ${tweet.darkMode ? "#2d3741" : "#e5e7eb"}`,
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            {/* Header Section */}
            <div id="header" className="flex mb-3 items-center">
              <img
                alt="profile"
                className="mr-2 w-10 h-10 rounded-full object-cover"
                src={tweet.profileImage}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span
                    className="font-bold text-base flex items-center"
                    style={{ color: tweet.darkMode ? "#ffffff" : "#000000", transition: "color 0.3s" }}
                  >
                    {tweet.name}
                    {tweet.verified && (
                      <img
                        alt="verified"
                        src="../src/assets/verified.png"
                        className="w-4 h-4 ml-1 self-center"
                      />
                    )}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{ color: tweet.darkMode ? "#8899a6" : "#6b7280", transition: "color 0.3s" }}
                >
                  @{tweet.userName}
                </p>
              </div>
            </div>

            {/* Tweet Content */}
            <div id="tweet" className="mb-3">
              <section
                className="pb-0.5 text-xl break-words w-full mb-2 text-left"
                style={{ color: tweet.darkMode ? "#ffffff" : "#000000", transition: "color 0.3s" }}
              >
                {formatText(tweet.text)}
              </section>
            </div>

            {/* Footer Metrics */}
            <div id="footer">
              <div
                className="flex flex-wrap items-center gap-1 text-sm font-medium"
                style={{ color: tweet.darkMode ? "#8899a6" : "#6b7280", transition: "color 0.3s" }}
              >
                <span>{formatTime(tweet.time)}</span>
                <span>·</span>
                <span>{formatDate(tweet.date)}</span>
                <span>·</span>
                <span
                  className="font-semibold"
                  style={{ color: tweet.darkMode ? "#ffffff" : "#000000", transition: "color 0.3s" }}
                >
                  {formatCount(tweet.views)}
                </span>
                <span>Views</span>
              </div>

              <hr
                className="my-2"
                style={{ borderColor: tweet.darkMode ? "#2d3741" : "#e5e7eb", transition: "border-color 0.3s" }}
              />

              <div
                className="flex justify-between pt-1"
                style={{ color: tweet.darkMode ? "#8899a6" : "#6b7280", transition: "color 0.3s" }}
              >
                {/* Reply */}
                <div className="flex items-center gap-1">
                  <MessageCircleIcon size={20} />
                  <span
                    className="font-medium text-xs"
                    style={{ color: tweet.darkMode ? "#8899a6" : "#4b5563", transition: "color 0.3s" }}
                  >
                    {formatCount(tweet.comments)}
                  </span>
                </div>

                {/* Retweet */}
                <div className="flex items-center gap-1">
                  <ReplyIcon size={20} />
                  <span
                    className="font-medium text-xs"
                    style={{ color: tweet.darkMode ? "#8899a6" : "#4b5563", transition: "color 0.3s" }}
                  >
                    {formatCount(tweet.retweets)}
                  </span>
                </div>

                {/* Like */}
                <div className="flex items-center gap-1">
                  <HeartIcon size={20} />
                  <span
                    className="font-medium text-xs"
                    style={{ color: tweet.darkMode ? "#8899a6" : "#4b5563", transition: "color 0.3s" }}
                  >
                    {formatCount(tweet.likes)}
                  </span>
                </div>

                {/* Bookmark */}
                <div className="flex items-center gap-1">
                  <BookmarkIcon size={20} />
                  <span
                    className="font-medium text-xs"
                    style={{ color: tweet.darkMode ? "#8899a6" : "#4b5563", transition: "color 0.3s" }}
                  >
                    {formatCount(tweet.bookmarks)}
                  </span>
                </div>

                {/* Share */}
                <div className="flex items-center">
                  <UploadIcon size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
