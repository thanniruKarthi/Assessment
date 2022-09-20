
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmployDept extends BaseModel {
  @column({ isPrimary: true })
  public id: number
@column()
public empid:number
@column()
public name:string
@column()
public dept:string

}
