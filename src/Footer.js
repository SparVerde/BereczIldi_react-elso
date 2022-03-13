import './Footer.css'
export function Footer(props) {
  const nev = props.nev || "Berecz Ildikó";
  const link = props.link || 'https://github.com/SparVerde';
  return(
    <footer className="Elso-footer">
  <p>Készítette: {nev} <br/>
  – elérhető <a href= {link} target='_blank'>itt-e</a></p></footer>)
}
