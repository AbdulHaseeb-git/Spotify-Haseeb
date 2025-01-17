import MainContent from "@/components/mainComponent";
import MusicPlayer from "@/components/musicPlayer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
  <div className="flex flex-col gap-3 p-4 md:max-h-screen md:h-screen md:overflow-hidden">
    <Navbar />
    <MainContent />
    <MusicPlayer/>
  </div>
  );
}