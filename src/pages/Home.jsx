import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Items from "../components/Items"
import Navbar from "../components/Navbar"
import CardSkeleton from "../components/CardSkeleton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  })

 
  return (
    <>
        <Navbar />
        {isLoading ? <CardSkeleton /> : <Items />}
        <Footer />
    </>
  )
}

export default Home