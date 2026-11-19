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
    ],
    "video": {
      "src": "assets/media/rby1-mobipi-preview.gif",
      "poster": "assets/media/rby1-mobipi.webp",
      "full": "images_videos/rby1_mobipi_demo.mp4",
      "alt": "RBY1 mobile manipulator working in a simulated kitchen",
      "caption": "6-second preview · RBY1 / MoBiPi manipulation demo"
    }
  },
  "visual-memory": {
    "images": [
      {
        "src": "assets/media/spot-room-transition.webp",
        "original": "images_videos/spot_room_transition.png",
        "alt": "Spot standing in a doorway between indoor spaces",
        "caption": "Spot · visual room transitions",
        "fit": "contain",
        "width": 992,
        "height": 1055
      }
    ],
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
  "mapless-robotics": {
    "images": [],
    "links": [
      {
        "label": "Project repository",
        "url": "https://github.com/DefineDan/mapless-robotics"
      },
      {
        "label": "RealSense integration · realsense_test",
        "url": "https://github.com/DefineDan/mapless-robotics/tree/realsense_test"
      },
      {
        "label": "Navigation demo (video)",
        "url": "images_videos/mapless_robotics_navigation.mp4"
      }
    ],
    "video": {
      "src": "assets/media/mapless-exploration-preview.gif",
      "poster": "assets/media/mapless-exploration-poster.webp",
      "full": "images_videos/mapless_robotics_exploration.mp4",
      "label": "Mapless exploration",
      "alt": "Exploration demo showing the robot camera views and mapping interface",
      "caption": "6-second preview · Mapless exploration"
    }
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
        "label": "Chaska Rover Instagram",
        "url": "https://www.instagram.com/chaskarover.pucp/"
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
    "images": [
      {
        "src": "assets/media/formula-vehicle.webp",
        "original": "images_videos/vehicle_formula.jpg",
        "alt": "KTH Formula Student race car on display outdoors",
        "caption": "KTH Formula Student · vehicle state estimation",
        "fit": "contain",
        "width": 1200,
        "height": 886
      }
    ],
    "links": [
      {
        "label": "KTH Formula Student team",
        "url": "https://kthformulastudent.se/team/"
      },
      {
        "label": "Project paper (PDF)",
        "url": "pdf_files/ProjectPaper_UKF-EKFCascade_CristhianMallqui.pdf"
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
        "original": "images_videos/eth_teampic_crop.jpeg",
        "alt": "ETH RobotX summer school teammates with their robot",
        "caption": "ETH RobotX teammates",
        "fit": "contain",
        "width": 704,
        "height": 876
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
  },
  "teaching-job": {
    "images": [],
    "links": [],
    "video": {
      "src": "assets/media/teaching-assistant-preview.gif",
      "poster": "assets/media/teaching-assistant-poster.webp",
      "full": "images_videos/TA_robvideo.mp4",
      "label": "University Teaching Assistant",
      "alt": "Students demonstrating a robotics project in a teaching lab",
      "caption": "6-second preview · University Teaching Assistant"
    }
  },
  "erc-2023": {
    "images": [],
    "links": [],
    "video": {
      "src": "assets/media/erc2023-preview.gif",
      "poster": "assets/media/erc2023-poster.webp",
      "full": "images_videos/erc2023.mp4",
      "label": "European Rover Challenge 2023",
      "alt": "A simulated rover manipulator interacting with a control panel during ERC 2023",
      "caption": "6-second preview · ERC 2023 Remote Edition"
    }
  },
  "rover-funding-2025": {
    "images": [
      {
        "src": "assets/media/rover-pucp-team.webp",
        "original": "images_videos/rover_demo_pucp.jpeg",
        "alt": "The PUCP rover team gathered around the university’s first rover",
        "caption": "PUCP’s first rover · team milestone, 2025",
        "fit": "contain",
        "width": 900,
        "height": 1200
      }
    ],
    "links": []
  }
};
