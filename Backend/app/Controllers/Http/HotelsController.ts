import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HotelDetail from 'App/Models/HotelDetail'
import Database from '@ioc:Adonis/Lucid/Database'

export default class HotelsController {
    public async inserthotel({request}:HttpContextContract)
    {
   const table2=new HotelDetail()
   table2.hid=request.input('id')
   table2.cusid=request.input('cusid')
   table2.branch=request.input('branch')
   table2.street=request.input('street')
   table2.pin_code=request.input('pincode')
   await table2.save()
   return await HotelDetail.all()
    }
    public async readhotel()
    {
        
        const data=await HotelDetail.all()
        data.sort((a, b) => a["id"] - b["id"])
        return data
       
    }
    public async updatehotel({request})
    {
        try{
      const user=await HotelDetail.findByOrFail('id',request.input('id'))
      user.hid=request.input('id')
   user.cusid=request.input('cusid')
   user.branch=request.input('branch')
   user.street=request.input('street')
   user.pin_code=request.input('pincode')
    await user.save()
    return await HotelDetail.all()
        }
        catch{

          return "sorry wrong details"
        }
    }
    public async deletehotel({request})
    {
      try{ 
      
        const user = await HotelDetail.findByOrFail('id',request.params().id)
user.delete()
await user.save()
return await HotelDetail.all()
      }
      catch{
        return "sorry wrong details"
      }

    }
    public async searchhotel({request})
{
const data = request.input('Key')
            return Database
            .from('hotel_details')
            .select('*')
            .where((query) =>{
                if(/^[0-9]/.test(data)){
                    query
                    .where('id',data)
                    .orWhere('hid',data)
                    .orWhere('cusid',data)
                    .orWhereILike('branch','%'+data+'%')
                    .orWhereILike('street','%'+data+'%')
                    .orWhere('pin_code',data)
                }
            })
            .orWhere((query) =>{
                query
                .orWhereILike('branch','%'+data+'%')
                .orWhereILike('street','%'+data+'%')
            })
          }

}
