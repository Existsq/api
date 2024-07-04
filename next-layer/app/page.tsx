import LoadingScreen from "@/components/LoadingScreen";
import { Barlow } from "next/font/google";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import Header from "@/components/Header";


const poppins = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Home() {
  return (
    <main className="">
        <Header></Header>
    </main>
  );
}
