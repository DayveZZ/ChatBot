import React from "react";

const Chat = () => {
  return (
    <>
      <div className="chat pl-4 w-full flex flex-col">
        <div className="flex-1 overflow-y-auto"></div>

        <div className="rounded-xl">
          <textarea
            rows="1"
            className="bg-black/5 w-full p-2 rounded-xl outline-0 resize-none overflow-y-auto"
            placeholder="Ask anything"
            onInput={(e) => {
              e.target.style.height = "auto";

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
