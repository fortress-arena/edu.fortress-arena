import sectionStyles from '../styles/SectionEven.module.css';
import Image from "next/image";

const SectionEven = ({title, desc, image}) => {
  return (
      <div className={sectionStyles.container}>
          <div className={sectionStyles.content}>
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
              <div className={sectionStyles.textArea}>
                  <h2 className={sectionStyles.title}>
                  {title}
                  </h2>
                  <div className={sectionStyles.desc}>
                  {desc}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default SectionEven
