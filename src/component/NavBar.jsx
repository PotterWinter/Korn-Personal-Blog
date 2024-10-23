import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
  // const [onClicking, setOnClicking] = useState();

  return (
    <nav className="flex flex-row items-center justify-between w-screen h-[48px] p-5 border-[#DAD6D1] border sticky top-0 bg-white z-50">
      <a href="/" className="">
        <h1 className="hidden lg:flex font-semibold font-poppins text-xl">
          Natthanat<span className=" text-[#12B379]">.</span>
        </h1>
        <h1 className="lg:hidden font-semibold font-poppins text-xl">
          NT<span className=" text-[#12B379]">.</span>
        </h1>
      </a>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0.75C0 0.551088 0.0790175 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H17.25C17.4489 0 17.6397 0.0790175 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75C18 0.948912 17.921 1.13968 17.7803 1.28033C17.6397 1.42098 17.4489 1.5 17.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790175 1.13968 0 0.948912 0 0.75ZM0 6C0 5.80109 0.0790175 5.61032 0.21967 5.46967C0.360322 5.32902 0.551088 5.25 0.75 5.25H17.25C17.4489 5.25 17.6397 5.32902 17.7803 5.46967C17.921 5.61032 18 5.80109 18 6C18 6.19891 17.921 6.38968 17.7803 6.53033C17.6397 6.67098 17.4489 6.75 17.25 6.75H0.75C0.551088 6.75 0.360322 6.67098 0.21967 6.53033C0.0790175 6.38968 0 6.19891 0 6ZM0 11.25C0 11.0511 0.0790175 10.8603 0.21967 10.7197C0.360322 10.579 0.551088 10.5 0.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H0.75C0.551088 12 0.360322 11.921 0.21967 11.7803C0.0790175 11.6397 0 11.4489 0 11.25Z"
                fill="#75716B"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[12px] w-screen flex flex-col items-center justify-center gap-2 h-[200px] hover-">
            <button className="border border-black  text-lg p-3 px-44 rounded-full ">
              Login
            </button>
            <button className="bg-black text-white border text-lg p-3 px-44 rounded-full ">
              Sign up
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      <div className="hidden md:flex gap-2">
        <button className="border-[#DAD6D1] border w-24 h-8 rounded-full">
          Login
        </button>
        <button className="bg-black text-white w-24 h-8 rounded-full">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
