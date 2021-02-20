var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama1",
      "name": "Panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1327121695459148,
        "pitch": -0.11674702682362081,
        "fov": 1.4532490337853081
      },
      "linkHotspots": [
        {
          "yaw": 0.12149740797646125,
          "pitch": 0.11130308157712498,
          "rotation": 0,
          "target": "1-panorama2"
        },
        {
          "yaw": 0.10634168085449858,
          "pitch": -0.6256601963610784,
          "rotation": 0,
          "target": "4-panorama5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama2",
      "name": "Panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9504223046701767,
          "pitch": -0.22680864211588414,
          "rotation": 0,
          "target": "2-panorama3"
        },
        {
          "yaw": -0.09524676547699151,
          "pitch": -0.13723222860389583,
          "rotation": 0,
          "target": "3-panorama4"
        },
        {
          "yaw": 2.586829620145245,
          "pitch": 0.2612625487555711,
          "rotation": 0,
          "target": "0-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama3",
      "name": "Panorama3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7969054229438797,
          "pitch": 0.2876847877815969,
          "rotation": 0,
          "target": "3-panorama4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama4",
      "name": "Panorama4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9562215265177514,
          "pitch": -0.6991177838283988,
          "rotation": 0,
          "target": "4-panorama5"
        },
        {
          "yaw": -0.8714773555498994,
          "pitch": 0.5252249790855004,
          "rotation": 0,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-panorama5",
      "name": "Panorama5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9878875045449655,
          "pitch": 0.6322356709277113,
          "rotation": 0,
          "target": "0-panorama1"
        },
        {
          "yaw": -1.3836163386797402,
          "pitch": 0.7303741073007899,
          "rotation": 0,
          "target": "3-panorama4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
