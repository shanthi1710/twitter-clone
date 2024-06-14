import React, { useCallback } from "react";
import { BsTwitter } from "react-icons/bs";
import { MdHomeFilled, MdWorkspacePremium } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBookmarkSharp, IoSearchOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
//const inter = Inter({ subsets: ["latin"], weight: "400" });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <MdHomeFilled /> },
  { title: "Exlore", icon: <IoSearchOutline /> },
  { title: "Notification", icon: <GrNotification /> },
  { title: "Messages", icon: <BiMessageSquareDetail /> },
  { title: "Bookmarks", icon: <IoBookmarkSharp /> },
  { title: "Communities", icon: <HiMiniUserGroup /> },
  { title: "Premium",  icon: <MdWorkspacePremium /> },
  { title: "Profile", icon: <CgProfile /> },
  { title: "More", icon: <CiCircleMore /> },
];

export default function Home() {
   const handleLoginWithGoogle = useCallback((cred:CredentialResponse)=>{},[])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        <div className="col-span-3  pt-3 ">
          <div className=" text-3xl h-fit w-fit hover:bg-gray-900 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitter color="white" />
          </div>
          <div className="text-2xl font-semibold pr-5">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start  items-center gap-3 h-fit w-fit hover:bg-gray-900 rounded-full p-3 cursor-pointer transition-all"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="px-2">
              <button className="mt-5 text-lg w-full p-2 bg-[#1d9bf0] rounded-full font-semibold">
                POST
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-gray-700 border-1 h-screen overflow-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 mt-4 ml-4">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="font-semibold  text-1xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)} />
          </div>
        </div>
      </div>
    </div>
  );
}
