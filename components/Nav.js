import navStyles from '../styles/Nav.module.css';
import Logo from '../public/images/logo-nav.png';
import Image from "next/image";
import React from "react";
import { Dropdown } from "@nextui-org/react";
import Link from 'next/link';
import KrFlag from '../public/images/icon-ko.png';
import EnFlag from '../public/images/icon-en.png';

const Nav = ({article}) => {

    const [selected, setSelected] = React.useState(new Set([article.lang.toUpperCase()]))
    const kr = "KR";

  return (
    <div className={navStyles.container}>
        <div>
            <Link href="https://fortress-arena.io/" target="_blank"><Image src={Logo} alt="logo" width="auto" height="auto" /></Link>
        </div>
        <div>
            <Dropdown className={navStyles.language}>
                <Dropdown.Button flat css={{ borderRadius: '10px', border: '$space$1 solid #1D1D1D', background: '$white800', color: '#1D1D1D', padding: '12px', height: '46px;' }}>
                    <Image src={ article.lang.toUpperCase() == kr ? KrFlag : EnFlag } className={navStyles.flag} alt="logo" width="auto" height="auto" /> {selected}
                </Dropdown.Button>
                <Dropdown.Menu
                    color="default"
                    textColor="default"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                    css={{ maxWidth: '87px', minWidth: '87px', border: '$space$1 solid #1D1D1D', borderRadius: '10px' }}
                    id="long-value-select"
                    instanceId="long-value-select"
                >
                <Dropdown.Item css={{ width: "67px", borderRadius: '0px', textAlign: 'center', padding: '0px' }} key="KR"><Link href={`/kr/${article.path}`} className={navStyles.anchor}><Image className={navStyles.flag} src={KrFlag} alt="logo" width="auto" height="auto" />KR</Link></Dropdown.Item>
                <Dropdown.Item css={{ width: "67px", borderRadius: '0px', textAlign: 'center', padding: '0px' }} key="EN"><Link href={`/en/${article.path}`} className={navStyles.anchor}><Image className={navStyles.flag} src={EnFlag} alt="logo" width="auto" height="auto" />EN</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
  
  )
}

export default Nav
