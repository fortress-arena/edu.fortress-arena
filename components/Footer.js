import footerStyles from '../styles/Footer.module.css';

const Footer = ({titles}) => {
  return (
    <div className={footerStyles.container}>
        {titles.map((t) => (<div className={footerStyles.link} key={titles}>{t}</div>))}
    </div>
  
  )
}

export default Footer
