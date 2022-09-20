
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomerDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public cusid:number
  @column()
  public name:string
  @column()
  public owner:string

}
