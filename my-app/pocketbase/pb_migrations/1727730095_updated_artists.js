/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "haba0fld",
    "name": "new_description",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "haba0fld",
    "name": "new_description",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
