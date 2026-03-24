import AnimeFooter from "../components/layout/AnimeFooter";
import AnimeNavbar from "../components/layout/AnimeNavbar";
import AboutSection from "../components/sections/AboutSection";
import AnimeListSection from "../components/sections/AnimeListSection";
import ContectSection from "../components/sections/ContectSection";
import HeroSection from "../components/sections/HeroSection";
import SearchSection from "../components/sections/SearchSection";
import TopAnimeSection from "../components/sections/TopAnimeSection";

export default function Home() {
  return (
    <div>
      <AnimeNavbar />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="search">
        <SearchSection />
      </section>

      <section id="anime-list">
        <AnimeListSection />
      </section>

      <section id="top-anime">
        <TopAnimeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContectSection />
      </section>

      <AnimeFooter />
    </div>
  );
}
