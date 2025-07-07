import AnimatedTestimonials from "@/components/utils/teammem/animated-testimonials";

const HomeTeam = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-black">
      <div className="flex-1" />
      <div
        className="flex justify-center"
        style={{
          marginTop: "2rem",
        }}
      >
        <AnimatedTestimonials />
      </div>
      <div className="flex-1" />
      <style jsx>{`
        @media (max-width: 768px) {
          div.flex.justify-center {
            margin-top: 4rem !important;
          }
        }
        @media (max-width: 480px) {
          div.flex.justify-center {
            margin-top: 5.5rem !important;
          }
        }
        @media (max-width: 432px) {
          div.flex.justify-center {
            margin-top: 8rem !important;
          }
        }
      `}</style>
    </div>
  );
};
export default HomeTeam;
