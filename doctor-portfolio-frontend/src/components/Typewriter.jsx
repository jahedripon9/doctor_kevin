import { useEffect, useState } from 'react';

const TYPE_INTERVAL = 90;

function Typewriter({ text }) {
  const [state, setState] = useState({ source: text, typed: '' });

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setState({ source: text, typed: text.slice(0, index) });

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, TYPE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [text]);

  const typedText = state.source === text ? state.typed : '';

  return (
    <span className="text-brand-yellow" aria-label={text}>
      {typedText}
      <span className="ml-0.5 inline-block animate-pulse" aria-hidden="true">
        |
      </span>
    </span>
  );
}

export default Typewriter;
