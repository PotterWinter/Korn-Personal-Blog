function HeroSection() {
    return (
      <div className="flex item-center justify-center w-full p-5">
        <main className="flex flex-col md:flex-row items-center justify-between  gap-5 mt-10 md:w-5/6">
          <div className="md:w-1/3 md:flex md:flex-col md:justify-end">
            <h1 className="text-5xl mb-5 text-center font-semibold md:text-right">
              Stay
              <br className="hidden md:block" /> Informed,
              <br /> Stay Inspired
            </h1>
            <p className="text-base text-center text-[#75716B] md:text-right">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
              Inspiration and Information.
            </p>
          </div>
  
          <img
            className="flex object-cover rounded-xl md:w-1/3 h-[530px]"
            src="https://s3-alpha-sig.figma.com/img/14d0/ff1e/c045ed1d618b25c84aa4327331ecdaaf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sa-1sefNRV-OLYpD77st7eLo9Km1XL8KjpaDffMB-ENxZbSzjom08fKuVXSD5wtrZ3lfHsU~F2Zz~Juwc2Jc-ZlBUaFxAJZGqdklKiuA5p7nZLvd7h9twTAM4nmxH~gLYgq4A7IW2zqGCinEDq4VK2zfuREULDnKVuRd0k~yfknactG3IwuJsoL2lcoeQWluKNRnEaKGkZi7R2SkdwuU2faudHjeWoVDbl1n3FmD~Y5shUiRzbCUxz6JwN~C1H-kVMnByQhazAqqfNdGwJoIQr~VtZtK8kXRlwhQdyuy5zK0kzMTairpDncyj90y3ivZgAXs4wXOv8L-TXVLIC1ybw__"
            alt="Loading..."
          />
          <div className="md:w-1/3">
            <p>
              <span className="text-sm text-[#75716B]">-Author</span>{" "}
              <h1 className="text-2xl font-semibold text-[#43403B] font-poppins">
                Thompson P.
              </h1>{" "}
              <span className="text-base text-[#75716B]">
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
                <br />
                <br /> When i’m not writing, I spends time volunteering at my
                local animal shelter, helping cats find loving homes.
              </span>
            </p>
          </div>
        </main>
      </div>
    );
  }

  export default HeroSection