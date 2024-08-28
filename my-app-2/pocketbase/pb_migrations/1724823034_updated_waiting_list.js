/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n3ygt8veezb2nmr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9wximymo",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n3ygt8veezb2nmr")

  // remove
  collection.schema.removeField("9wximymo")

  return dao.saveCollection(collection)
})
