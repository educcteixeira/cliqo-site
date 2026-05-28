// scene-products.jsx — Scene 1: category-filtered carousel → lead form

const CATEGORIES = [
  { id: 'eletronicos', label: 'Eletrônicos', icon: '🎧' },
  { id: 'casa',         label: 'Casa',         icon: '☕' },
  { id: 'moda',         label: 'Moda',         icon: '👟' },
];

const PRODUCT_BG = '#ffffff';

const PRODUCTS_BY_CAT = {
  eletronicos: [
    { name: 'Fone Cliqo Pro · Wireless ANC',
      price: '449,90', pixPrice: '404,91',
      badge: 'Lançamento',
      image: 'products/fone.png',
      bg: PRODUCT_BG,
      gradient: 'linear-gradient(135deg, #be185d 0%, #831843 100%)' },
    { name: 'Smartwatch Cliqo Pulse 2',
      price: '699,00', pixPrice: '629,10',
      badge: 'Mais vendido',
      image: 'products/relogio.png',
      bg: PRODUCT_BG,
      gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' },
  ],
  casa: [
    { name: 'Cafeteira Cliqo Espresso Pro',
      price: '299,90', pixPrice: '269,91',
      badge: 'Restock',
      image: 'products/cafeteira.png',
      bg: PRODUCT_BG,
      gradient: 'linear-gradient(135deg, #92400e 0%, #451a03 100%)' },
    { name: 'Air Fryer Cliqo Slim 4L',
      price: '349,00', pixPrice: '314,10',
      badge: 'Oferta',
      image: 'products/airfryer.png',
      bg: PRODUCT_BG,
      gradient: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)' },
  ],
  moda: [
    { name: 'Tênis Cliqo Run · Edição limitada',
      price: '249,90', pixPrice: '224,91',
      badge: 'Lançamento',
      image: 'products/tenis.png',
      bg: PRODUCT_BG,
      gradient: 'linear-gradient(135deg, #fb7185 0%, #be123c 100%)' },
    { name: 'Mochila Urban Pack 22L',
      price: '189,00', pixPrice: '170,10',
      badge: 'Mais vendido',
      bg: PRODUCT_BG,
      gradient: 'linear-gradient(135deg, #fda4af 0%, #f43f5e 100%)' },
  ],
};

function ProductImageBox({ gradient, image, bg }) {
  const hasImage = !!image;
  return (
    <div style={{
      width: 290, height: 180,
      background: hasImage ? (bg || '#fff') : gradient,
      borderRadius: 12,
      border: hasImage ? '1px solid #e5e7eb' : 'none',
      boxShadow: hasImage ? '0 1px 2px rgba(15,23,42,0.04)' : 'none',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
      animation: 'fadeSlideIn 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
    }}>
      {hasImage ? (
        <img
          src={image}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain',
            padding: 8,
            boxSizing: 'border-box',
          }}
        />
      ) : (
        <>
          <div style={{
            position: 'absolute', right: -40, top: -40,
            width: 140, height: 140, borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
          }} />
          <div style={{
            position: 'absolute', left: -30, bottom: -40,
            width: 110, height: 110, borderRadius: '50%',
            background: 'rgba(255,255,255,0.10)',
          }} />
          <div style={{
            position: 'absolute', left: 14, top: 14,
            fontSize: 9, fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            fontFamily: 'JetBrains Mono, monospace',
          }}>imagem do produto</div>
        </>
      )}
    </div>
  );
}

