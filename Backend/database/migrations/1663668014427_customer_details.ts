import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customer_details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cusid')
      table.string('name')
      table.string('owner')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
