
import Route from '@ioc:Adonis/Core/Route'
//import PostsController from 'App/Controllers/Http/PostsController'
// Route.get('/readdept','employee.readdept')
// Route.post('/createdept','employee.createdept')
// Route.put('/updatedept','employee.updatedept')
// Route.delete('/deletedept/:id','employee.deletedept')
// Route.post('/empdetails','employee.empdetails')
// Route.post('/createage','employee.createage')
// Route.get('/readage','employee.readage')
// Route.put('/updateage','employee.updateage')
// Route.delete('/deleteage','employee.deleteage')
// Route.post('/getbyid','employee.getbyid')
// Route.post('/getbyname','employee.getbyname')
// Route.post('/search','employee.search')
Route.post('/insert','CustomersController.insertcustomer')
Route.get('/read','CustomersController.readcustomer')
Route.post('/update/:id','CustomersController.updatecustomer')
Route.delete('/delete/:id','CustomersController.deletecustomer')
Route.post('/cussearch','CustomersController.searchcustomer')
Route.get('/iddsc','CustomersController.iddesc')
Route.get('/nameasc','CustomersController.nameasc')
Route.get('/namedesc','CustomersController.namedsc')
Route.get('/ownerasc','CustomersController.ownerasc')
Route.get('/ownerdesc','CustomersController.ownerdsc')


Route.post('/insert1','HotelsController.inserthotel')
Route.get('/read1','HotelsController.readhotel')
Route.delete('/delete1','HotelsController.deletehotel')
Route.post('/update1','HotelsController.updatehotel')
Route.post('/search1','HotelsController.searchhotel')


