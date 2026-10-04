# CristhianMC robotics portfolio

A responsive static portfolio with a navy, crimson, and warm-white theme inspired by subtle web geometry. No build step or dependencies: open `index.html`, or serve this folder with `python3 -m http.server 8000`.

## Editing content

Edit biography, descriptions, dates, and existing links in `index.html`. Tabs cover Projects, Experience, Papers, Summer schools, and Background. They support arrow keys, Home/End, direct section URLs, and browser back/forward. Without JavaScript, all sections remain readable.

## Adding images and links

Every project, position, paper, school, and background entry has a `data-entry` key. Find the same key in `content.js`, add your image file to an `images/` folder, and replace its configuration. For example:

```js
"mobile-manipulation": {
  image: {
    src: "images/rby1.jpg",
    alt: "RBY1 robot closing a door in the simulator",
    caption: "Imitation-learning policy evaluation in MuJoCo"
  },
  links: [
    { label: "Code", url: "https://github.com/your-account/your-project" },
    { label: "Demo", url: "https://your-demo-url" },
    { label: "Paper PDF", url: "papers/your-paper.pdf" }
  ]
},
```

Use actual destinations and descriptive alt text. Images are optional and loaded lazily; projects use decorative web artwork until a photo is supplied. Empty link arrays add no buttons. An unavailable image falls back to the project artwork. This is a static site: files and configuration are edited in the repository, with no upload service or admin login.

To add an entry, copy an article in the relevant section, assign a unique `data-entry`, and add a matching configuration in `content.js`. Update the optional count beside the tab label in `index.html`.

Edit colors, layout, and mobile styles in `styles.css`; tab and media behavior lives in `script.js`. Existing CV, profile photo, and supplied links are retained.
