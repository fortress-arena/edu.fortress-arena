import contentStyles from "../styles/Content.module.css";
import SectionOdd from "./SectionOdd";
import SectionEven from "./SectionEven";
import CTA from "./CTA";
import CTAImage from "../public/images/CTA.gif";

const Content = ({ article }) => {
  return (
    <div className={contentStyles.layout}>
      <h1 className={contentStyles.title}>{article.title}</h1>
      <SectionOdd title={article.first_section_title} desc_1={article.first_section_desc_1} desc_2={article.first_section_desc_2} image={article.first_section_image_source} />
      <SectionEven title={article.second_section_title} desc_1={article.second_section_desc_1} desc_2={article.second_section_desc_2} image={article.second_section_image_source} />
      <SectionOdd title={article.third_section_title} desc_1={article.third_section_desc_1} desc_2={article.third_section_desc_2} image={article.third_section_image_source} />
      <SectionEven title={article.fourth_section_title} desc_1={article.fourth_section_desc_1} desc_2={article.fourth_section_desc_2} image={article.fourth_section_image_source} />
      <CTA cta_1={article.call_to_action_1} cta_2={article.call_to_action_2} image={CTAImage} lang={article.lang} />
    </div>
  );
};

export default Content;
