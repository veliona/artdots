/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n0hus9769gu672q",
    "created": "2024-08-17 13:58:14.436Z",
    "updated": "2024-08-17 13:58:14.436Z",
    "name": "artists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jfcygwhh",
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
        "id": "xtwlbaay",
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
        "id": "vq26zocx",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q");

  return dao.deleteCollection(collection);
})
