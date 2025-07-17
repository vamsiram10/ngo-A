import BackgroundLines from "@/components/utils/background/background-lines";

export const metadata = {
  title: "Blogs | Avasa",
};

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-50 pointer-events-auto flex items-center justify-center">
        <BackgroundLines />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <span className="text-3xl md:text-5xl font-bold text-pink-400 animate-pulse mb-4">
            Coming Soon Loading....
          </span>
          <span className="w-12 h-12 flex items-center justify-center mb-2">
            <svg
              className="animate-spin-slow"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#F472B6"
                strokeWidth="4"
                strokeDasharray="60"
                strokeDashoffset="20"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
          <p className="mt-4 text-gray-400 text-lg animate-fade-in">
            Our blog will be live soon. Stay tuned!
          </p>
        </div>
      </div>
      <style>
        {`
          .animate-spin-slow {
            animation: spin 2.5s linear infinite;
          }
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease-in;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
