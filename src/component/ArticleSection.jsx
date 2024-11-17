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
import { useEffect, useState } from "react";
import axios from "axios";
export default function ArticleSection() {
  const categoriesHead = ["Highlight", "Cat", "Inspiration", "General"];
  const [categories, setCategories] = useState(categoriesHead[0]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, [categories]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?${
          categories === `Highlight` ? null : `category=${categories}`
        }`
      );
      console.log(categories);
      setPost(response.data.posts);
    } catch (e) {
      console.log(e);
    }
  };
console.log('korn', post)
  return (
    <>
      <h1 className="font-poppins font-semibold mt-14 text-2xl text-[#43403B] lg:mx-20 my-3 px-5">
        Latest articles
      </h1>
      {/* search box */}
      <div className="bg-[#EFEEEB] items-center flex flex-col lg:flex-row mb-10 lg:mx-20 lg:justify-between lg:items-center lg:rounded-md">
        <div id="popUp" className="hidden lg:flex gap-5 px-5">
          {/* button */}
          {categoriesHead.map((item) => (
            <button
              className={` bg-[muted] text-black p-3 rounded-md ${
                categories === item ? "bg-[#DAD6D1]" : "hover:bg-[#DAD6D1]"
              }`}
              onClick={() => setCategories(item)}
              key={item}
              value={item}
            >
              {item}
            </button>
          ))}
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
              {categoriesHead.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* blog card */}
      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-20">
        {post.map((item) => (
          <BlogCard
            key={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            author={item.author}
            date={new Date(item.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            likes={item.likes}
            content={item.content}
            id={item.id}
            // onClick={}
          />
        ))}
      </div>
    </>
  );
}
