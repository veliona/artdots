/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecla4xr0",
    "name": "collaborates_with",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q")

  // remove
  collection.schema.removeField("ecla4xr0")

  return dao.saveCollection(collection)
})
