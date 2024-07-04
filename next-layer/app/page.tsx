import LoadingScreen from "@/components/LoadingScreen";
import { Barlow } from "next/font/google";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";

const poppins = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="bg-white min-h-screen ">
      <Header></Header>
      <div className="flex py-5 justify-center align-middle mx-5">
        <Search></Search>
      </div>
      <div className="py-5 align-middle mx-5">
        <Categories></Categories>
      </div>
      <div className="py-5 align-middle mx-5">
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}
