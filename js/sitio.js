/* =====================================================================
   Parroquia San Lucas · programación compartida por todas las páginas
   ===================================================================== */

// ================== CONFIGURACIÓN (editá acá) ==================

// Número de WhatsApp que recibe los pedidos de la tienda:
// código de país + área + número, sin espacios ni "+" (ej: 5491112345678)
const WHATSAPP_TIENDA = '5491100000000';

// Mail que recibe los mensajes del formulario de Colabora.
// La primera vez que alguien escriba, llega un mail de "FormSubmit" para activar el formulario: hay que confirmarlo una sola vez.
const EMAIL_FORMULARIO = 'parroquiasanlucasba@gmail.com';

// AVISOS: aparecen en la página de inicio. Cada aviso desaparece solo después de la fecha "hasta".
// "es" es el texto en español y "pt" en portugués. "enlace" es opcional.
const AVISOS = [
  { es: '🇻🇦 ¡De finde con el Papa! Del 7 al 11 de noviembre abrimos nuestra casa a jóvenes peregrinos de 18 a 35 años. ¡Sumate!',
    pt: '🇻🇦 Fim de semana com o Papa! De 7 a 11 de novembro abrimos a nossa casa para jovens peregrinos de 18 a 35 anos. Participe!',
    enlace: 'colabora/', hasta: '2026-11-11' },
];

// PRODUCTOS DE LA TIENDA. Para agregar uno, copiá una línea.
// precio: número sin puntos (ej: 15000) o 'voluntad' para "a voluntad". foto: archivo dentro de img/tienda/
const PRODUCTOS = [
  // ---- Librería ----
  { id: 'un-mate-con-dios', tipo: 'Librería', foto: 'un-mate-con-dios.jpg', precio: 15000,
    es: ['Un mate con Dios', 'Oración y formación para jóvenes. Santi M. Obiglio.'],
    pt: ['Un mate con Dios', 'Oração e formação para jovens (em espanhol). Santi M. Obiglio.'] },
  { id: 'un-dia-con-dios', tipo: 'Librería', foto: 'un-dia-con-dios.jpg', precio: 15000,
    es: ['Un día con Dios', 'Libro de oración.'], pt: ['Un día con Dios', 'Livro de oração (em espanhol).'] },
  { id: 'vida-misionera', tipo: 'Librería', foto: 'vida-misionera.jpg', precio: 15000,
    es: ['Vida misionera', 'Papa Francisco.'], pt: ['Vida misionera', 'Papa Francisco (em espanhol).'] },
  { id: 'tu-eres-mi-amado', tipo: 'Librería', foto: 'tu-eres-mi-amado.jpg', precio: 15000,
    es: ['Tú eres mi amado', 'Henri J. M. Nouwen.'], pt: ['Tú eres mi amado', 'Henri J. M. Nouwen (em espanhol).'] },
  { id: 'liberarnos', tipo: 'Librería', foto: 'liberarnos.jpg', precio: 15000,
    es: ['Liberarnos', 'Papa Francisco.'], pt: ['Liberarnos', 'Papa Francisco (em espanhol).'] },
  { id: 'pastoral-juvenil', tipo: 'Librería', foto: 'pastoral-juvenil.jpg', precio: 5000,
    es: ['Pastoral Juvenil', 'Vocación y misión. Santiago M. Obiglio.'], pt: ['Pastoral Juvenil', 'Vocação e missão (em espanhol). Santiago M. Obiglio.'] },
  // ---- Santería ----
  { id: 'velas', tipo: 'Santería', foto: 'velas.jpg', precio: 12000,
    es: ['Velas aromáticas', 'Elegí el aroma.', ['Flores Blancas (San José)', 'Rosas (María)', 'Nardo (Jesús resucitado)']],
    pt: ['Velas aromáticas', 'Escolha o aroma.', ['Flores brancas (São José)', 'Rosas (Maria)', 'Nardo (Jesus ressuscitado)']] },
  { id: 'san-jose-dormido', tipo: 'Santería', foto: 'san-jose-dormido.jpg', precio: 40000,
    es: ['San José dormido', 'Figura pintada a mano.'], pt: ['São José dormindo', 'Imagem pintada à mão.'] },
  { id: 'pulsera-rosario', tipo: 'Santería', foto: 'rosario-pulsera.jpg', precio: 12000,
    es: ['Rosario pulsera', 'Con cruz y medalla.'], pt: ['Terço pulseira', 'Com cruz e medalha.'] },
  { id: 'imagen-carlo', tipo: 'Santería', foto: 'imagen-carlo-acutis.jpg', precio: 40000,
    es: ['Imagen Carlo Acutis', 'Figura pintada a mano.'], pt: ['Imagem de Carlo Acutis', 'Imagem pintada à mão.'] },
  { id: 'detentes', tipo: 'Santería', foto: 'detentes.jpg', precio: 7000,
    es: ['Detentes Sagrado Corazón', ''], pt: ['Detentes do Sagrado Coração', ''] },
  { id: 'cuadro-san-jose', tipo: 'Santería', foto: 'cuadro-san-jose.jpg', precio: 12000,
    es: ['Cuadro San José', 'San José con el Niño.'], pt: ['Quadro de São José', 'São José com o Menino.'] },
  { id: 'remera-san-lucas', tipo: 'Santería', foto: 'remera-san-lucas.jpg', precio: 25000,
    es: ['Remera San Lucas', 'Adelante: «peregrinos.» Atrás: mapa de Plaza Houssay.'], pt: ['Camiseta San Lucas', 'Frente: «peregrinos.» Costas: mapa da Plaza Houssay.'] },
  { id: 'remera-lujan', tipo: 'Santería', foto: 'remera-virgen-de-lujan.jpg', precio: 30000,
    es: ['Remera Virgen de Luján', 'Adelante: «mi casa.» Atrás: Virgen de Luján.'], pt: ['Camiseta Virgem de Luján', 'Frente: «mi casa.» Costas: Virgem de Luján.'] },
  { id: 'cuadro-pier-giorgio', tipo: 'Santería', foto: 'cuadro-pier-giorgio.jpg', precio: 15000,
    es: ['Cuadro Pier Giorgio', 'Marco de madera.'], pt: ['Quadro de Pier Giorgio', 'Moldura de madeira.'] },
  { id: 'cuadro-carlo', tipo: 'Santería', foto: 'cuadro-carlo-acutis.jpg', precio: 15000,
    es: ['Cuadro Carlo Acutis', 'Marco de madera.'], pt: ['Quadro de Carlo Acutis', 'Moldura de madeira.'] },
  { id: 'mate-bombilla', tipo: 'Santería', foto: 'mate-bombilla.jpg', precio: 30000,
    es: ['Mate + bombilla', 'Mate de cerámica Un mate con Dios.'], pt: ['Cuia de chimarrão + bomba', 'Cuia de cerâmica «Un mate con Dios».'] },
];
// ===========================================================================

