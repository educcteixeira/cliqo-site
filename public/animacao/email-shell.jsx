// email-shell.jsx — Generic email viewing chrome (NOT Gmail-specific)
// Just an original simple email-reader frame inside which the AMP email lives.

const TABS = [
  { id: 'products', label: 'Produtos' },
  { id: 'payment', label: 'Pagamento' },
  { id: 'gamification', label: 'Gamificação' },
  { id: 'survey', label: 'Pesquisa' },
];

function SceneTabs({ activeId, onPick }) {
  const containerRef = React.useRef(null);
  const tabRefs = React.useRef({});
  const [pill, setPill] = React.useState({ left: 6, width: 0 });

  React.useLayoutEffect(() => {
    const el = tabRefs.current[activeId];
    if (!el) return;
    // offsetLeft/offsetWidth = pre-transform layout coords (the Stage uses a
    // CSS scale on an ancestor, so getBoundingClientRect would be wrong here).
    setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeId]);

  return (
    <div ref={containerRef} style={{
      position: 'relative',
      display: 'inline-flex',
      gap: 4,
      padding: 6,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 999,
      backdropFilter: 'blur(8px)',
    }}>
      {/* Sliding pill */}
      <div style={{
        position: 'absolute',
        top: 6, bottom: 6,
        left: pill.left,
        width: pill.width,
        background: '#f43f5e',
        borderRadius: 999,
        transition: 'left 520ms cubic-bezier(0.65, 0, 0.35, 1), width 520ms cubic-bezier(0.65, 0, 0.35, 1)',
        boxShadow: '0 4px 14px rgba(244,63,94,0.45)',
        zIndex: 0,
      }} />
      {TABS.map((t) => (
        <button
          key={t.id}
          ref={(el) => (tabRefs.current[t.id] = el)}
          onClick={() => onPick && onPick(t.id)}
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 18px',
            background: 'transparent',
            border: 0,
            color: activeId === t.id ? '#ffffff' : 'rgba(255,255,255,0.65)',
            fontFamily: 'inherit',
            fontSize: 13.5,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            cursor: 'pointer',
            transition: 'color 320ms ease',
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function EmailHeader() {
  return (
    <div style={{
      padding: '16px 28px 14px',
      borderBottom: '1px solid #eef0f3',
      background: '#ffffff',
    }}>
      {/* Subject */}
      <div style={{
        fontSize: 17,
        fontWeight: 700,
        color: '#0f172a',
        letterSpacing: '-0.015em',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span>Novidades da semana · interaja direto por aqui</span>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          background: '#fef3c7',
          color: '#92400e',
          padding: '3px 8px',
          borderRadius: 999,
          letterSpacing: '0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          border: '1px solid #fde68a',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#92400e">
            <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" />
          </svg>
          AMP
        </span>
      </div>
      {/* Sender row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
          color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 15,
          flexShrink: 0,
        }}>C</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: '#0f172a' }}>Cliqo</span>
            <span style={{ fontSize: 13, color: '#64748b' }}>&lt;ola@cliqo.io&gt;</span>
          </div>
          <div style={{ fontSize: 12.5, color: '#64748b', marginTop: 2 }}>
            para você · hoje, 09:14
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, color: '#94a3b8' }}>
          {/* simple non-branded icons */}
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: '50%', background: '#cbd5e1',
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Small Cliqo-branded info strip — sits between metadata header and hero.
// Mirrors the typical promo-email "brand band" with selling points.
function EmailBrandStrip() {
  return (
    <div style={{
      padding: '10px 28px',
      background: '#0f172a',
      color: '#cbd5e1',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: '#fff', fontSize: 14, fontWeight: 800, letterSpacing: '-0.02em',
      }}>
        <div style={{
          width: 20, height: 20, borderRadius: 5,
          background: '#f43f5e',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: 11,
        }}>C</div>
        cliqo.io
      </div>
      <div style={{
        flex: 1,
        display: 'flex', justifyContent: 'center', gap: 22,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em',
        color: '#94a3b8',
        whiteSpace: 'nowrap',
      }}>
        <span>entrega em 24h</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>frete grátis acima de R$ 99</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>30 dias pra trocar</span>
      </div>
      <div style={{
        fontSize: 11, color: '#64748b', whiteSpace: 'nowrap',
      }}>Ver no app →</div>
    </div>
  );
}

// Full-bleed hero banner per scene. Stays illustrative (no fake brand artwork).
function SceneHero({ eyebrow, title, subtitle, gradient, accent = 'rgba(255,255,255,0.85)', icon = null, compact = false }) {
  const h = compact ? 72 : 96;
  const titleSize = compact ? 18 : 22;
  const eyebrowMb = compact ? 2 : 4;
  const padY = compact ? '10px' : '14px';
  return (
    <div style={{
      height: h,
      background: gradient,
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(15,23,42,0.06)',
    }}>
      {/* abstract shapes */}
      <div style={{
        position: 'absolute', right: -50, top: -50,
        width: 180, height: 180, borderRadius: '50%',
        background: 'rgba(255,255,255,0.16)',
      }} />
      <div style={{
        position: 'absolute', right: 90, bottom: -60,
        width: 110, height: 110, borderRadius: '50%',
        background: 'rgba(255,255,255,0.10)',
      }} />
      <div style={{
        position: 'absolute', left: -30, bottom: -40,
        width: 100, height: 100, borderRadius: '50%',
        background: 'rgba(0,0,0,0.08)',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        padding: padY + ' 28px',
        display: 'flex', alignItems: 'center', gap: 20,
        color: '#fff',
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: accent,
            marginBottom: eyebrowMb,
            fontFamily: 'JetBrains Mono, monospace',
          }}>{eyebrow}</div>
          <div style={{
            fontSize: titleSize, fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}>{title}</div>
          {subtitle && (
            <div style={{
              fontSize: 11.5, color: 'rgba(255,255,255,0.85)', marginTop: 4,
              lineHeight: 1.35,
              maxWidth: 520,
            }}>{subtitle}</div>
          )}
        </div>
        {icon && (
          <div style={{ flexShrink: 0, opacity: 0.95 }}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { SceneTabs, EmailHeader, EmailBrandStrip, SceneHero, TABS });
