import { Linkedin, Github, Mail } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center lg:flex-row lg:justify-between bg-[#EFEEEB] gap-2  font-poppins sm:space-y-0 space-y-0 px-20 h-40 lg:h-24 ">
        <div className="flex flex-row items-center gap-8 mb-min-6 ">
          <p className=" font-poppins font-medium">Get in touch</p>
          <div className="flex space-x-4  ">
            <Linkedin size={24} />
            <Github size={24} />
            <Mail size={24} />
          </div>
        </div>
        <h1 className=" underline font-medium">Home Page</h1>
      </footer>
    </>
  );
}
