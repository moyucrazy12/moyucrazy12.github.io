/* Photos, galleries, GIF previews and links, matched by data-entry in index.html.
   Optimized display assets live in assets/media; originals stay in images_videos.
   Add images: [{ src, original, alt, caption, fit, width, height }],
   video: { src: "preview.gif", poster: "poster.webp", full: "clip.mp4", alt, caption },
   and links: [{ label, url }]. Empty arrays show no extra media or links.
*/
window.portfolioMedia = {
  "mobile-manipulation": {
    "images": [],
    "links": [
      {
        "label": "KTH RPL",
        "url": "https://www.kth.se/rpl"
      }
    ]
  },
  "visual-memory": {
    "images": [],
    "links": [
      {
        "label": "KTH RPL",
        "url": "https://www.kth.se/rpl"
      }
    ]
  },
  "aerial-recovery": {
    "images": [
      {
        "src": "assets/media/alars-drone.webp",
        "original": "images_videos/drone_smarc.jpg",
        "alt": "A drone carrying equipment over the water during maritime robotics work",
        "caption": "Aerial recovery · maritime robotics",
        "fit": "contain",
        "width": 614,
        "height": 919
      }
    ],
    "links": [
      {
        "label": "ALARS system showcase",
        "url": "https://www.digitalfutures.kth.se/alars-and-adapcos-projects-showcase-advances-in-maritime-autonomy-at-djuronaset/"
      },
      {
        "label": "SMaRC",
        "url": "https://www.linkedin.com/company/swedish-maritime-robotics-centre/posts/"
      }
    ]
  },
  "semantic-mapping": {
    "images": [],
    "links": [
      {
        "label": "KTH RPL",
        "url": "https://www.kth.se/rpl"
      }
    ]
  },
  "clay-printer": {
    "images": [],
    "links": [],
    "video": {
      "src": "assets/media/clay-printer-preview.gif",
      "poster": "assets/media/clay-printer-poster.webp",
      "full": "images_videos/3dprinter_working.mp4",
      "alt": "The clay delta printer depositing material",
      "caption": "6-second preview · clay printer in operation"
    }
  },
  "rover": {
    "images": [],
    "links": [
      {
        "label": "PUCP Robotics Group",
        "url": "https://www.linkedin.com/company/grupo-de-robotica-pucp/posts/"
      }
    ],
    "video": {
      "src": "assets/media/rover-preview.gif",
      "poster": "assets/media/rover-poster.webp",
      "full": "images_videos/SLAM_rover.mp4",
      "alt": "The exploration rover and its mapping setup",
      "caption": "6-second preview · rover and SLAM setup"
    }
  },
  "formula-student": {
    "images": [],
    "links": [
      {
        "label": "KTH Formula Student team",
        "url": "https://kthformulastudent.se/team/"
      }
    ]
  },
  "kth-job": {
    "images": [
      {
        "src": "assets/media/alars-drone.webp",
        "original": "images_videos/drone_smarc.jpg",
        "alt": "A drone carrying equipment over the water during maritime robotics work",
        "caption": "Aerial recovery · maritime robotics",
        "fit": "contain",
        "width": 614,
        "height": 919
      }
    ],
    "links": [
      {
        "label": "KTH RPL",
        "url": "https://www.kth.se/rpl"
      },
      {
        "label": "SMaRC",
        "url": "https://www.linkedin.com/company/swedish-maritime-robotics-centre/posts/"
      },
      {
        "label": "ALARS system showcase",
        "url": "https://www.digitalfutures.kth.se/alars-and-adapcos-projects-showcase-advances-in-maritime-autonomy-at-djuronaset/"
      }
    ]
  },
  "delaware-job": {
    "images": [
      {
        "src": "assets/media/liquid-touch.webp",
        "original": "images_videos/soft_actuator_paper.png",
        "alt": "Figure showing the wearable liquid-metal actuator, its coil model and characterization",
        "caption": "Liquid Touch · soft, wearable vibrotactile actuators",
        "fit": "contain",
        "width": 1200,
        "height": 659
      }
    ],
    "links": [
      {
        "label": "Read the paper · Wiley",
        "url": "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adem.202502035?af=R"
      }
    ]
  },
  "fabcore-job": {
    "images": [
      {
        "src": "assets/media/fabcore-printer.webp",
        "original": "images_videos/3dclay_printer_fabcore.jpg",
        "alt": "Cristhian beside the 1.5 m clay delta printer at FABCORE",
        "caption": "The clay delta printer at FABCORE",
        "fit": "contain",
        "width": 768,
        "height": 1024
      },
      {
        "src": "assets/media/fabcore-team.webp",
        "original": "images_videos/drone_fabcore.jpg",
        "alt": "Cristhian with colleagues at FABCORE",
        "caption": "With the FABCORE team",
        "fit": "cover",
        "width": 1200,
        "height": 901
      }
    ],
    "links": []
  },
  "utk-teaching": {
    "images": [
      {
        "src": "assets/media/utk-teaching.webp",
        "original": "images_videos/utk_robotics_teacher.jpg",
        "alt": "Cristhian with students during robotics teaching at UTK",
        "caption": "Robotics teaching · UTK",
        "fit": "cover",
        "width": 1200,
        "height": 900
      }
    ],
    "links": [
      {
        "label": "United Technologies for Kids",
        "url": "https://www.utkademy.com/"
      }
    ]
  },
  "robotics-group": {
    "images": [
      {
        "src": "assets/media/robotics-group.webp",
        "original": "images_videos/robotics_group.png",
        "alt": "Members of the PUCP Robotics Group gathered in a lecture room",
        "caption": "PUCP Robotics Group",
        "fit": "cover",
        "width": 798,
        "height": 511
      },
      {
        "src": "assets/media/robotics-group-2019.webp",
        "original": "images_videos/robotics_Group_2019.png",
        "alt": "The PUCP Robotics Group around a robotics project in 2019",
        "caption": "Robotics Group · 2019",
        "fit": "cover",
        "width": 1000,
        "height": 666
      }
    ],
    "links": [
      {
        "label": "PUCP Robotics Group",
        "url": "https://www.linkedin.com/company/grupo-de-robotica-pucp/posts/"
      }
    ]
  },
  "liquid-touch": {
    "images": [
      {
        "src": "assets/media/liquid-touch.webp",
        "original": "images_videos/soft_actuator_paper.png",
        "alt": "Figure showing the wearable liquid-metal actuator, its coil model and characterization",
        "caption": "Liquid Touch · soft, wearable vibrotactile actuators",
        "fit": "contain",
        "width": 1200,
        "height": 659
      }
    ],
    "links": [
      {
        "label": "Read the paper · Wiley",
        "url": "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adem.202502035?af=R"
      }
    ]
  },
  "gone-fishing": {
    "images": [],
    "links": [
      {
        "label": "ALARS system showcase",
        "url": "https://www.digitalfutures.kth.se/alars-and-adapcos-projects-showcase-advances-in-maritime-autonomy-at-djuronaset/"
      }
    ]
  },
  "eth-school": {
    "images": [
      {
        "src": "assets/media/eth-robotx.webp",
        "original": "images_videos/ETH_SS_solo.jpeg",
        "alt": "Cristhian at the ETH RobotX Robotics Summer School",
        "caption": "ETH RobotX · 2026",
        "fit": "contain",
        "width": 900,
        "height": 1200
      },
      {
        "src": "assets/media/eth-team.webp",
        "original": "images_videos/ETH_SS_group.jpeg",
        "alt": "Summer school teammates at ETH RobotX",
        "caption": "ETH RobotX teammates",
        "fit": "contain",
        "width": 716,
        "height": 1200
      }
    ],
    "links": []
  },
  "rima-school": {
    "images": [
      {
        "src": "assets/media/rima-robot.webp",
        "original": "images_videos/RimA_SS_solo.jpg",
        "alt": "Cristhian with a quadruped at the RimA Summer School",
        "caption": "Hands-on robotics · RimA",
        "fit": "cover",
        "width": 1200,
        "height": 675
      },
      {
        "src": "assets/media/rima-team.webp",
        "original": "images_videos/RimA_SS_group.jpg",
        "alt": "Summer school teammates with a quadruped at RimA",
        "caption": "RimA teammates",
        "fit": "cover",
        "width": 1200,
        "height": 675
      }
    ],
    "links": []
  },
  "lasc-2021": {
    "images": [
      {
        "src": "assets/media/lasc-2021.webp",
        "original": "images_videos/LASC2021.png",
        "alt": "PUCP announcement celebrating Team Chaska receiving the LASC 2021 trophy",
        "caption": "CanSat · first place, 2021",
        "fit": "contain",
        "width": 843,
        "height": 843
      }
    ],
    "links": [
      {
        "label": "PUCP Robotics Group",
        "url": "https://www.linkedin.com/company/grupo-de-robotica-pucp/posts/"
      }
    ]
  },
  "lasc-2023": {
    "images": [
      {
        "src": "assets/media/lasc-2023.webp",
        "original": "images_videos/LASC2023.png",
        "alt": "PUCP announcement celebrating Team Chaska winning two LASC 2023 categories",
        "caption": "Team Chaska · LASC 2023",
        "fit": "contain",
        "width": 960,
        "height": 960
      }
    ],
    "links": [
      {
        "label": "PUCP Robotics Group",
        "url": "https://www.linkedin.com/company/grupo-de-robotica-pucp/posts/"
      }
    ]
  }
};
