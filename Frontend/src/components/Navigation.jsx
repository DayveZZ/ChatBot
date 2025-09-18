import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdTask } from "react-icons/md";
import "../App.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation border-r border-black/40 w-52 pr-4 h-full">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-semibold">ChatBOT</h1>
          <button className="cursor-pointer">DARK</button>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <MdTask className="text-xl w-1/5 cursor-pointer" />
            <button className="w-full text-start p-2">New chat</button>
          </div>

          <div className="flex items-center">
            <IoSearchOutline className="text-xl w-1/5 cursor-pointer" />
            <input
              type="text"
              className="w-full outline-0 border-0 bg-black/5 rounded-2xl p-2"
              placeholder="Search chats"
            />
          </div>
        </div>

        <ul className="userChats py-8">
          <h1 className="p-2 text-sm text-black/50">Chats</h1>
          <li>
            <p>Hello, My Chats 1</p>
            <button>•••</button>
          </li>
          <li>
            <p>Hello, My Chats 2</p>
            <button>•••</button>
          </li>
          <li>
            <p>Hello, My Chats 3</p>
            <button>•••</button>
          </li>
          <li>
            <p>Hello, My Chats 4</p>
            <button>•••</button>
          </li>
          <li>
            <p>
              Hello, My Chats 5. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum ab voluptatibus commodi quam assumenda
              esse sapiente, ex, velit, doloribus explicabo saepe earum iure
              fugiat nulla distinctio? Quos quibusdam sed soluta? Cum incidunt
              quidem inventore dignissimos, asperiores quia dicta iste
              voluptatem?
            </p>
            <button>•••</button>
          </li>
          <li>
            <p>Hello, My Chats 6</p>
            <button>•••</button>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quidem?
            </p>
            <button>•••</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
