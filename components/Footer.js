import footerStyles from '../styles/Footer.module.css';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from "next/image";
import Logo from "../public/images/logo-footer.png"
import DiscordSocial from "../public/images/discord-social.png";
import TelegramSocial from "../public/images/telegram-social.png";
import TwitterSocial from "../public/images/twitter-social.png";

const Footer = ({titles, paths}) => {
  const router = useRouter()

  return (
    <div className={footerStyles.container}>
        <div className={footerStyles.contentContainer}>
            <div className={footerStyles.contentTitle}>
                More Contents 
            </div>
            <div className={footerStyles.content}>
                {titles.map((t, index) => (<Link key={index} className={footerStyles.link} href={`${router.asPath.substring(0,4)}[path]`} as={paths[index]}>{t}</Link>))}
            </div>
        </div>
        <div className={footerStyles.socialContainer}>
            <div className={footerStyles.logo}>
                <Image src={Logo} alt="logo" width="auto" height="auto" />
            </div>
            <div className={footerStyles.socialList}>
                <Link href="https://discord.gg/JU8QhRePvP" target="_blank"><Image className={footerStyles.socialImage} src={DiscordSocial} alt="logo" width="auto" height="auto" /></Link>
                <Link href="https://t.me/Fortress_Arena" target="_blank"><Image className={footerStyles.socialImage} src={TelegramSocial} alt="logo" width="auto" height="auto" /></Link>
                <Link href="https://twitter.com/Fortress_Arena" target="_blank"><Image className={footerStyles.socialImage} src={TwitterSocial} alt="logo" width="auto" height="auto" /></Link>
            </div>
            <div className={footerStyles.copyright}>
                © Copyright 2023 Atomrigs Lab, Inc All Rights Reserved
            </div>
        </div>
    </div>
  
  )
}

export default Footer
