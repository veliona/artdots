/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0hus9769gu672q")

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
      "maxSelect": 13,
      "values": [
        "painter",
        "photographer",
        "art director",
        "film director",
        "writer",
        "screenwriter",
        "actor",
        "choreographer",
        "rapper",
        "theatre director",
        "singer",
        "dancer",
        "choreographer",
        "sculptor",
        "printmaker",
        "ceramist"
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
    "id": "vq26zocx",
    "name": "description",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 13,
      "values": [
        "painter",
        "photographer",
        "art director",
        "film director",
        "writer",
        "screenwriter",
        "actor",
        "choreographer",
        "rapper",
        "theatre director",
        "singer",
        "dancer",
        "choreographer"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
