(() => {
  const previewControllers = [];
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
    previewControllers.forEach(preview => {
      if (preview.panel.hidden) preview.stop();
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
  window.addEventListener('popstate', syncHash);
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
  function mediaUrl(value) {
    const url = safeUrl(value);
    return url && ['https:', 'http:', 'file:'].includes(url.protocol) ? url : null;
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion.addEventListener('change', event => {
    if (event.matches) previewControllers.forEach(preview => preview.stop());
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) previewControllers.forEach(preview => preview.stop());
  });
  document.querySelectorAll('[data-entry]').forEach((entry, index) => {
    const config = window.portfolioMedia?.[entry.dataset.entry] || {};
    let host = entry;
    if (entry.classList.contains('project')) host = entry.lastElementChild;
    else if (entry.classList.contains('pub')) {
      host = document.createElement('div');
      host.className = 'entry-content';
      while (entry.firstChild) host.append(entry.firstChild);
      entry.append(host);
    }
    const gallery = document.createElement('div');
    gallery.className = 'entry-gallery';
    function artwork() {
      if (!entry.classList.contains('project') || gallery.childElementCount) return;
      const art = document.createElement('div');
      art.className = 'project-art';
      art.setAttribute('aria-hidden', 'true');
      const label = document.createElement('span');
      label.textContent = `PROJECT / ${String(index + 1).padStart(2, '0')}`;
      art.append(label);
      gallery.append(art);
    }
    const photos = config.images || (config.image ? [config.image] : []);
    photos.forEach(photo => {
      const url = mediaUrl(photo.src);
      if (!url) return;
      const figure = document.createElement('figure');
      figure.className = 'entry-media';
      const anchor = document.createElement('a');
      anchor.className = 'media-link';
      anchor.href = (mediaUrl(photo.original) || url).href;
      anchor.title = 'View full-size image';
      const img = document.createElement('img');
      img.src = url.href;
      img.alt = photo.alt || entry.querySelector('h3')?.textContent || '';
      img.loading = 'lazy';
      img.decoding = 'async';
      if (photo.width && photo.height) {
        img.width = photo.width;
        img.height = photo.height;
      }
      if (photo.fit === 'contain') img.classList.add('media-contain');
      anchor.append(img);
      figure.append(anchor);
      if (photo.caption) {
        const caption = document.createElement('figcaption');
        caption.textContent = photo.caption;
        figure.append(caption);
      }
      img.addEventListener('error', () => { figure.remove(); artwork(); }, { once: true });
      gallery.append(figure);
    });
    const video = config.video;
    const gifUrl = mediaUrl(video?.src);
    const posterUrl = mediaUrl(video?.poster);
    if (gifUrl && posterUrl) {
      const figure = document.createElement('figure');
      figure.className = 'entry-media gif-preview';
      const img = document.createElement('img');
      img.src = posterUrl.href;
      img.alt = video.alt || '';
      img.loading = 'lazy';
      img.width = 280;
      img.height = 500;
      img.className = 'media-contain';
      const controls = document.createElement('div');
      controls.className = 'preview-controls';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'preview-toggle';
      button.setAttribute('aria-label', `Play preview: ${entry.querySelector('h3').textContent}`);
      let playing = false;
      function stop() {
        playing = false;
        img.src = posterUrl.href;
        button.textContent = 'Play preview';
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', `Play preview: ${entry.querySelector('h3').textContent}`);
      }
      stop();
      button.addEventListener('click', () => {
        if (playing) stop();
        else {
          playing = true;
          img.src = gifUrl.href;
          button.textContent = 'Stop preview';
          button.setAttribute('aria-pressed', 'true');
          button.setAttribute('aria-label', `Stop preview: ${entry.querySelector('h3').textContent}`);
        }
      });
      img.addEventListener('error', () => {
        if (playing) stop();
        else { figure.remove(); artwork(); }
        button.disabled = true;
      }, { once: true });
      controls.append(button);
      const full = mediaUrl(video.full);
      if (full) {
        const link = document.createElement('a');
        link.href = full.href;
        link.textContent = 'Full video ↗';
        controls.append(link);
      }
      figure.append(img, controls);
      if (video.caption) {
        const caption = document.createElement('figcaption');
        caption.textContent = video.caption;
        figure.append(caption);
      }
      previewControllers.push({ stop, panel: entry.closest('.tab-panel') });
      gallery.append(figure);
    }
    artwork();
    if (gallery.childElementCount) {
      gallery.classList.toggle('has-multiple', gallery.childElementCount > 1);
      entry.prepend(gallery);
      entry.classList.add('has-media');
    }
    const links = document.createElement('div');
    links.className = 'entry-links';
    (config.links || []).forEach(link => {
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
