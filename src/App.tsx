import './App.css';
import { layout60Keys, layout80Keys } from './keys';

type RenderKeysProps = {
  layout: string[][];
};

const RenderKeys: React.FC<RenderKeysProps> = ({ layout }) => {
  const render = layout.map((key) => {
    let size = key[2] ? key[2] : '';

    if (key[1] && key[1] !== '') {
      return (
        <div
          data-content={key[1]}
          className={`key ${size} onShift`}
        >
          {key[0]}
        </div>
      );
    } else if (key[0] == '') {
      return <div className={`key ${size} blank`}></div>;
    } else {
      return <div className={`key ${size}`}>{key[0]}</div>;
    }
  });
  return <>{render}</>;
};

function App() {
  return (
    <main>
      <div className='keyboard'>
        <div className='layout-60'>
          <RenderKeys layout={layout60Keys} />
        </div>
        <div className='layout-80'>
          <RenderKeys layout={layout80Keys} />
        </div>
        {/* <div className='numpad'></div> */}
      </div>
    </main>
  );
}

export default App;
