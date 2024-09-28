/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swcgdtjwcs870s6")

  // remove
  collection.schema.removeField("epfl3djk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swcgdtjwcs870s6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epfl3djk",
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
})
