/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q")

  // update
  collection.schema.addField(new SchemaField({
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
        "Literature",
        "Performing Arts"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
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
        "writer",
        "screenwriter"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
