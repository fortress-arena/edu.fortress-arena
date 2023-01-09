import ctaStyles from '../styles/CTA.module.css';
import Image from "next/image";
import Link from 'next/link';
import DiscordIcon from '../public/images/discord-icon.png'

const CTA = ({cta_1, cta_2, image, lang}) => {
  const kr = "kr"

  return (
      <div className={ctaStyles.container}>
          <div className={ctaStyles.content}>
              <div className={ctaStyles.imageArea}>
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
              <div className={ctaStyles.textArea}>
                  {cta_1}
              </div>
              <div className={ctaStyles.textArea}>
                  {cta_2}
              </div>
              <Link href="https://discord.gg/JU8QhRePvP" target="_blank" className={ctaStyles.link}>
                  <div className={ctaStyles.button}>
                      <Image
                          src={DiscordIcon}
                          alt="dicord-image"
                          width={20}
                          height={15.56}
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      {lang == kr ? '디스코드 바로가기' : 'Join Discord'}
                  </div>
              </Link>
          </div>
      </div>
  );
}

export default CTA
