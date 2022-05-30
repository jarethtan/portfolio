import React from "react";
import BackCardContent from "./BackCardContent";
import FrontCardContent from "./FrontCardContent";
import FlippingCard from "../../ui/flippingCard/FlippingCard";
import FrontCard from "../../ui/flippingCard/FrontCard";
import BackCard from "../../ui/flippingCard/BackCard";

const EachSkill: React.FC<{ image: string; title: string; legend: string; content: string; backContent: string[][] }> = ({
  image,
  title,
  legend,
  content,
  backContent,
}) => {
  return (
    <FlippingCard style={{ width: "22%" }}>
      <FrontCard>
        <FrontCardContent image={image} title={title} legend={legend} content={content} />
      </FrontCard>
      <BackCard>
        <BackCardContent backContent={backContent} />
      </BackCard>
    </FlippingCard>
  );
};

export default EachSkill;
