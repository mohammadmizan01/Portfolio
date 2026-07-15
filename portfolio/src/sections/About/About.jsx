import Container from "@/components/layout/Container/Container";

import AboutLeft from "./AboutLeft/AboutLeft";
// import AboutRight from "./AboutRight/AboutRight";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-(--section-padding-y)
      "
    >
      <Container>

        <div
          className="
            grid
            gap-20

            items-start

            lg:grid-cols-2
          "
        >

          <AboutLeft />

          {/* <AboutRight /> */}

        </div>

      </Container>
    </section>
  );
};

export default About;