import React from "react";

const Chat = () => {
  return (
    <>
      <div className="chat pl-4 w-full flex flex-col">
        <div className="flex-1 overflow-y-auto"></div>

        <div className="rounded-xl bg-black/5 p-2">
          <textarea
            rows="1"
            className="w-full outline-0 resize-none overflow-y-auto rounded-xl"
            placeholder="Ask anything"
            onInput={(e) => {
              const maxHeight = 320;
              e.target.style.height =
                Math.min(e.target.scrollHeight, maxHeight) + "px";
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Chat;
