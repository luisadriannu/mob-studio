import AbsoluteContact from "../components/AbsoluteContact";
import BackgroundWords from "../components/BackgroundWords";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <section className="container section">
      <article>
        <BackgroundWords>
          <h2>A brand and product designer working with clients globally</h2>
        </BackgroundWords>
        <Projects />
      </article>
      <AbsoluteContact />
    </section>
  );
}
