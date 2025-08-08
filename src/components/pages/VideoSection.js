import { Card, CardContent } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen border-2 border-[#0077cb] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/pulmoplus-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
<div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      {/* Diagonal Triangle */}
      <div className="absolute top-0 right-0 w-0 h-0 max-sm:border-t-[100px] max-sm:border-l-[100px] border-t-[200px] border-l-[200px] border-t-[#0077cb] border-l-transparent z-10" />

      {/* Bottom-Left Triangle */}
      <div className="absolute bottom-0 left-0 w-0 h-0 max-sm:border-b-[100px] max-sm:border-r-[100px] border-b-[200px] border-r-[200px] border-b-[#0077cb] border-r-transparent z-10" />

      {/* Overlay Card */}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
        <Card className="bg-white/90 backdrop-blur-md shadow-xl max-w-md w-full border border-[#0077cb]">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-[#005b99]">
              Welcome to Our Store
            </h2>
            <p className="mt-2 text-gray-700">
              Explore our curated collection of high-quality respiratory care products — designed for comfort, performance, and peace of mind.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}