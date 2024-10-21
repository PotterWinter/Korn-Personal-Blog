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

export default function ArticleSection() {
  return (
    <>
      <h1 className="font-poppins font-semibold mt-14 text-2xl text-[#43403B] lg:mx-20 my-3 px-5">
        Latest articles
      </h1>
      {/* search box */}
      <div className="bg-[#EFEEEB] items-center flex flex-col lg:flex-row mb-20 lg:mx-20 lg:justify-between lg:items-center lg:rounded-xl">
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
    </>
  );
}
