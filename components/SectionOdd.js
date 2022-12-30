import sectionStyles from '../styles/SectionOdd.module.css';
import Image from "next/image";

const SectionOdd = ({title, desc_1, desc_2, image}) => {
  return (
      <div className={sectionStyles.container}>
          <div className={sectionStyles.content}>
              <div className={sectionStyles.textArea}>
                  <h2 className={sectionStyles.title}>
                  {title}
                  </h2>
                  <div className={sectionStyles.desc}>
                  {desc_1}
                  </div>
                  <div className={sectionStyles.desc}>
                  {desc_2}
                  </div>
              </div>
              <div className={sectionStyles.imageArea}>
                  <Image
                      src={image}
                      alt="section-image"
                      width='100%'
                      height='100%'
                      sizes="100vw"
                      style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain"
                      }} />
              </div> 
          </div>
      </div>
  );
}

export default SectionOdd
