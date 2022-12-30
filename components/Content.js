import contentStyles from '../styles/Content.module.css';
import SectionOdd from './SectionOdd';
import SectionEven from './SectionEven';
import CTA from './CTA';
import FirstImage from '../public/images/page1-sec1.gif'
import SecondImage from '../public/images/page1-sec2.gif'
import ThirdImage from '../public/images/page1-sec3.gif'
import FourthImage from '../public/images/page1-sec4.gif'
import CTAImage from '../public/images/CTA.gif'

const Content = ({article}) => {
  return (
    <div className={contentStyles.layout}>
       <h1 className={contentStyles.title}>{article.title}</h1>
       <SectionOdd title={article.first_section_title} desc_1={article.first_section_desc_1} desc_2={article.first_section_desc_2} image={FirstImage} />
       <SectionEven title={article.second_section_title} desc_1={article.second_section_desc_1} desc_2={article.second_section_desc_2} image={SecondImage} />
       <SectionOdd title={article.third_section_title} desc_1={article.third_section_desc_1} desc_2={article.third_section_desc_2} image={ThirdImage} />
       <SectionEven title={article.fourth_section_title} desc_1={article.fourth_section_desc_1} desc_2={article.fourth_section_desc_2} image={FourthImage} />
       <CTA cta={article.call_to_action} image={CTAImage} lang={article.lang} />
    </div>
  )
}

export default Content