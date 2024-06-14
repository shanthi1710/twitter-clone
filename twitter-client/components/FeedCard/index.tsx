import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet,FaRegHeart  } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import Image from "next/image";
const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-700 border-1 border-r-0 border-l-0 border-b-0 p-4 hover:bg-gray-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/102481278?v=4"
            alt="user Profile"
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5 className="font-semibold">Shanthinath Shedbale</h5>
          <p>
            If you're feeling uncertain about crypto trading, why not test the
            waters with our Demo Trading product?
          </p>
          <div className="flex gap-20 p-4 text-xl">
            <div className="hover:bg-blue-400 rounded-full h-fit w-fit p-3 transition-all">
              <BiMessageRounded />
            </div>
            <div className="hover:bg-green-400 rounded-full h-fit w-fit p-3 transition-all">
              <FaRetweet />
            </div>
            <div className="hover:bg-pink-400 rounded-full h-fit w-fit p-3 transition-all">
              <FaRegHeart />
            </div>
            <div className="hover:bg-blue-400 rounded-full h-fit w-fit p-3 transition-all">
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
