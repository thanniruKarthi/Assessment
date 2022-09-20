
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class HotelDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public hid:number
  @column()
  public cusid:number
  @column()
  public branch:string
  @column()
  public street:string
  @column()
  public pin_code:number

}
