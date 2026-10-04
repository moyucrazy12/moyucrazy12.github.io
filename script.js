(() => {
  const tablist = document.querySelector('.tabs');
  const tabs = [...tablist.querySelectorAll('a')];
  const panels = tabs.map(tab => document.querySelector(tab.getAttribute('href')));
  tablist.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
  });

  function activate(id) {
    tabs.forEach((tab, index) => {
      const selected = panels[index].id === id;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[index].hidden = !selected;
    });
  }
  function syncHash() {
    // Preserve older links to the portfolio sections, including #experience.
    const id = location.hash.slice(1);
    if (panels.some(panel => panel.id === id)) activate(id);
  }
  activate('research');
  syncHash();
  window.addEventListener('hashchange', syncHash);
  tabs.forEach(tab => tab.addEventListener('click', event => {
    event.preventDefault();
    const hash = tab.getAttribute('href');
    activate(hash.slice(1));
    if (location.hash !== hash) history.pushState(null, '', hash);
  }));
  tablist.addEventListener('keydown', event => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  });

  function safeUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value, location.href);
      return ['https:', 'http:', 'file:', 'mailto:'].includes(url.protocol) ? url : null;
    } catch { return null; }
  }
  document.querySelectorAll('[data-entry]').forEach((entry, index) => {
    const config = window.portfolioMedia?.[entry.dataset.entry];
    const host = entry.classList.contains('project') ? entry.lastElementChild : entry;
    function artwork() {
      if (!entry.classList.contains('project')) return;
      const art = document.createElement('div');
      art.className = 'project-art';
      art.setAttribute('aria-hidden', 'true');
      const label = document.createElement('span');
      label.textContent = `RESEARCH / ${String(index + 1).padStart(2, '0')}`;
      art.append(label);
      entry.prepend(art);
    }
    const imageUrl = safeUrl(config?.image?.src);
    if (imageUrl && ['https:', 'http:', 'file:'].includes(imageUrl.protocol)) {
      const figure = document.createElement('figure');
      figure.className = 'entry-media';
      const img = document.createElement('img');
      img.src = imageUrl.href;
      img.alt = config.image.alt || entry.querySelector('h3')?.textContent || '';
      img.loading = 'lazy';
      img.decoding = 'async';
      figure.append(img);
      if (config.image.caption) {
        const caption = document.createElement('figcaption');
        caption.textContent = config.image.caption;
        figure.append(caption);
      }
      img.addEventListener('error', () => { figure.remove(); artwork(); }, { once: true });
      (entry.classList.contains('project') ? entry : host).prepend(figure);
    } else artwork();
    const links = document.createElement('div');
    links.className = 'entry-links';
    (config?.links || []).forEach(link => {
      const url = safeUrl(link.url);
      if (!url || !link.label) return;
      const anchor = document.createElement('a');
      anchor.href = url.href;
      anchor.textContent = `${link.label} ↗`;
      links.append(anchor);
    });
    if (links.childElementCount) host.append(links);
  });
})();
