/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swcgdtjwcs870s6")

  // remove
  collection.schema.removeField("tildvswy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbvunxjl",
    "name": "person",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swcgdtjwcs870s6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tildvswy",
    "name": "person",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n0hus9769gu672q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("pbvunxjl")

  return dao.saveCollection(collection)
})
