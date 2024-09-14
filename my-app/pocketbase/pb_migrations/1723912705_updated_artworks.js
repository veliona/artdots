/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swcgdtjwcs870s6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nidtsftl",
    "name": "field",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swcgdtjwcs870s6")

  // remove
  collection.schema.removeField("nidtsftl")

  return dao.saveCollection(collection)
})
