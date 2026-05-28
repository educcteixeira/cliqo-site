// app.jsx — main controller, stage scaler, tab + scene orchestration

const { useState, useEffect, useRef } = React;

function Stage({ children, width = 1280, height = 800 }) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const compute = () => {
      const sx = window.innerWidth / width;
      const sy = window.innerHeight / height;
      setScale(Math.min(sx, sy, 1));
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [width, height]);

  return (
    <div className="stage">
      <div
        className="stage-canvas"
        style={{
          width, height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

const SCENES = ['products', 'payment', 'gamification', 'survey'];

function App() {
  const [activeId, setActiveId] = useState('products');
  const [runKey, setRunKey] = useState(0);
  // Auto-advance between scenes
  const handleDone = () => {
    const i = SCENES.indexOf(activeId);
    const next = SCENES[(i + 1) % SCENES.length];
    setActiveId(next);
    setRunKey((k) => k + 1);
  };

  // Direct user tab pick — overrides the autoplay
  const handleTabPick = (id) => {
    if (id === activeId) return;
    setActiveId(id);
    setRunKey((k) => k + 1);
  };

  const Scene =
    activeId === 'products' ? SceneProducts :
    activeId === 'payment' ? ScenePayment :
    activeId === 'gamification' ? SceneGamification :
    SceneSurvey;

  return (
    <>
    <Stage>
      {/* Backdrop ambience inside the canvas */}
      <div style={{
        position: 'absolute', inset: 0,
        background:
          'radial-gradient(circle at 22% 18%, rgba(244,63,94,0.10) 0%, rgba(244,63,94,0) 45%),' +
          'radial-gradient(circle at 80% 85%, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0) 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: 14, paddingBottom: 8,
      }}>
        {/* Brand strip + tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: 6,
              background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: 11,
              boxShadow: '0 4px 10px rgba(244,63,94,0.35)',
            }}>C</div>
            <span style={{ whiteSpace: 'nowrap' }}>Cliqo · AMP para Email</span>
          </div>
          <SceneTabs activeId={activeId} onPick={handleTabPick} />
        </div>

        {/* Browser window with email */}
        <div style={{ marginTop: 12 }}>
          <ChromeWindow
            tabs={[{ title: 'Cliqo · novidades da semana' }]}
            url="mail.google.com/mail/u/0/#inbox"
            width={1280}
            height={700}
          >
            <EmailHeader />
            <EmailBrandStrip />
            <div
              key={activeId + ':' + runKey}
              style={{
                animation: 'fadeSlideIn 360ms cubic-bezier(0.2, 0.7, 0.3, 1)',
              }}
            >
              <Scene runKey={runKey} onDone={handleDone} />
            </div>
          </ChromeWindow>
        </div>
      </div>
    </Stage>
    <FakeCursor />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
