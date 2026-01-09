import FeatureCard from "../Components/FeatureCard";
import ai from "../images/ai.jpg";
import idle from "../images/idle.jpg";
import performance from "../images/performance.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles1/Hero.css";
function Home() {
  return (
    <div>
      <Navbar />
      <hero className="hero">
        <p className="hero-title">Where Coding Meets Intelligence</p>
        <p className="hero-subtitle">
          Write Code Analyze Performance, and learn from your Mistakes - All in
          One Place
        </p>
        <button className="get-started">Get Started</button>
      </hero>
      <section className="features">
        <FeatureCard
          img={idle}
          title="Built-in Coding Editor"
          description="Write, run, and test code directly on the platform."
        />
        <FeatureCard
          img={performance}
          title="Performance Analytics"
          description="Track your progress with topic-wise insights."
        />
        <FeatureCard
          img={ai}
          title="AI Error Assistant"
          description="Get instant explanations for coding errors."
        />
      </section>
      <Footer />
    </div>
  );
}
export default Home;