const PT = document.documentElement.lang.startsWith('pt');
const ROOT = document.documentElement.dataset.root || '';   // ruta hasta la carpeta principal del sitio
const t = (es, pt) => (PT ? pt : es);
const $ = id => document.getElementById(id);

// ---------- Encabezado y menú ----------
(() => {
  const header = $('header');
  const sombra = () => header.classList.toggle('shadow-md', window.scrollY > 10);
  window.addEventListener('scroll', sombra, { passive: true }); sombra();

  const btn = $('menuBtn'), menu = $('menu');
  const icono = btn.querySelector('i');
  const cerrar = () => {
    menu.hidden = true; btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', t('Abrir menú', 'Abrir menu'));
    icono.classList.replace('fa-xmark', 'fa-bars');   // se cambia solo el dibujo, sin reemplazar el botón
  };
  const abrir = () => {
    menu.hidden = false; btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', t('Cerrar menú', 'Fechar menu'));
    icono.classList.replace('fa-bars', 'fa-xmark');
  };
  btn.addEventListener('click', e => { e.stopPropagation(); menu.hidden ? abrir() : cerrar(); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrar));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('#menu, #menuBtn')) cerrar(); });
  const anio = $('anio'); if (anio) anio.textContent = new Date().getFullYear();
})();

