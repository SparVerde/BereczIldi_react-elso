import './Tartalom.css';
export function Tartalom(props) {
  const db = props.db || 5;
  const contentDiv = [];
  for (let i = 0; i < db; i++) {
    contentDiv.push(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac eros dolor. Integer fermentum id metus id convallis. Vivamus semper fermentum dapibus. Ut eu ullamcorper urna. In eget libero id risus suscipit hendrerit ac maximus purus. In ac fermentum sem. Donec dignissim, arcu id faucibus aliquet, urna justo venenatis justo, vel imperdiet lacus dui nec felis.</p>);

  }
  return (
  
      <div className='Elso-content' id="content">
        {contentDiv}
      </div>);
}
