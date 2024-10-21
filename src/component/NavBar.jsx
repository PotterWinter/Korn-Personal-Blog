function NavBar() {
    return (
      <nav className="flex flex-row items-center justify-between mx-auto h-[48px] p-5 border-[#DAD6D1] border sticky top-0 bg-white">
        <a href="/" className="">
          <svg
            width="24"
            height="13"
            viewBox="0 0 24 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.43891 3.54016C6.11091 3.54016 6.70824 3.68416 7.23091 3.97216C7.76424 4.26016 8.18024 4.68682 8.47891 5.25216C8.78824 5.81749 8.94291 6.50016 8.94291 7.30016V12.5002H7.13491V7.57216C7.13491 6.78282 6.93757 6.18016 6.54291 5.76416C6.14824 5.33749 5.60957 5.12416 4.92691 5.12416C4.24424 5.12416 3.70024 5.33749 3.29491 5.76416C2.90024 6.18016 2.70291 6.78282 2.70291 7.57216V12.5002H0.878906V0.660156H2.70291V4.70816C3.01224 4.33482 3.40157 4.04682 3.87091 3.84416C4.35091 3.64149 4.87357 3.54016 5.43891 3.54016Z"
              fill="#43403B"
            />
            <path
              d="M15.8295 3.54016C16.5015 3.54016 17.0989 3.68416 17.6215 3.97216C18.1549 4.26016 18.5709 4.68682 18.8695 5.25216C19.1789 5.81749 19.3335 6.50016 19.3335 7.30016V12.5002H17.5255V7.57216C17.5255 6.78282 17.3282 6.18016 16.9335 5.76416C16.5389 5.33749 16.0002 5.12416 15.3175 5.12416C14.6349 5.12416 14.0909 5.33749 13.6855 5.76416C13.2909 6.18016 13.0935 6.78282 13.0935 7.57216V12.5002H11.2695V0.660156H13.0935V4.70816C13.4029 4.33482 13.7922 4.04682 14.2615 3.84416C14.7415 3.64149 15.2642 3.54016 15.8295 3.54016Z"
              fill="#43403B"
            />
            <path
              d="M22.3962 12.6122C22.0655 12.6122 21.7882 12.5002 21.5642 12.2762C21.3402 12.0522 21.2282 11.7748 21.2282 11.4442C21.2282 11.1135 21.3402 10.8362 21.5642 10.6122C21.7882 10.3882 22.0655 10.2762 22.3962 10.2762C22.7162 10.2762 22.9882 10.3882 23.2122 10.6122C23.4362 10.8362 23.5482 11.1135 23.5482 11.4442C23.5482 11.7748 23.4362 12.0522 23.2122 12.2762C22.9882 12.5002 22.7162 12.6122 22.3962 12.6122Z"
              fill="#12B379"
            />
          </svg>
        </a>
        <button className="md:hidden">
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
        </button>
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

  export default NavBar