import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">About</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                blanditiis quam iste, id deleniti placeat fuga eos recusandae
                dolor voluptatibus similique, atque consequatur amet tempore,
                sed minima! Rerum, rem odit?
              </p>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default About;
