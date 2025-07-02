import Link from "next/link";

const HomeOther = () => {
  return (
    <div
      className="overflow-x-hidden relative flex items-center justify-center min-h-screen w-screen"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center gap-6 gap-8 w-full md:flex-row">
          {/* First Name and Image */}
          <div className="flex flex-row items-center justify-center w-full md:w-auto">
            <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              vamsi
            </span>
            <div className="flex items-center justify-center mx-2 w-20 h-24 h-32 h-40 h-56 sm:w-28 md:w-32 lg:w-40">
              {/* <Link
                href="/"
                className="flex items-center justify-center pl-2 w-full h-full"
              >
                <img
                  src="/download.jpg"
                  alt="Luffy Sticker"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                  style={{ verticalAlign: "middle" }}
                  loading="eager"
                />
              </Link> */}
            </div>
          </div>
          {/* Second Image and Name */}
          <div className="flex flex-row items-center justify-center w-full md:w-auto">
            <div className="flex items-center justify-center mx-2 w-20 h-24 h-32 h-40 h-56 sm:w-28 md:w-32 lg:w-40">
              {/* <Link
                href="/"
                className="flex items-center justify-center pl-2 w-full h-full"
              >
                <img
                  src="/images.jpg"
                  alt="Zoro Sticker"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                  style={{ verticalAlign: "middle" }}
                  loading="eager"
                />
              </Link> */}
            </div>
            <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Aneesh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOther;
