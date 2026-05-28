// scene-gamification.jsx — Scene 3: prize wheel

const WHEEL_SEGMENTS = [
  { label: 'Tente de novo', color: '#cbd5e1', textColor: '#475569' },
  { label: '10% OFF', color: '#fda4af', textColor: '#7f1d1d' },
  { label: 'Frete grátis', color: '#2dd4bf', textColor: '#0f4d44' },
  { label: '5% OFF', color: '#fbcfe8', textColor: '#831843' },
  { label: 'Brinde', color: '#fbbf24', textColor: '#78350f' },
  { label: '20% OFF', color: '#f43f5e', textColor: '#ffffff' }, // target at center 300°
];

function sectorPath(cx, cy, r, startDeg, endDeg) {
  // 0° = top, clockwise
  const a1 = ((startDeg - 90) * Math.PI) / 180;
  const a2 = ((endDeg - 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(a1);
  const y1 = cy + r * Math.sin(a1);
  const x2 = cx + r * Math.cos(a2);
  const y2 = cy + r * Math.sin(a2);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
}

function PrizeWheel({ rotation, spinning }) {
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 2;
  const segCount = WHEEL_SEGMENTS.length;
  const arc = 360 / segCount;

  return (
    <div style={{ position: 'relative', width: size, height: size + 18 }}>
      {/* Pointer at top */}
      <svg
        width="22" height="20" viewBox="0 0 22 20"
        style={{
          position: 'absolute', left: cx - 11, top: -4, zIndex: 3,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))',
        }}
      >
        <path d="M11 18 L1 2 L21 2 Z" fill="#0f172a" />
      </svg>

      {/* Wheel */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning
            ? 'transform 3400ms cubic-bezier(0.18, 0.7, 0.2, 1)'
            : 'none',
          filter: 'drop-shadow(0 8px 22px rgba(15,23,42,0.18))',
        }}
      >
        <circle cx={cx} cy={cy} r={r} fill="#fff" />
        {WHEEL_SEGMENTS.map((s, i) => {
          const start = -arc / 2 + i * arc;
          const end = start + arc;
          const center = start + arc / 2;
          return (
            <g key={i}>
              <path d={sectorPath(cx, cy, r, start, end)} fill={s.color} />
              <g transform={`rotate(${center} ${cx} ${cy}) translate(${cx} ${cy - r * 0.62})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 11,
                    fill: s.textColor,
                    letterSpacing: '-0.005em',
                  }}
                >
                  {s.label}
                </text>
              </g>
            </g>
          );
        })}
        {/* outer ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
        {/* hub */}
        <circle cx={cx} cy={cy} r={14} fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={5} fill="#0f172a" />
      </svg>
    </div>
  );
}

function SceneGamification({ runKey, onDone }) {
  const [rotation, setRotation] = React.useState(0);
  const [spinning, setSpinning] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const spinRef = React.useRef(null);

  React.useEffect(() => {
    setRotation(0);
    setSpinning(false);
    setResult(false);
    let cancelled = false;
    (async () => {
      await wait(900);
      if (cancelled || !window.cursor) return;
      await window.cursor.clickEl(spinRef.current);
      if (cancelled) return;
      setSpinning(true);
      // 5 full rotations + land "20% OFF" (center at 300°) at top: 5*360 + 60 = 1860
      setRotation(1860);
      // wait for CSS transition to finish (3400ms) before showing result
      await wait(3500);
      if (cancelled) return;
      setResult(true);
      await wait(2200);
      if (cancelled) return;
      onDone && onDone();
    })();
    return () => { cancelled = true; };
  }, [runKey]);

  return (
    <>
      <SceneHero
        eyebrow="roleta da sorte"
        title="Uma chance hoje. Vai girar?"
        subtitle="6 prêmios. Válido até as 23:59."
        gradient="linear-gradient(120deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)"
      />
      <div style={{ padding: '18px 24px 22px' }}>
      <div style={{
        background: '#f8fafc',
        border: '1px solid #eef0f3',
        borderRadius: 16,
        padding: 20,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
      }}>
        <PrizeWheel rotation={rotation} spinning={spinning} />

        <div style={{ flex: 1, minWidth: 0 }}>
          {!result && (
            <div style={{ animation: 'fadeSlideIn 280ms ease' }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: '#be123c',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8,
              }}>Roleta Cliqo</div>
              <div style={{
                fontSize: 22, fontWeight: 700, color: '#0f172a',
                letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 10,
              }}>Sua sorte está a um clique.</div>
              <div style={{
                fontSize: 13, color: '#64748b', lineHeight: 1.55, marginBottom: 18,
              }}>
                6 prêmios na roleta. Quanto mais cedo girar, melhor — válido até hoje 23:59.
              </div>
              <button
                ref={spinRef}
                disabled={spinning}
                style={{
                  padding: '14px 22px',
                  background: spinning ? '#94a3b8' : 'linear-gradient(180deg, #fb7185 0%, #f43f5e 100%)',
                  color: '#fff',
                  border: 0,
                  borderRadius: 12,
                  fontFamily: 'inherit',
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  cursor: spinning ? 'default' : 'pointer',
                  boxShadow: spinning ? 'none' : '0 6px 18px rgba(244,63,94,0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 240ms ease',
                }}
              >
                {spinning ? 'Girando…' : 'Girar agora'}
              </button>
            </div>
          )}
          {result && (
            <div style={{ animation: 'fadeSlideUp 360ms cubic-bezier(0.2, 0.7, 0.3, 1)' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 11, fontWeight: 700, color: '#15803d',
                background: '#dcfce7',
                padding: '4px 10px', borderRadius: 999,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                <span style={{ animation: 'pulse 1.4s ease-in-out infinite' }}>🎉</span>
                você ganhou
              </div>
              <div style={{
                fontSize: 28, fontWeight: 800, color: '#0f172a',
                letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 8,
              }}>20% OFF na próxima compra</div>
              <div style={{
                fontSize: 13, color: '#64748b', lineHeight: 1.5, marginBottom: 16,
              }}>
                Use o código abaixo no checkout. Válido por 48h.
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 12px',
                background: '#0f172a',
                color: '#f43f5e',
                borderRadius: 8,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.06em',
                marginBottom: 16,
              }}>
                CLIQO20
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="11" height="11" rx="2"/>
                  <path d="M5 15 V5 a2 2 0 0 1 2 -2 h10"/>
                </svg>
              </div>
              <div>
                <button style={{
                  padding: '12px 18px',
                  background: '#10b981',
                  color: '#fff',
                  border: 0,
                  borderRadius: 10,
                  fontFamily: 'inherit',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16,185,129,0.3)',
                }}>Resgatar desconto</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

Object.assign(window, { SceneGamification });
