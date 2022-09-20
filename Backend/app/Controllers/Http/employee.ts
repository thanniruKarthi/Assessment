import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EmployDept from 'App/Models/EmployDept'
import EmployAge from 'App/Models/EmployAge'
import EmploydeptValidator from 'App/Validators/EmploydeptValidator'
import EmploAgeValidator from 'App/Validators/EmploAgeValidator'
import Database from '@ioc:Adonis/Lucid/Database'
export default class employee
{   
    public async createdept({request}:HttpContextContract)
    {

    const table2=new EmployDept()
    const payload=await request.validate(EmploydeptValidator)
    table2.empid=payload['empid']
    table2.name=payload['name']
    table2.dept =payload['dept']
  await table2.save()
  return await EmployDept.all()
    }
    public async readdept()
    {
        
        const data=await EmployDept.all()
        data.sort((a, b) => a["id"] - b["id"])
        return data
       
    }
    public async updatedept({request})
    {
        try{
      const user=await EmployDept.findByOrFail('id',request.input('id'))
      user.empid=request.input('empid')
      user.name=request.input("name")
      user.dept=request.input("dept")
    await user.save()
    return await EmployDept.all()
        }
        catch{

          return "sorry wrong details"
        }
    }
    public async deletedept({request})
    {
      try{ 
      
        const user = await EmployDept.findByOrFail('id',request.params().id)
user.delete()
await user.save()
return await EmployDept.all()
      }
      catch{
        return "sorry wrong details"
      }
    }
    public async createage({request}:HttpContextContract)
    {
    const table2=new EmployAge()
    const payload=await request.validate(EmploAgeValidator)
    table2.empid=payload['empid']
    table2.age =payload['age']
  await table2.save()
    }
    public async readage()
    {
         const data=await EmployAge.all()
         data.sort((a, b) => a["id"] - b["id"])
        return data
    }
    public async updateage({})
    {
        try{
      const user=await EmployAge.findByOrFail('id',11)
      
      user.age=23

    await user.save()
        }
        catch{
          return "sorry wrong details"
        }
    }
    public async deleteage({})
    { 
      try{
        const user = await EmployAge.findByOrFail('id',37)
await user.delete()
await user.save
return EmployAge.all()
      }
    
    catch
    {
          return "sorry wrong details"
    }
    }
    public async getbyid({request})
    {
      const idno=request.input("id")
      const user = await EmployDept.find(idno)
      return user

    }
    public async getbyname({request})
    {
      const username=request.input("name")
    const user = await EmployDept.findBy('name', username)
    return user
    }  

public async getemploydata({request})
{
 return Database
  .from('employ_depts')
  .join('employ_ages', 'employ_depts.empid', 'employ_ages.empid')
   .select('employ_depts.*')
  .select('employ_ages.*').where('employ_depts.empid',request.input("getid"))

}
public async search({request})
{
const data = request.input('Key')
            return Database
            .from('employ_depts')
            .select('*')
            .where((query) =>{
                if(/^[0-9]/.test(data)){
                    query
                    .where('id',data)
                    .orWhere('empid',data)
                    .orWhereILike('name','%'+data+'%')
                    .orWhereILike('dept','%'+data+'%')
                }
            })
            .orWhere((query) =>{
                query
                .whereILike('name','%'+data+'%')
                .orWhereILike('dept','%'+data+'%')
            })
          }

         
}
