import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PageDivider from "@/components/PageDivider";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialSection from "@/components/TestimonialSection";

const Home = () => {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <PageDivider />
      <TestimonialSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
