// scene-payment.jsx — Scene 2: AMP buy + Pix QR

function QRPlaceholder() {
  // Stylized branded QR with Cliqo bullseye in the center (KFC-style).
  // Original synthetic art, not a real QR code.
  const size = 21;
  const cell = 9;
  const cells = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const v = Math.abs(Math.sin(x * 7.3 + y * 3.1 + 1.7) * 1000) % 1;
      cells.push({ x, y, on: v > 0.5 });
    }
  }
  // Center hole where the logo sits
  const cx = size / 2, cy = size / 2;
  const logoR = 4.2; // radius (in cell units) cleared for the logo

  const px = size * cell;
  return (
    <div style={{
      width: px + 16,
      height: px + 16,
      padding: 8,
      background: '#fff',
      borderRadius: 12,
      border: '1px solid #e2e8f0',
      position: 'relative',
      flexShrink: 0,
    }}>
      <svg width={px} height={px} style={{ display: 'block' }}>
        {/* Three corner finder squares */}
        {[[0, 0], [size - 7, 0], [0, size - 7]].map(([fx, fy], i) => (
          <g key={i}>
            <rect x={fx * cell} y={fy * cell} width={7 * cell} height={7 * cell} fill="#0f172a" rx="4" />
            <rect x={(fx + 1) * cell} y={(fy + 1) * cell} width={5 * cell} height={5 * cell} fill="#fff" rx="3" />
            <rect x={(fx + 2) * cell} y={(fy + 2) * cell} width={3 * cell} height={3 * cell} fill="#f43f5e" rx="2" />
          </g>
        ))}
        {cells.map(({ x, y, on }, i) => {
          // Skip the finder square zones (7x7 in each corner)
          const inFinder =
            (x < 7 && y < 7) ||
            (x >= size - 7 && y < 7) ||
            (x < 7 && y >= size - 7);
          if (inFinder) return null;
          // Skip center logo area
          const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
          if (d < logoR) return null;
          if (!on) return null;
          return (
            <circle
              key={i}
              cx={x * cell + cell / 2}
              cy={y * cell + cell / 2}
              r={cell * 0.36}
              fill="#0f172a"
            />
          );
        })}
        {/* Center Cliqo bullseye logo */}
        <g transform={`translate(${cx * cell}, ${cy * cell})`}>
          <circle r={logoR * cell * 0.95} fill="#fff" />
          <circle r={logoR * cell * 0.78} fill="none" stroke="#fecdd3" strokeWidth={cell * 0.7} />
          <circle r={logoR * cell * 0.50} fill="none" stroke="#fda4af" strokeWidth={cell * 0.55} />
          <circle r={logoR * cell * 0.26} fill="#f43f5e" />
        </g>
      </svg>
    </div>
  );
}

