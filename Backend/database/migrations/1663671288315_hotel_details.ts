import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'hotel_details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('hid')
      table.integer('cusid')
      table.string('branch')
      table.string('street')
      table.integer('pin_code')

     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
