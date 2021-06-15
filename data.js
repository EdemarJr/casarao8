var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-visita",
      "name": "Sala de Visita",
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
          "yaw": 0.1082390858281066,
          "pitch": 0.6399821958389893,
          "rotation": 0,
          "target": "1-sala-de-musica"
        },
        {
          "yaw": -0.9286286479161312,
          "pitch": 0.6138667010970131,
          "rotation": 0,
          "target": "2-salla-da-claraboia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-de-musica",
      "name": "Sala de musica",
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
          "yaw": -2.8467252916540335,
          "pitch": 0.6530272303967504,
          "rotation": 0,
          "target": "0-sala-de-visita"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salla-da-claraboia",
      "name": "Salla da claraboia",
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
        "yaw": -1.1034917928401509,
        "pitch": 0.21068751953239584,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0059301642165046076,
          "pitch": 1.1233000020908115,
          "rotation": 0,
          "target": "0-sala-de-visita"
        },
        {
          "yaw": -0.6181914705746507,
          "pitch": 0.8421484508679544,
          "rotation": 0,
          "target": "1-sala-de-musica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1294593706642502,
          "pitch": 0.19426070527505956,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sala da Clarabóia</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sala central da casa que serve de ligação com os demais cômodos.....</font></font>"
        }
      ]
    }
  ],
  "name": "Casarão 8",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
