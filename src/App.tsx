import React from 'react';
import './App.css';
import { layout60Keys, layout80Keys } from './keys';

const hotKeys = [['alt', 'F4']];

const keyMap = {
  1: {
    combination: ['alt', 'F4'],
    description: 'Close window',
  },
  2: {
    combination: ['ctrl', 'C'],
    description: 'Copy',
  },
  3: {
    combination: ['ctrl', 'V'],
    description: 'Paste',
  },
  4: {
    combination: ['ctrl', 'X'],
    description: 'Cut',
  },
  5: {
    combination: ['ctrl', 'Z'],
    description: 'Undo',
  },
  6: {
    combination: ['ctrl', 'Y'],
    description: 'Redo',
  },
  7: {
    combination: ['ctrl', 'A'],
    description: 'Select all',
  },
  8: {
    combination: ['ctrl', 'S'],
    description: 'Save',
  },
};

type KeyProps = {
  boardKey: string;
  size?: string;
  content?: string;
  onShift?: boolean;
  children?: React.ReactNode;
};

const Key: React.FC<KeyProps> = ({ boardKey, size, content, onShift, children }) => {
  const [isShown, setIsShown] = React.useState(false);
  let hotKey = '';
  let hotKeyDescription: string[] = [];

  const handleHover = () => {
    setIsShown(!isShown);
    if (hotKeyDescription.length > 0) {
      console.log(hotKeyDescription);
    }
  };
  for (const [k, value] of Object.entries(keyMap)) {
    if (value.combination.includes(boardKey)) {
      hotKey = 'hot-key';
      hotKeyDescription.push(value.description);
    }
  }

  let shift = onShift ? 'onShift' : '';
  return (
    <div
      data-content={content}
      className={`key ${size} ${shift} ${hotKey}`}
      onMouseEnter={() => handleHover()}
    >
      {children}
    </div>
  );
};

type RenderKeysProps = {
  layout: string[][];
};

const RenderKeys: React.FC<RenderKeysProps> = ({ layout }) => {
  let i = 0;
  const render = layout.map((key) => {
    // set size of key if it exists else set to empty string
    let size = key[2] ? key[2] : '';
    i++;
    if (key[1] && key[1] !== '') {
      // Two character key
      return (
        <Key
          boardKey={key[0]}
          size={size}
          content={key[1]}
          onShift={true}
          key={i}
        >
          {key[0]}
        </Key>
      );
    } else if (key[0] === '') {
      // Blank key
      return (
        <div
          className={`key ${size} blank`}
          key={i}
        ></div>
      );
    } else {
      // Regular key
      return (
        <Key
          boardKey={key[0]}
          size={size}
          content={key[0]}
          key={i}
        >
          {key[0]}
        </Key>
      );
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