function ScenePayment({ runKey, onDone }) {
  // step: 0 = product only, 1 = methods shown, 2 = QR shown
  const [step, setStep] = React.useState(0);
  const buyRef = React.useRef(null);
  const pixRef = React.useRef(null);

  React.useEffect(() => {
    setStep(0);
    let cancelled = false;
    (async () => {
      await wait(1100);
      if (cancelled || !window.cursor) return;
      await window.cursor.clickEl(buyRef.current);
      if (cancelled) return;
      setStep(1);
      await wait(1200);
      if (cancelled) return;
      await window.cursor.clickEl(pixRef.current);
      if (cancelled) return;
      setStep(2);
      await wait(2200);
      if (cancelled) return;
      onDone && onDone();
    })();
    return () => { cancelled = true; };
  }, [runKey]);

  return (
    <>
      <SceneHero
        eyebrow="pré-venda exclusiva"
        title="Coleção Verão 2026 já no ar"
        subtitle="Pague com Pix ou cartão sem sair da caixa de entrada."
        gradient="linear-gradient(120deg, #fbbf24 0%, #f97316 35%, #f43f5e 100%)"
      />
      <div style={{ padding: '18px 24px 22px' }}>
      <div style={{
        background: '#f8fafc',
        border: '1px solid #eef0f3',
        borderRadius: 16,
        padding: 18,
        display: 'flex',
        gap: 18,
        alignItems: 'stretch',
      }}>
        {/* Product image */}
        <div style={{ flexShrink: 0, width: 260 }}>
          <div style={{
            width: '100%',
            height: 280,
            borderRadius: 14,
            background: '#fff',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(15,23,42,0.04)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img
              src="products/fone-hero.png"
              alt=""
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'contain',
                padding: 10,
                boxSizing: 'border-box',
              }}
            />
            <div style={{
              position: 'absolute', left: 12, bottom: 12,
              fontSize: 11, fontWeight: 700,
              color: '#fff',
              background: 'rgba(15,23,42,0.7)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: 999,
              letterSpacing: '0.04em',
            }}>EDIÇÃO ESPECIAL</div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: '#be123c',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: 6,
          }}>Pré-venda</div>
          <div style={{
            fontSize: 22, fontWeight: 700, color: '#0f172a',
            letterSpacing: '-0.02em', lineHeight: 1.15,
            marginBottom: 8,
          }}>Coleção Verão 2026</div>
          <div style={{
            fontSize: 13, color: '#64748b', lineHeight: 1.5,
            marginBottom: 14,
          }}>
            Peças exclusivas em pré-venda · entrega a partir de 12 de dezembro.
          </div>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16,
          }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: '#f43f5e', letterSpacing: '-0.025em' }}>
              R$ 349
            </span>
            <span style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'line-through' }}>
              R$ 449
            </span>
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#15803d',
              background: '#dcfce7', padding: '2px 8px', borderRadius: 999,
            }}>−22%</span>
          </div>

          {/* Buy now / methods / QR */}
          <div style={{ marginTop: 'auto' }}>
            {step === 0 && (
              <button
                ref={buyRef}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: 'linear-gradient(180deg, #fb7185 0%, #f43f5e 100%)',
                  color: '#fff',
                  border: 0,
                  borderRadius: 12,
                  fontFamily: 'inherit',
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(244,63,94,0.35)',
                  animation: 'fadeSlideIn 280ms ease',
                }}
              >
                Comprar agora
              </button>
            )}
            {step === 1 && (
              <div style={{
                animation: 'fadeSlideUp 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
              }}>
                <div style={{
                  fontSize: 12.5, fontWeight: 600, color: '#475569', marginBottom: 10,
                }}>Como você quer pagar?</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <button
                    ref={pixRef}
                    style={payMethodBtn('#10b981', true)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" />
                    </svg>
                    Pagar com Pix
                  </button>
                  <button style={payMethodBtn('#2563eb', false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="14" rx="2" />
                      <line x1="2" y1="11" x2="22" y2="11" />
                    </svg>
                    Cartão de crédito
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                padding: 14,
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                animation: 'fadeSlideUp 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
              }}>
                <QRPlaceholder />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 4,
                  }}>Escaneie e pague</div>
                  <div style={{
                    fontSize: 12, color: '#64748b', lineHeight: 1.45, marginBottom: 8,
                  }}>Aponte a câmera do seu banco no QR. Expira em 15 min.</div>
                  <div style={{
                    fontSize: 11,
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#475569',
                    background: '#f1f5f9',
                    padding: '6px 8px',
                    borderRadius: 6,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>00020126…BR.GOV.BCB.PIX…cliqo</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function payMethodBtn(color, primary) {
  return {
    padding: '14px 16px',
    background: primary ? color : '#fff',
    color: primary ? '#fff' : color,
    border: primary ? 0 : `1.5px solid ${color}`,
    borderRadius: 12,
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '-0.01em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    boxShadow: primary ? `0 6px 16px ${color}55` : '0 1px 0 rgba(15,23,42,0.04)',
  };
}

Object.assign(window, { ScenePayment });
