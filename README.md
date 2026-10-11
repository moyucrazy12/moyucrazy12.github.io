# CristhianMC robotics portfolio

A static portfolio with a navy, crimson, and warm-white theme. Open `index.html`, or serve the folder with `python3 -m http.server 8000`. There is no build step or dependency installation.

## Editing the portfolio

Edit the biography, descriptions, dates and section content in `index.html`. The tabs organize Projects, Experience, Papers, Summer schools, Awards, and Background, with arrow-key navigation and direct section links.

Photos, galleries, short GIF previews and external links are configured in `content.js`. Match an entry's key to its `data-entry` in the HTML. The mobile-manipulation and visual-memory projects still have decorative artwork, ready for your future images.

```js
"mobile-manipulation": {
  images: [
    {
      src: "assets/media/rby1.webp",
      original: "images_videos/rby1.jpg",
      alt: "RBY1 robot closing a door in simulation",
      caption: "Policy evaluation in MuJoCo",
      fit: "contain"
    }
  ],
  links: [
    { label: "Code", url: "https://github.com/your-account/your-project" }
  ]
},
```

Use `fit: "contain"` for figures, awards or portraits that should remain fully visible; otherwise the image fills its frame. Photos link to their original files. You can add multiple images to any entry. The previous single `image` configuration is also supported.

## Photos and video previews

Original uploads remain in `images_videos/`. The page uses optimized WebP copies in `assets/media/` and retains links to the original photos. `Personal Presentation.png` duplicates the Robotics Group photo, so the gallery uses one copy of that scene.

The printer and rover each have a six-second GIF excerpt and a static poster. A preview loads only when its Play button is pressed, stops when its tab is hidden or the page is put in the background, and links to the full original MP4. Previews start as static posters, including with reduced motion enabled.

To configure another clip:

```js
video: {
  src: "assets/media/project-preview.gif",
  poster: "assets/media/project-poster.webp",
  full: "images_videos/project.mp4",
  alt: "The robot navigating an indoor corridor",
  caption: "6-second preview · navigation test"
}
```

For a compact six-second GIF, the included previews use FFmpeg at eight frames per second, 180 pixels wide, with a 48-color palette:

```sh
ffmpeg -ss 8 -t 6 -i images_videos/SLAM_rover.mp4 \
  -filter_complex 'fps=8,scale=180:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=48[p];[b][p]paletteuse=dither=none' \
  -loop 0 assets/media/rover-preview.gif
```

Add new photos or videos by supplying the corresponding files and configuration. This site is edited in the repository; it has no upload service. Styling is in `styles.css`; tab, gallery and preview behavior is in `script.js`.
