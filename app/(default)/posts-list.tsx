"use client";
{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/job-board-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

import getAllPosts from "@/lib/getAllPosts";
import PostItem from "./post-item";
import Newsletter from "@/components/newsletter";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  sticky: boolean;
  title: string;
  name: string;
  image: string;
  tag1: string;
  tag2: string;
  date: string;
}

export default function PostsList() {
  const [search, setSearch] = useState("");
  const [ppf, setPpf] = useState<any>({});

  function filterUsers(arr = []) {
    const newArr = [...arr];

    const filteredResult = newArr.filter((item: any) =>
      item?.fullName?.toLowerCase().includes(search.toLowerCase())
    );

    return filteredResult;
  }

  useEffect(() => {
    (async () => setPpf(await getAllPosts()))();
  }, []);
  console.log({ search });
  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter ">
        All Applicants {ppf?.users?.length}
      </h2>
      {/* List container */}
      <div className="flex  items-center space-x-2 space-y-2 flex-wrap">
        {ppf?.trajectoryData?.map((item: any) => (
          <div
            className="border rounded-md shadow-md p-4 "
            key={item.trajectoryId}
          >
            <h1 className="font-bold">
              {item.trajectory}: {item?._count?.id}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full py-4">
        <input
          className="form-input w-full p-4 rounded-md"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          type="search"
        />
      </div>
      <div className="flex flex-col">
        {filterUsers(ppf?.users).map((user: any) => {
          return <PostItem key={user.id} {...user} />;
        })}

        {/* Newletter CTA */}
        {/* <div className="py-8 border-b border-gray-200 -order-1">
          <Newsletter />
        </div> */}
      </div>
    </div>
  );
}
