// cursor.jsx — Fake cursor with global imperative API
// Use: await window.cursor.clickEl(ref.current)

const { useState, useEffect, useRef } = React;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function FakeCursor() {
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(true);
  const clickCounter = useRef(0);

  useEffect(() => {
    const moveTo = async (el, opts = {}) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const tx = r.left + r.width / 2 + (opts.offsetX || 0);
      const ty = r.top + r.height / 2 + (opts.offsetY || 0);
      setPos({ x: tx, y: ty });
      await wait(opts.duration ?? 750);
    };
    const moveToXY = async (x, y, opts = {}) => {
      setPos({ x, y });
      await wait(opts.duration ?? 700);
    };
    const click = async () => {
      clickCounter.current++;
      setClicking(true);
      await wait(280);
      setClicking(false);
      await wait(140);
    };
    const clickEl = async (el, opts = {}) => {
      await moveTo(el, opts);
      await wait(180);
      await click();
    };
    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.cursor = { moveTo, moveToXY, click, clickEl, hide, show, wait };
    return () => { delete window.cursor; };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0, top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 750ms cubic-bezier(0.4, 0.02, 0.2, 1)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        willChange: 'transform',
      }}
    >
      {/* Cursor arrow — tip at (0, 0) of this container */}
      <svg width="22" height="26" viewBox="0 0 22 26" style={{
        position: 'absolute', left: -3, top: -3,
        filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))',
      }}>
        <path
          d="M3 3 L3 21 L8 17 L11 23 L14 22 L11 16 L18 16 Z"
          fill="#0f172a"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      {/* Click ripple */}
      {clicking && (
        <div style={{
          position: 'absolute', left: -10, top: -10,
          width: 20, height: 20,
          borderRadius: '50%',
          border: '2.5px solid #f43f5e',
          animation: 'ripple 380ms cubic-bezier(0.2, 0.7, 0.4, 1) forwards',
        }} />
      )}
    </div>
  );
}

Object.assign(window, { FakeCursor, wait });
