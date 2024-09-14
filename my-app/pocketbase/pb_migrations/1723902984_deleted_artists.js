/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g1i5qilewmttg2k");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "g1i5qilewmttg2k",
    "created": "2024-08-17 13:53:06.300Z",
    "updated": "2024-08-17 13:53:06.300Z",
    "name": "artists",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7sersc0z",
        "name": "person",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nit68azf",
        "name": "type",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "values": [
            "Painting",
            "Photography",
            "Film",
            "Literature"
          ]
        }
      },
      {
        "system": false,
        "id": "c1hyond4",
        "name": "description",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "values": [
            "painter",
            "photographer",
            "director",
            "writer"
          ]
        }
      },
      {
        "system": false,
        "id": "wqeljlko",
        "name": "inspired_by",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "test"
          ]
        }
      },
      {
        "system": false,
        "id": "atng3wuz",
        "name": "inspired_others",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "test"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
