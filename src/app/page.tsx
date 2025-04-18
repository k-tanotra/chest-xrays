import Image from "next/image";
export default function Home() {
  return (
    <div
    className="bg-cover bg-center h-screen bg-no-repeat p-8 text-[#5acce6]"
    style={{ backgroundImage: "url('background.png')" }}
  >
      <div className="flex flex-col items-center justify-center h-full space-x-6 w-[1000px]">
          <div className="flex flex-col justify-start mb-8 w-full space-y-[20px]">
            <div className="flex flex-row items-center justify-start space-x-4">
            <h1 className="text-8xl font-extrabold text-left">Team Uranus</h1>
            <Image
              src="/uranus.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            </div>
            <h2 className="text-4xl font-bold text-left"> Multimodel Chest Disease Diagnostic Systems </h2>
            <p>  Project Description Project Description Project Description Project Description Project Description Project Description </p>
          </div>
          <div className="flex flex-row justify-center mb-8 w-full space-x-[20px]">
            <button className="bg-[#03346E] hover:bg-[#1E3E62] p-4 rounded-2xl text-[#FF6500]"> Demo </button>
            <button className="bg-[#03346E] hover:bg-[#1E3E62] p-4 rounded-2xl text-[#E14594]"> Presentation </button>
            <button className="bg-[#03346E] hover:bg-[#1E3E62] p-4 rounded-2xl text-[#72BAA9]"> Stats </button>
          </div>
      </div>
    </div>
  );
}