// ---------- Avisos (inicio) ----------
(() => {
  const cont = $('avisos'); if (!cont) return;
  const h = new Date(); const hoy = `${h.getFullYear()}-${String(h.getMonth() + 1).padStart(2, '0')}-${String(h.getDate()).padStart(2, '0')}`;
  const activos = AVISOS.filter(a => !a.hasta || a.hasta >= hoy);
  if (!activos.length) return;
  cont.hidden = false;
  cont.innerHTML = activos.map(a => {
    const inner = `<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracota text-white"><i class="fa-solid fa-bullhorn text-sm" aria-hidden="true"></i></span>
      <span class="flex-1 text-sm font-semibold leading-snug">${t(a.es, a.pt)}</span>
      ${a.enlace ? '<i class="fa-solid fa-arrow-right text-terracota" aria-hidden="true"></i>' : ''}`;
    const cls = 'flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-left text-pizarra-oscuro shadow-md ring-1 ring-black/5';
    const href = a.enlace && !/^(https?:|#)/.test(a.enlace) ? ROOT + (PT ? 'pt/' : '') + a.enlace : a.enlace;
    return a.enlace ? `<a href="${href}" class="${cls} hover:bg-white transition">${inner}</a>` : `<div class="${cls}">${inner}</div>`;
  }).join('');
})();

// ---------- Proyecto Santuario: el poema aparece solo si tiene texto ----------
document.querySelectorAll('.poema').forEach(f => { if (f.querySelector('.poema-texto').textContent.trim()) f.hidden = false; });

// ---------- Botones "Ver más" que despliegan un bloque ----------
document.querySelectorAll('.desplegar').forEach(b => b.addEventListener('click', () => {
  const bloque = $(b.getAttribute('aria-controls')); if (!bloque) return;
  const abrir = bloque.hidden; bloque.hidden = !abrir;
  b.setAttribute('aria-expanded', abrir);
  b.querySelector('span').textContent = abrir ? t('Ver menos', 'Ver menos') : t('Ver más', 'Ver mais');
  b.querySelector('i').className = `fa-solid fa-chevron-${abrir ? 'up' : 'down'} text-xs`;
}));

// ---------- Lo que hacemos (Nosotros) ----------
(() => {
  const verMas = $('verMasAct'); if (!verMas) return;
  const filtros = document.querySelectorAll('.filtro');
  function elegir(f) {
    filtros.forEach(b => {
      const on = b.dataset.filtro === f;
      b.setAttribute('aria-pressed', on);
      b.classList.toggle('bg-pizarra', on); b.classList.toggle('text-white', on);
      b.classList.toggle('bg-white', !on); b.classList.toggle('text-pizarra-oscuro', !on);
    });
    document.querySelectorAll('.dimension').forEach(d => { d.hidden = !(f === 'todos' || d.dataset.cat === f); });
    const todas = f === 'todos';
    verMas.dataset.accion = todas ? 'menos' : 'mas';
    verMas.setAttribute('aria-expanded', todas);
    verMas.innerHTML = todas
      ? `${t('Ver menos', 'Ver menos')} <i class="fa-solid fa-chevron-up text-xs" aria-hidden="true"></i>`
      : `${t('Ver más actividades', 'Ver mais atividades')} <i class="fa-solid fa-chevron-down text-xs" aria-hidden="true"></i>`;
  }
  filtros.forEach(b => b.addEventListener('click', () => elegir(b.dataset.filtro)));
  verMas.addEventListener('click', () => {
    if (verMas.dataset.accion === 'mas') elegir('todos');
    else { elegir('espiritualidad'); $('actividades').scrollIntoView({ behavior: 'smooth' }); }
  });
  elegir('espiritualidad');
})();

// ---------- Santos jóvenes (Proyecto Santuario) ----------
(() => {
  const lista = $('santosLista'); if (!lista) return;
  const colores = ['bg-terracota', 'bg-agua-oscuro', 'bg-malva', 'bg-coral', 'bg-ambar'];
  const santos = [...lista.querySelectorAll('.santo')].map((li, i) => ({
    foto: li.dataset.foto, cita: li.dataset.cita, bio: li.dataset.bio || '',
    titulo: li.querySelector('.titulo').textContent, nombre: li.querySelector('.nombre').textContent,
    color: colores[i % colores.length],
  }));
  const iniciales = n => n.replace(/^Hna\.\s|^Ir\.\s/, '').split(' ').filter(p => p.length > 2).slice(0, 2).map(p => p[0]).join('');
  const retrato = (s, tam) => `<span class="absolute inset-0 flex items-center justify-center font-display ${tam} text-white" aria-hidden="true">${iniciales(s.nombre)}</span>
      <img src="${ROOT}img/santos/${s.foto}.jpg" alt="${t('Foto de', 'Foto de')} ${s.nombre}" loading="lazy" class="relative h-full w-full object-cover" onerror="this.remove()" />`;
  lista.innerHTML = santos.map((s, i) => `<li class="list-none">
    <button type="button" class="santo-btn group flex h-full w-full flex-col items-center rounded-3xl bg-white/5 p-4 text-center ring-1 ring-white/10 hover:bg-white/10 transition" data-i="${i}" aria-haspopup="dialog">
      <div class="relative mx-auto h-28 w-28 overflow-hidden rounded-full ${s.color} ring-4 ring-white/20 transition group-hover:ring-agua">${retrato(s, 'text-3xl')}</div>
      <p class="mt-3 text-xs font-bold uppercase tracking-wider text-agua">${s.titulo}</p>
      <p class="font-extrabold leading-tight">${s.nombre}</p>
      <span class="mt-auto pt-3 text-xs font-semibold text-white/70 group-hover:text-white">${t('Conocé su historia', 'Conheça a sua história')} <i class="fa-solid fa-plus ml-1" aria-hidden="true"></i></span>
    </button></li>`).join('');

  const ficha = $('ficha'); let actual = 0, origen = null;
  function mostrar(i) {
    actual = (i + santos.length) % santos.length;
    const s = santos[actual];
    $('fichaTitulo').textContent = s.titulo;
    $('fichaNombre').textContent = s.nombre;
    $('fichaFoto').className = `relative mx-auto -mt-14 h-28 w-28 overflow-hidden rounded-full ${s.color} ring-4 ring-crema`;
    $('fichaFoto').innerHTML = retrato(s, 'text-3xl');
    $('fichaBio').textContent = s.bio; $('fichaBio').hidden = !s.bio;
    $('fichaCita').textContent = `“${s.cita}”`;
    $('fichaNum').textContent = `${actual + 1} / ${santos.length}`;
    ficha.querySelector('.overflow-y-auto').scrollTop = 0;
  }
  const abrir = i => { origen = document.activeElement; mostrar(i); ficha.hidden = false; document.body.style.overflow = 'hidden'; $('fichaCerrar').focus(); };
  const cerrar = () => { ficha.hidden = true; document.body.style.overflow = ''; if (origen) origen.focus(); };
  lista.addEventListener('click', e => { const b = e.target.closest('.santo-btn'); if (b) abrir(Number(b.dataset.i)); });
  $('fichaCerrar').addEventListener('click', cerrar);
  $('fichaAnt').addEventListener('click', () => mostrar(actual - 1));
  $('fichaSig').addEventListener('click', () => mostrar(actual + 1));
  ficha.addEventListener('click', e => { if (e.target === ficha) cerrar(); });
  document.addEventListener('keydown', e => {
    if (ficha.hidden) return;
    if (e.key === 'Escape') cerrar();
    if (e.key === 'ArrowRight') mostrar(actual + 1);
    if (e.key === 'ArrowLeft') mostrar(actual - 1);
  });
  // deslizar con el dedo para pasar de santo
  let x0 = null;
  ficha.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  ficha.addEventListener('touchend', e => {
    if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 60) mostrar(actual + (dx < 0 ? 1 : -1));
  });
})();

