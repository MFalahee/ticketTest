// import titleImage from '../files/elephanteheader.png';
import headerImg from "../files/svgs/header.svg"
import titleLogo from "../files/svgs/titleLogo.svg"

export default function Header() {
  return (
    <header className='App-header'>
      <img src={headerImg} className='header-art' alt='header-border-art' />
      <img src={titleLogo} className='header-title' alt='header-title-logo' />
      <h3 className='header-subtitle'> PRIVATE COLLECTION </h3>
    </header>
  )
}
