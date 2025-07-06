const {
  default: FlyingBirdLogo,
} = require("@/components/utils/avasalogo/FlyingBirdLogo");

const SomeThing = () => {
  return (
    <div className="min-h-screen w-screen bg-pink-600">
      <FlyingBirdLogo />
    </div>
  );
};

export default SomeThing;