// ---------- Tienda ----------
(() => {
  const grilla = $('productos'); if (!grilla) return;
  const datos = p => (PT ? p.pt : p.es);
  const pesos = n => '$' + n.toLocaleString('es-AR');
  const esVoluntad = p => p.precio === 'voluntad';
  const textoPrecio = p => (esVoluntad(p) ? t('A voluntad', 'Contribuição livre') : pesos(p.precio));
  const prodDe = key => PRODUCTOS.find(x => x.id === key.split('::')[0]);
  const nombreDe = key => { const [, op] = key.split('::'); return datos(prodDe(key))[0] + (op ? ` – ${op}` : ''); };
  const CLAVE = PT ? 'sl-carrito-pt2' : 'sl-carrito-v4';
  let carrito = {};
  try { carrito = JSON.parse(localStorage.getItem(CLAVE) || '{}') || {}; } catch { carrito = {}; }
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(carrito)); } catch {} };
  const calcularTotal = ids => {
    let suma = 0, voluntad = false;
    ids.forEach(id => { const p = prodDe(id); if (esVoluntad(p)) voluntad = true; else suma += p.precio * carrito[id]; });
    if (!voluntad) return pesos(suma);
    return suma ? `${pesos(suma)} + ${t('aporte a voluntad', 'contribuição livre')}` : t('Aporte a voluntad', 'Contribuição livre');
  };

  PRODUCTOS.forEach(p => {
    const [nombre, detalle, opciones] = datos(p);
    const card = document.createElement('article');
    card.className = 'producto flex flex-col bg-white';
    card.dataset.tipo = p.tipo;
    card.innerHTML = `
      <button type="button" class="ampliar group relative block overflow-hidden bg-neutral-100" data-foto="${ROOT}img/tienda/${p.foto}" data-titulo="${nombre}" aria-label="${t('Ampliar foto de', 'Ampliar foto de')} ${nombre}">
        <img src="${ROOT}img/tienda/${p.foto}" alt="${nombre}" loading="lazy" class="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
        <span class="absolute right-2 top-2 flex h-8 w-8 items-center justify-center bg-white text-tinta" aria-hidden="true"><i class="fa-solid fa-magnifying-glass-plus text-sm"></i></span>
      </button>
      <div class="flex flex-1 flex-col pt-3">
        <p class="font-condensada text-base leading-none tracking-wider text-tinta/50">${p.tipo === 'Librería' ? t('Librería', 'Livraria') : t('Santería', 'Artigos religiosos')}</p>
        <h3 class="mt-1 text-base font-bold leading-tight sm:text-lg">${nombre}</h3>
        ${detalle ? `<p class="mt-1 text-sm text-tinta/60">${detalle}</p>` : ''}
        ${opciones ? `<label class="mt-3 block"><span class="sr-only">${t('Opción de', 'Opção de')} ${nombre}</span>
          <select class="opcion w-full border border-tinta/20 bg-white px-2 py-2 text-sm" data-id="${p.id}">
            ${opciones.map(o => `<option>${o}</option>`).join('')}
          </select></label>` : ''}
        <p class="mt-auto pt-3 font-condensada text-3xl leading-none text-tinta">${textoPrecio(p)}</p>
        <button type="button" class="agregar mt-3 w-full bg-tinta px-4 py-2 font-condensada text-xl tracking-wide text-white hover:bg-black transition" data-id="${p.id}">
          ${t('Agregar al pedido', 'Adicionar ao pedido')}
        </button>
      </div>`;
    grilla.appendChild(card);
  });

  // Se muestran todos los productos; los botones Librería / Santería filtran
  let tipo = 'todos';
  function aplicar() {
    grilla.querySelectorAll('.producto').forEach(c => { c.hidden = !(tipo === 'todos' || c.dataset.tipo === tipo); });
  }
  const filtros = document.querySelectorAll('.filtro-tienda');
  filtros.forEach(btn => btn.addEventListener('click', () => {
    filtros.forEach(b => {
      const on = b === btn;
      b.setAttribute('aria-pressed', on);
      b.classList.toggle('bg-tinta', on); b.classList.toggle('text-white', on);
      b.classList.toggle('bg-white', !on); b.classList.toggle('text-tinta', !on);
    });
    tipo = btn.dataset.tipo; aplicar();
  }));
  aplicar();

  // Foto ampliada
  const visor = $('visor'), visorImg = $('visorImg'), visorTit = $('visorTitulo');
  const cerrarVisor = () => { visor.hidden = true; document.body.style.overflow = ''; };
  grilla.addEventListener('click', e => {
    const b = e.target.closest('.ampliar'); if (!b) return;
    visorImg.src = b.dataset.foto; visorImg.alt = b.dataset.titulo; visorTit.textContent = b.dataset.titulo;
    visor.hidden = false; document.body.style.overflow = 'hidden'; $('visorCerrar').focus();
  });
  visor.addEventListener('click', e => { if (e.target !== visorImg) cerrarVisor(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !visor.hidden) cerrarVisor(); });

  // Carrito
  const btnCarrito = $('carritoBtn'), panel = $('carrito'), fondo = $('carritoFondo'), toast = $('toast');
  let toastTimer;
  const aviso = txt => { toast.textContent = txt; toast.classList.remove('opacity-0'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.add('opacity-0'), 1800); };
  function render() {
    const ids = Object.keys(carrito).filter(id => carrito[id] > 0 && prodDe(id));
    const cant = ids.reduce((s, id) => s + carrito[id], 0);
    $('carritoCant').textContent = cant;
    $('carritoTotal').textContent = calcularTotal(ids);
    btnCarrito.hidden = cant === 0;
    $('carritoItems').innerHTML = ids.length ? ids.map(id => {
      const p = prodDe(id);
      return `<li class="flex items-center gap-3 py-4">
        <div class="min-w-0 flex-1"><p class="font-bold leading-tight">${nombreDe(id)}</p><p class="text-sm text-tinta/60">${esVoluntad(p) ? textoPrecio(p) : pesos(p.precio) + ' ' + t('c/u', 'cada')}</p></div>
        <div class="flex items-center gap-1 border border-tinta/20">
          <button type="button" class="cant h-9 w-9 hover:bg-arena" data-id="${id}" data-d="-1" aria-label="${t('Quitar uno de', 'Tirar um de')} ${nombreDe(id)}"><i class="fa-solid fa-minus text-xs" aria-hidden="true"></i></button>
          <span class="w-6 text-center font-bold">${carrito[id]}</span>
          <button type="button" class="cant h-9 w-9 hover:bg-arena" data-id="${id}" data-d="1" aria-label="${t('Agregar uno de', 'Adicionar um de')} ${nombreDe(id)}"><i class="fa-solid fa-plus text-xs" aria-hidden="true"></i></button>
        </div></li>`;
    }).join('') : `<li class="py-10 text-center text-tinta/50">${t('Tu pedido está vacío.', 'Seu pedido está vazio.')}</li>`;
    guardar();
  }
  const abrir = () => { panel.hidden = false; fondo.hidden = false; btnCarrito.setAttribute('aria-expanded', 'true'); $('carritoCerrar').focus(); };
  const cerrar = () => { panel.hidden = true; fondo.hidden = true; btnCarrito.setAttribute('aria-expanded', 'false'); };
  btnCarrito.addEventListener('click', abrir);
  $('carritoCerrar').addEventListener('click', cerrar);
  fondo.addEventListener('click', cerrar);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });
  document.addEventListener('click', e => {
    const add = e.target.closest('.agregar');
    if (add) {
      const sel = add.closest('.producto').querySelector('.opcion');
      const key = sel ? `${add.dataset.id}::${sel.value}` : add.dataset.id;
      carrito[key] = (carrito[key] || 0) + 1; render(); aviso(t('Agregado a tu pedido', 'Adicionado ao seu pedido'));
    }
    const c = e.target.closest('.cant');
    if (c) {
      carrito[c.dataset.id] = Math.max(0, (carrito[c.dataset.id] || 0) + Number(c.dataset.d));
      if (!carrito[c.dataset.id]) delete carrito[c.dataset.id];
      render(); if (!Object.keys(carrito).length) cerrar();
    }
  });
  $('enviarPedido').addEventListener('click', () => {
    const msg = $('pedidoMsg'), nombre = $('pedidoNombre').value.trim();
    const ids = Object.keys(carrito).filter(id => carrito[id] > 0 && prodDe(id));
    if (!ids.length) { msg.textContent = t('Agregá al menos un producto.', 'Adicione pelo menos um produto.'); return; }
    if (!nombre) { msg.textContent = t('Escribí tu nombre para enviar el pedido.', 'Escreva seu nome para enviar o pedido.'); $('pedidoNombre').focus(); return; }
    msg.textContent = '';
    const lineas = ids.map(id => { const p = prodDe(id); return `• ${carrito[id]} x ${nombreDe(id)} (${esVoluntad(p) ? t('a voluntad', 'contribuição livre') : pesos(p.precio * carrito[id])})`; });
    const texto = PT
      ? `Olá! Quero fazer este pedido na Loja Pastoral San Lucas (escrevo em português):\n\n${lineas.join('\n')}\n\nTotal: ${calcularTotal(ids)}\n\nNome: ${nombre}\nRetirada na capela (Paraguay 2150).`
      : `¡Hola! Quiero hacer este pedido de la Tienda Pastoral San Lucas:\n\n${lineas.join('\n')}\n\nTotal: ${calcularTotal(ids)}\n\nNombre: ${nombre}\nRetiro en la capilla (Paraguay 2150).`;
    window.open(`https://wa.me/${WHATSAPP_TIENDA}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  });
  render();
})();

// ---------- Colabora: copiar alias / CBU ----------
(() => {
  const msg = $('copiadoMsg'); if (!msg) return;
  document.querySelectorAll('.copiar').forEach(btn => btn.addEventListener('click', async () => {
    const texto = $(btn.dataset.copiar).textContent.trim();
    try { await navigator.clipboard.writeText(texto); msg.textContent = t('¡Alias copiado!', 'Alias copiado!'); }
    catch { msg.textContent = `${t('Copiá manualmente', 'Copie manualmente')}: ${texto}`; }
    setTimeout(() => (msg.textContent = ''), 3000);
  }));
})();

// ---------- Colabora: formulario que llega por mail ----------
(() => {
  const form = $('formContacto'); if (!form) return;
  const msg = $('formMsg');
  const mostrar = (txt, ok) => { msg.className = `text-sm font-semibold ${ok ? 'text-green-700' : 'text-coral'}`; msg.textContent = txt; };
  // Botones de "Con tus dones / manos / aporte": eligen el motivo del formulario
  document.querySelectorAll('[data-opcion]').forEach(a => a.addEventListener('click', () => {
    form.motivo.selectedIndex = +a.dataset.opcion;
  }));
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nombre = form.nombre.value.trim(), contacto = form.contacto.value.trim(), mensaje = form.mensaje.value.trim();
    if (!nombre || !contacto || !mensaje) {
      mostrar(t('Por favor completá tu nombre, tu email y tu mensaje.', 'Por favor, preencha seu nome, seu e-mail e sua mensagem.'), false);
      (!nombre ? form.nombre : !contacto ? form.contacto : form.mensaje).focus(); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto)) {
      mostrar(t('Revisá tu email: parece que no está bien escrito.', 'Confira seu e-mail: parece que não está escrito corretamente.'), false);
      form.contacto.focus(); return;
    }
    if (!EMAIL_FORMULARIO.includes('@') || EMAIL_FORMULARIO.startsWith('COMPLETAR')) {
      mostrar(t('El formulario todavía no está conectado. Escribinos por Instagram mientras tanto.', 'O formulário ainda não está conectado. Escreva para nós pelo Instagram enquanto isso.'), false); return;
    }
    const boton = form.querySelector('button[type=submit]'); boton.disabled = true;
    mostrar(t('Enviando…', 'Enviando…'), true);
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${EMAIL_FORMULARIO}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Mensaje desde la web: ${form.motivo.value}`, _template: 'table', _captcha: 'false',
          Nombre: nombre, Email: contacto, _replyto: contacto, Motivo: form.motivo.value, Mensaje: mensaje, Idioma: PT ? 'Portugués' : 'Español',
        }),
      });
      if (!r.ok) throw new Error();
      form.reset();
      mostrar(t('¡Gracias! Recibimos tu mensaje y te vamos a responder pronto.', 'Obrigado! Recebemos sua mensagem e vamos responder em breve.'), true);
    } catch {
      mostrar(t('No se pudo enviar. Probá de nuevo en un rato o escribinos por Instagram.', 'Não foi possível enviar. Tente novamente mais tarde ou escreva pelo Instagram.'), false);
    } finally { boton.disabled = false; }
  });
})();