function ProductsArrow({ direction, btnRef, disabled }) {
  const isLeft = direction === 'left';
  return (
    <button
      ref={btnRef}
      disabled={disabled}
      style={{
        width: 28, height: 110,
        background: disabled ? 'rgba(15,23,42,0.12)' : 'rgba(15,23,42,0.7)',
        color: disabled ? 'rgba(255,255,255,0.7)' : '#fff',
        border: 0, borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'default' : 'pointer',
        flexShrink: 0,
        transition: 'background 240ms ease',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {isLeft
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

const productsCaretStyle = {
  display: 'inline-block', width: 1.5, height: 13,
  background: '#0f172a', marginLeft: 1, verticalAlign: 'middle',
  animation: 'pulse 0.9s ease-in-out infinite',
};

function ProductsField({ refEl, label, value, placeholder, typing, maxLen }) {
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{
        fontSize: 10.5, fontWeight: 700, color: '#475569',
        marginBottom: 3, letterSpacing: '0.02em',
      }}>{label}</div>
      <div
        ref={refEl}
        style={{
          width: '100%',
          minHeight: 32,
          padding: '7px 11px',
          background: '#fff',
          border: '1.5px solid ' + (typing ? '#f43f5e' : '#e2e8f0'),
          borderRadius: 8,
          fontSize: 13,
          color: '#0f172a',
          lineHeight: 1.3,
          boxSizing: 'border-box',
          transition: 'border-color 200ms ease',
        }}
      >
        {value || <span style={{ color: '#cbd5e1' }}>{placeholder}</span>}
        {typing && value && value.length < maxLen && <span style={productsCaretStyle} />}
      </div>
    </div>
  );
}

function SceneProducts({ runKey, onDone }) {
  const [catIdx, setCatIdx] = React.useState(0);
  const [prodIdx, setProdIdx] = React.useState(0);
  const [mode, setMode] = React.useState('browse'); // 'browse' | 'form' | 'sent'
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [activeField, setActiveField] = React.useState(null);

  const cat0Ref = React.useRef(null);
  const cat1Ref = React.useRef(null);
  const cat2Ref = React.useRef(null);
  const catRefs = [cat0Ref, cat1Ref, cat2Ref];
  const nextRef = React.useRef(null);
  const interestRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const submitRef = React.useRef(null);

  const cat = CATEGORIES[catIdx];
  const products = PRODUCTS_BY_CAT[cat.id];
  const p = products[prodIdx];

  React.useEffect(() => {
    setCatIdx(0); setProdIdx(0); setMode('browse');
    setName(''); setPhone(''); setActiveField(null);
    let cancelled = false;

    (async () => {
      await wait(900);
      if (cancelled || !window.cursor) return;

      // 1. Advance within Eletrônicos
      await window.cursor.clickEl(nextRef.current);
      if (cancelled) return;
      setProdIdx(1);
      await wait(900);

      // 2. Switch to Casa
      await window.cursor.clickEl(catRefs[1].current);
      if (cancelled) return;
      setCatIdx(1); setProdIdx(0);
      await wait(900);

      // 3. Advance within Casa
      await window.cursor.clickEl(nextRef.current);
      if (cancelled) return;
      setProdIdx(1);
      await wait(900);

      // 4. Switch to Moda
      await window.cursor.clickEl(catRefs[2].current);
      if (cancelled) return;
      setCatIdx(2); setProdIdx(0);
      await wait(1100);

      // 5. Pit stop on the tênis (so it reads as "chose this one"), then click Tenho interesse
      if (interestRef.current) {
        const r = interestRef.current.getBoundingClientRect();
        // Hover just above the button so the cursor doesn't sweep through Ver produto
        await window.cursor.moveToXY(r.left + r.width / 2, r.top - 70, { duration: 600 });
        await wait(450);
      }
      // Now land firmly on Tenho interesse — small offsetY pushes cursor away from Ver produto edge
      await window.cursor.clickEl(interestRef.current, { offsetY: 2, duration: 380 });
      if (cancelled) return;
      setMode('form');
      await wait(700);

      // 6. Focus name field
      if (!nameRef.current) return;
      await window.cursor.clickEl(nameRef.current, { offsetX: -70 });
      if (cancelled) return;
      setActiveField('name');
      const nameStr = 'João Silva';
      for (let i = 1; i <= nameStr.length; i++) {
        if (cancelled) return;
        setName(nameStr.slice(0, i));
        await wait(42 + Math.random() * 28);
      }
      await wait(400);

      // 7. Focus phone field
      if (!phoneRef.current) return;
      await window.cursor.clickEl(phoneRef.current, { offsetX: -70 });
      if (cancelled) return;
      setActiveField('phone');
      const phoneStr = '(11) 98765-xxxx';
      for (let i = 1; i <= phoneStr.length; i++) {
        if (cancelled) return;
        setPhone(phoneStr.slice(0, i));
        await wait(55 + Math.random() * 22);
      }
      await wait(500);

      // 8. Submit
      if (!submitRef.current) return;
      setActiveField(null);
      await window.cursor.clickEl(submitRef.current);
      if (cancelled) return;
      setMode('sent');
      await wait(2400);

      if (cancelled) return;
      onDone && onDone();
    })();

    return () => { cancelled = true; };
  }, [runKey]);

  return (
    <>
      <SceneHero
        eyebrow="catálogo cliqo"
        title="Categoria, produto, contato — daqui."
        gradient="linear-gradient(120deg, #f43f5e 0%, #be123c 70%, #881337 100%)"
        compact
      />
      <div style={{ padding: '12px 22px 16px' }}>
        <div style={{
          background: '#f8fafc',
          border: '1px solid #eef0f3',
          borderRadius: 14,
          padding: 14,
        }}>
          {/* Category chips */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: 7, marginBottom: 10,
          }}>
            {CATEGORIES.map((c, i) => {
              const active = catIdx === i;
              return (
                <button
                  key={c.id}
                  ref={catRefs[i]}
                  style={{
                    width: 64, height: 60,
                    padding: '6px 4px',
                    background: active ? '#f43f5e' : '#fff',
                    color: active ? '#fff' : '#0f172a',
                    border: '1.5px solid ' + (active ? '#f43f5e' : '#e2e8f0'),
                    borderRadius: 9,
                    fontFamily: 'inherit',
                    fontSize: 10.5, fontWeight: 600,
                    letterSpacing: '-0.005em',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: 3,
                    cursor: 'pointer',
                    transition: 'all 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
                    boxShadow: active
                      ? '0 5px 14px rgba(244,63,94,0.32)'
                      : '0 1px 0 rgba(15,23,42,0.04)',
                    transform: active ? 'translateY(-1px)' : 'none',
                  }}
                >
                  <span style={{ fontSize: 17, lineHeight: 1 }}>{c.icon}</span>
                  {c.label}
                </button>
              );
            })}
          </div>

          {mode === 'browse' && (
            <div style={{
              animation: 'fadeSlideIn 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
            }}>
              {/* Carousel: arrows + image */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, marginBottom: 8,
              }}>
                <ProductsArrow direction="left" disabled={prodIdx === 0} />
                <div key={cat.id + '-' + prodIdx} style={{ display: 'flex' }}>
                  <ProductImageBox gradient={p.gradient} image={p.image} bg={p.bg} />
                </div>
                <ProductsArrow
                  direction="right"
                  btnRef={nextRef}
                  disabled={prodIdx === products.length - 1}
                />
              </div>

              {/* Price + Pix + Name */}
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <div style={{
                  fontSize: 19, fontWeight: 700, color: '#f43f5e',
                  letterSpacing: '-0.022em', lineHeight: 1.1,
                }}>R$ {p.price}</div>
                <div style={{
                  fontSize: 11, fontWeight: 600, color: '#10b981',
                  marginTop: 2,
                  whiteSpace: 'nowrap',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: 4, marginTop: -1 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>no Pix: R$ {p.pixPrice} <span style={{ opacity: 0.7 }}>(10% off)</span></span>
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 600, color: '#0f172a',
                  marginTop: 4, letterSpacing: '-0.008em',
                }}>{p.name}</div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 5 }}>
                <button style={{
                  padding: '7px 12px',
                  background: '#fff', color: '#0f172a',
                  border: '1px solid #e2e8f0', borderRadius: 9,
                  fontFamily: 'inherit', fontSize: 11.5, fontWeight: 600,
                  letterSpacing: '-0.005em', cursor: 'pointer',
                  boxShadow: '0 1px 0 rgba(15,23,42,0.04)',
                }}>Ver produto →</button>
                <button
                  ref={interestRef}
                  style={{
                    padding: '9px 14px',
                    background: '#f43f5e', color: '#fff',
                    border: 0, borderRadius: 9,
                    fontFamily: 'inherit', fontSize: 12.5, fontWeight: 700,
                    letterSpacing: '-0.005em', cursor: 'pointer',
                    boxShadow: '0 5px 14px rgba(244,63,94,0.3)',
                  }}>
                  Tenho interesse
                </button>
              </div>
            </div>
          )}

          {mode === 'form' && (
            <div style={{
              animation: 'fadeSlideUp 320ms cubic-bezier(0.2, 0.7, 0.3, 1)',
            }}>
              {/* Compact product summary */}
              <div style={{
                padding: 8, marginBottom: 8,
                background: '#fff', borderRadius: 10,
                border: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 7,
                  background: p.image ? (p.bg || '#fff') : p.gradient,
                  border: p.image ? '1px solid #e5e7eb' : 'none',
                  flexShrink: 0,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {p.image && (
                    <img src={p.image} alt="" style={{
                      width: '100%', height: '100%',
                      objectFit: 'contain',
                      padding: 2,
                      boxSizing: 'border-box',
                    }} />
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700, color: '#94a3b8',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontFamily: 'JetBrains Mono, monospace',
                    marginBottom: 1,
                  }}>produto de interesse</div>
                  <div style={{
                    fontSize: 12.5, fontWeight: 600, color: '#0f172a',
                    letterSpacing: '-0.005em',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{p.name}</div>
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: '#f43f5e',
                  letterSpacing: '-0.01em', flexShrink: 0,
                }}>R$ {p.price}</div>
              </div>

              <ProductsField
                refEl={nameRef}
                label="Seu nome"
                value={name}
                placeholder="Como podemos te chamar?"
                typing={activeField === 'name'}
                maxLen={16}
              />
              <ProductsField
                refEl={phoneRef}
                label="WhatsApp"
                value={phone}
                placeholder="(11) 99999-9999"
                typing={activeField === 'phone'}
                maxLen={15}
              />

              <button
                ref={submitRef}
                style={{
                  width: '100%', padding: '10px 14px',
                  background: '#f43f5e', color: '#fff',
                  border: 0, borderRadius: 10,
                  fontFamily: 'inherit', fontSize: 13.5, fontWeight: 700,
                  letterSpacing: '-0.005em', cursor: 'pointer',
                  boxShadow: '0 6px 16px rgba(244,63,94,0.3)',
                  marginTop: 4,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8,
                }}
              >
                Entrar em contato
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <div style={{
                textAlign: 'center', fontSize: 11, color: '#94a3b8',
                marginTop: 6, cursor: 'pointer',
              }}>Cancelar</div>
            </div>
          )}

          {mode === 'sent' && (
            <div style={{
              padding: '26px 8px 18px',
              textAlign: 'center',
              animation: 'fadeSlideUp 360ms cubic-bezier(0.2, 0.7, 0.3, 1)',
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%',
                background: '#dcfce7',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 12,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div style={{
                fontSize: 18, fontWeight: 700, color: '#0f172a',
                letterSpacing: '-0.02em', marginBottom: 4,
              }}>Recebemos seu interesse!</div>
              <div style={{
                fontSize: 12.5, color: '#64748b',
                maxWidth: 340, margin: '0 auto', lineHeight: 1.5,
              }}>
                Nossa equipe entrará em contato pelo WhatsApp em até 1 hora útil.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { SceneProducts });
