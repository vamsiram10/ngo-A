import { Gallery } from "@/components/utils/gallerySection/Gallery";

const {
  default: FlyingBirdLogo,
} = require("@/components/utils/avasalogo/FlyingBirdLogo");

const SomeThing = () => {
  return (
    <div className="min-h-screen w-screen bg-pink-300">
      {/* <h1 className="z-50 absolute top-1/2 left-1/2 w-full text-9xl font-bold text-center transform -translate-x-1/2 -translate-y-1/2">
        GALLERY
      </h1> */}
      {/* <FlyingBirdLogo /> */}
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default SomeThing;
