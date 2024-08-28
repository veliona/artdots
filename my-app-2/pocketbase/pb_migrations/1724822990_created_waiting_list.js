/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n3ygt8veezb2nmr",
    "created": "2024-08-28 05:29:50.310Z",
    "updated": "2024-08-28 05:29:50.310Z",
    "name": "waiting_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4yfu3cp5",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("n3ygt8veezb2nmr");

  return dao.deleteCollection(collection);
})
