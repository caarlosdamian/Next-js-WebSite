/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";
import FeatureCardColumn from "components/feature-card-column";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "Let’s just get this out of the way - We provide the highest performance in each system, since the most current and used technologies in the market are used.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text:
      "We handle different maintenance subscriptions once the product is delivered to have continuous improvements.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Partnership deal",
    title: "Partnership deal",
    text:
      "We provide a detailed quote depending on the requirements of the system in this way to provide a totally personalized process.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "Our customer service process is personalized since we have contacts throughout the construction path of the system there will always be someone available to solve all the doubts.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Quality Features" title="Useful features" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
