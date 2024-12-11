import { Title } from "@sharing/atoms";
import { WhyUsData } from "@typing/data";
import * as styles from "./WhyChooseUs.styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function WhyChooseUs() {
  const content: Array<WhyUsData> = [
    {
      main: "Experience and Expertise: ",
      content:
        "With years of industry experience, our team has the knowledge and skill to handle any challenge that arises.",
    },
    {
      main: "Customer Service Priority: ",
      content:
        "We care about our customers' satisfaction and strive to exceed their expectations every step of the way.",
    },
    {
      main: "Commitment to Quality: ",
      content:
        "We use only the best materials and techniques in every project to ensure lasting, high-quality results.",
    },
    {
      main: "Efficiency and Timeliness: ",
      content:
        "We understand the importance of meeting deadlines and working efficiently to minimize disruptions to your business or community.",
    },
  ];
  return (
    <section id="why_us" className={styles.main_container}>
      <div className={styles.container}>
        <Title>Why Choose Us</Title>

        <VerticalTimeline lineColor="var(--accent-color)">
          {content.map(({ main, content }: WhyUsData, index: number) => {
            return (
              <>
                {index % 2 === 0 ? (
                  <VerticalTimelineElement
                    key={`vertical-timeline-${index}-why-us`}
                    contentStyle={{
                      background: "var(--accent-color)",
                      color: "var(--hero-text)",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  var(--accent-color)",
                    }}
                    iconStyle={{
                      background: "var(--hero-text)",
                      border: "9px solid var(--accent-color)",
                      boxShadow: "0px 0px 11px -1px rgba(0,0,0,0.75)",
                      transform: "scale(.5)",
                      transition: "all 0.5s ease-in-out"
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">{main}</h3>
                    <p>{content}</p>
                  </VerticalTimelineElement>
                ) : (
                  <VerticalTimelineElement
                    key={`vertical-timeline-${index}-why-us`}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      boxShadow: "0px 0px 11px -1px rgba(0,0,0,0.75)",
                      color: "var(--accent-color)",
                      background: "var(--hero-text)",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  var(--hero-text)",
                    }}
                    iconStyle={{
                      background: "var(--accent-color)",
                      border: "9px solid var(--hero-text)",
                      boxShadow: "0px 0px 11px -1px rgba(0,0,0,0.75)",
                      transform: "scale(.5)",
                      transition: "all 0.5s ease-in-out"
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">{main}</h3>
                    <p>{content}</p>
                  </VerticalTimelineElement>
                )}
              </>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
