import sectionStyles from '../styles/SectionOdd.module.css';
import Image from 'next/image';

const SectionOdd = ({title, desc, image}) => {
  return (
    <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
            <div className={sectionStyles.textArea}>
                <h2 className={sectionStyles.title}>
                {title}
                </h2>
                <div className={sectionStyles.desc}>
                {desc}
                </div>
            </div>
            <div className={sectionStyles.imageArea}>
                <Image src={image} alt="section-image" width='100%' height='100%' layout="responsive" objectFit="contain" />
            </div> 
        </div>
    </div>
  )
}

export default SectionOdd
