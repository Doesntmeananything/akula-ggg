import type { NextPage } from "next";

import { Careers, Team, Blog, ConceptArt, About, Hero } from "../home";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <ConceptArt />
      <Careers />
      <Team />
      <Blog />
    </main>
  );
};

export default Home;
