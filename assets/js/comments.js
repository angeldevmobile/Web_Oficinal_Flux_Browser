const SUPA_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPA_KEY = import.meta.env.VITE_SUPABASE_KEY;

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function fetchComments() {
  const res = await fetch(`${SUPA_URL}/rest/v1/comments?select=*&order=created_at.desc&limit=60`, {
    headers: { 'apikey': SUPA_KEY, 'Authorization': `Bearer ${SUPA_KEY}` }
  });
  if (!res.ok) return [];
  return res.json();
}

async function insertComment(name, message) {
  const res = await fetch(`${SUPA_URL}/rest/v1/comments`, {
    method: 'POST',
    headers: {
      'apikey': SUPA_KEY,
      'Authorization': `Bearer ${SUPA_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ name: name.trim() || 'Anónimo', message: message.trim() })
  });
  return res.ok;
}

async function renderComments() {
  const listEl  = document.getElementById('comments-list');
  const emptyEl = document.getElementById('comments-empty');
  const titleEl = document.getElementById('comments-title');
  if (!listEl) return;
  const comments = await fetchComments();
  if (titleEl) titleEl.textContent = `Comentarios (${comments.length})`;
  if (comments.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  listEl.innerHTML = comments.map(c => {
    const date = new Date(c.created_at).toLocaleDateString('es-ES', { day:'numeric', month:'short', year:'numeric' });
    return `
    <div class="comment-card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:38px;height:38px;background:linear-gradient(135deg,rgba(6,182,212,0.25),rgba(45,212,191,0.15));border:1px solid rgba(6,182,212,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#06b6d4;flex-shrink:0;">${escapeHtml(c.name.charAt(0).toUpperCase())}</div>
        <div>
          <div style="color:#e2e8f0;font-weight:600;font-size:14px;">${escapeHtml(c.name)}</div>
          <div style="color:#475569;font-size:11px;">${date}</div>
        </div>
      </div>
      <p style="color:#94a3b8;font-size:14px;line-height:1.65;margin:0;white-space:pre-wrap;">${escapeHtml(c.message)}</p>
    </div>`;
  }).join('');
}

const form = document.getElementById('comment-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value;
    const msg  = document.getElementById('comment-message').value;
    if (!msg.trim()) return;
    const btn = document.getElementById('comment-submit-btn');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Enviando...';
    const ok = await insertComment(name, msg);
    if (ok) {
      document.getElementById('comment-name').value    = '';
      document.getElementById('comment-message').value = '';
      await renderComments();
      btn.innerHTML = '<svg style="width:14px;height:14px;display:inline;vertical-align:middle;margin-right:4px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>¡Publicado!';
      btn.style.background = 'linear-gradient(135deg,#4ade80,#22c55e)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; }, 2200);
    } else {
      btn.innerHTML = 'Error al enviar';
      btn.style.background = 'linear-gradient(135deg,#f87171,#ef4444)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; }, 2200);
    }
  });
}

renderComments();
