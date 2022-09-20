import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { appKey } from 'Config/app'

export default class Happy {
  public async handle({request,response}: HttpContextContract, next: () => Promise<void>) {
    
  if(appKey!=request.header('appKey'))
  {
     response.status(401).send('Not allowed')
return
  }
  await next()
  }
}
module.exports=Happy
