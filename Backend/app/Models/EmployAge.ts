
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmployAge extends BaseModel {
  @column({ isPrimary: true })
  public id: number
@column()
public empid: number
@column()
public age: number
 
}
