import titleImage from '../files/elephanteheader.png';
export default function Header() {
    return (
        <header className="App-header">
            <img 
              src={titleImage} 
              className="App-title-image" 
              alt="Title art for Elephante" />
            <h3> PRIVATE COLLECTION </h3>
            </header>
    )
}
