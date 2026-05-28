// scene-survey.jsx — Scene 4: NPS survey

const NPS_TYPED = 'Atendimento rápido e ótima curadoria. Voltarei!';

function npsColor(n) {
  if (n <= 6) return { idle: '#fecaca', active: '#ef4444' };
  if (n <= 8) return { idle: '#fde68a', active: '#f59e0b' };
  return { idle: '#bbf7d0', active: '#10b981' };
}

function SceneSurvey({ runKey, onDone }) {
  const [score, setScore] = React.useState(null);
  const [typed, setTyped] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const scoreRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const sendRef = React.useRef(null);

  React.useEffect(() => {
    setScore(null);
    setTyped('');
    setSubmitted(false);
    let cancelled = false;
    (async () => {
      await wait(900);
      if (cancelled || !window.cursor) return;
      // Click on score 9
      await window.cursor.clickEl(scoreRef.current);
      if (cancelled) return;
      setScore(9);
      await wait(700);
      if (cancelled) return;
      // Click in text field
      await window.cursor.clickEl(inputRef.current, { offsetX: -40 });
      if (cancelled) return;
      // Type out characters
      for (let i = 1; i <= NPS_TYPED.length; i++) {
        if (cancelled) return;
        setTyped(NPS_TYPED.slice(0, i));
        await wait(38 + Math.random() * 35);
      }
      await wait(500);
      if (cancelled) return;
      await window.cursor.clickEl(sendRef.current);
      if (cancelled) return;
      setSubmitted(true);
      await wait(2400);
      if (cancelled) return;
      onDone && onDone();
    })();
    return () => { cancelled = true; };
  }, [runKey]);

  return (
    <>
      <SceneHero
        eyebrow="pesquisa rápida"
        title="30 segundos pra mudar o que entregamos"
        subtitle="Sua opinião define a próxima curadoria."
        gradient="linear-gradient(120deg, #0ea5e9 0%, #0d9488 60%, #10b981 100%)"
      />
      <div style={{ padding: '14px 24px 18px' }}>
      <div style={{
        background: '#f8fafc',
        border: '1px solid #eef0f3',
        borderRadius: 16,
        padding: 18,
      }}>
        {!submitted && (
          <>
            <div style={{
              fontSize: 18, fontWeight: 700, color: '#0f172a',
              letterSpacing: '-0.015em', marginBottom: 6,
            }}>
              De 0 a 10, o quanto você recomendaria a Cliqo?
            </div>
            <div style={{
              fontSize: 13, color: '#64748b', marginBottom: 18,
            }}>
              0 = nunca recomendaria · 10 = recomendaria com certeza
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(11, 1fr)',
              gap: 6,
              marginBottom: 8,
            }}>
              {Array.from({ length: 11 }, (_, n) => {
                const c = npsColor(n);
                const isPicked = score === n;
                const ref = n === 9 ? scoreRef : null;
                return (
                  <button
                    key={n}
                    ref={ref}
                    style={{
                      aspectRatio: '1',
                      borderRadius: 10,
                      border: '1.5px solid ' + (isPicked ? c.active : 'transparent'),
                      background: isPicked ? c.active : '#fff',
                      color: isPicked ? '#fff' : '#0f172a',
                      fontFamily: 'inherit',
                      fontSize: 16,
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      cursor: 'pointer',
                      transition: 'all 240ms cubic-bezier(0.2, 0.7, 0.3, 1)',
                      boxShadow: isPicked
                        ? `0 6px 16px ${c.active}66`
                        : '0 1px 0 rgba(15,23,42,0.04)',
                      transform: isPicked ? 'translateY(-2px)' : 'none',
                    }}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 11,
              fontFamily: 'JetBrains Mono, monospace',
              color: '#94a3b8',
              marginBottom: 16,
            }}>
              <span>nada provável</span>
              <span>muito provável</span>
            </div>

            {score !== null && (
              <div style={{
                animation: 'fadeSlideUp 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
              }}>
                <div style={{
                  fontSize: 14, fontWeight: 600, color: '#0f172a',
                  marginBottom: 8, letterSpacing: '-0.01em',
                }}>
                  O que te fez dar nota {score}?
                </div>
                <div
                  ref={inputRef}
                  style={{
                    width: '100%',
                    minHeight: 60,
                    padding: '10px 14px',
                    background: '#fff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: 10,
                    fontFamily: 'inherit',
                    fontSize: 14,
                    color: '#0f172a',
                    lineHeight: 1.5,
                    marginBottom: 12,
                    position: 'relative',
                  }}
                >
                  {typed || (
                    <span style={{ color: '#cbd5e1' }}>conte pra gente em poucas palavras…</span>
                  )}
                  {typed && typed.length < NPS_TYPED.length && (
                    <span style={{
                      display: 'inline-block',
                      width: 1.5,
                      height: 16,
                      background: '#0f172a',
                      marginLeft: 1,
                      verticalAlign: 'middle',
                      animation: 'pulse 0.9s ease-in-out infinite',
                    }} />
                  )}
                </div>
                <button
                  ref={sendRef}
                  style={{
                    padding: '12px 22px',
                    background: '#0f172a',
                    color: '#fff',
                    border: 0,
                    borderRadius: 10,
                    fontFamily: 'inherit',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  Enviar resposta
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
        {submitted && (
          <div style={{
            padding: '32px 8px',
            textAlign: 'center',
            animation: 'fadeSlideUp 360ms cubic-bezier(0.2, 0.7, 0.3, 1)',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: '#dcfce7',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 14,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div style={{
              fontSize: 22, fontWeight: 700, color: '#0f172a',
              letterSpacing: '-0.02em', marginBottom: 6,
            }}>Obrigado pelo seu feedback!</div>
            <div style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.5 }}>
              Sua resposta já chegou no nosso time.
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

Object.assign(window, { SceneSurvey });
