"used client";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen flex-col items-center justify-between grid grid-cols-12 grid-rows-1 gap-1">
      <div className="col-span-2 h-screen ">
        <SidebarComponent />
      </div>
      <div className="col-span-10 h-screen px-5">
        <NavbarComponent />
        <ListBoardComponentHeader />

      </div>
    </main>
  );
}
