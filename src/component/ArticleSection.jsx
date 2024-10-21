import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/data";
import { BlogCard } from "./BlogCard";

export default function ArticleSection() {
  return (
    <>
      <h1 className="font-poppins font-semibold mt-14 text-2xl text-[#43403B] lg:mx-20 my-3 px-5">
        Latest articles
      </h1>
      {/* search box */}
      <div className="bg-[#EFEEEB] items-center flex flex-col lg:flex-row mb-10 lg:mx-20 lg:justify-between lg:items-center lg:rounded-xl">
        <div className="hidden lg:flex ">
          <Button className="hover:bg-[#DAD6D1] bg-[muted] text-black ml-5">
            Button
          </Button>
          <Button className="hover:bg-[#DAD6D1] bg-[muted] text-black">
            Button
          </Button>
          <Button className="hover:bg-[#DAD6D1] bg-[muted] text-black">
            Button
          </Button>
        </div>
        <div className="px-5 relative rounded-md lg:w-1/3 m-3 flex flex-row items-center justify-between w-full ">
          <Input className="" type="Search" placeholder="Search" />
          <Search className=" text-gray-400 absolute right-8" />
        </div>
        <div className="lg:hidden w-full px-5 mb-3">
          <p className="text-gray-500">Category</p>
          <Select>
            <SelectTrigger className=" text-gray-500 ">
              <SelectValue placeholder="Highligh" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Cat</SelectItem>
              <SelectItem value="light">Cat</SelectItem>
              <SelectItem value="light">Cat</SelectItem>
              <SelectItem value="light">Cat</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* blog card */}
      <div className="px-5 mb-20  grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
          likes={blogPosts[0].likes}
          content={blogPosts[0].content}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
          likes={blogPosts[1].likes}
          content={blogPosts[1].content}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
          likes={blogPosts[2].likes}
          content={blogPosts[2].content}
        />
      </div>
    </>
  );
}
