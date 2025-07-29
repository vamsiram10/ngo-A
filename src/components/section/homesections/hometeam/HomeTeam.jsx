import dynamic from "next/dynamic";

// Dynamically import AnimatedTestimonials for faster TTFB and lower initial JS
const AnimatedTestimonials = dynamic(
  () => import("@/components/utils/teammem/animated-testimonials"),
  { ssr: false, loading: () => <div style={{ minHeight: 320 }} /> }
);

const HomeTeam = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-black">
      <div className="flex-1" />
      <div className="flex justify-center">
        <AnimatedTestimonials />
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default HomeTeam;
