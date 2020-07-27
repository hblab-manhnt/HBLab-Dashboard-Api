define({ "api": [
  {
    "type": "post",
    "url": "/api/gc-history",
    "title": "Store BotGCHistory every 30 minutes",
    "name": "StoreBotGcHistory",
    "group": "Bots",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_key",
            "description": "<p>Key for server to check permission</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>Status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"Store gc history success!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "storeGcFail",
            "description": "<p>Store gc failed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongCurl",
            "description": "<p>Curl Key is wrong!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server error:",
          "content": "HTTP/1.1 500 Server error\n{\n  \"code\": \"500\",\n  \"message\": \"Store gc history fail!\"\n}",
          "type": "json"
        },
        {
          "title": "Curl key is wrong:",
          "content": "HTTP/1.1 500 Wrong Curl\n{\n  []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "dashboard/bots.js",
    "groupTitle": "Bots"
  }
] });
