const pipeline = 
    [
      { $match: { ststus: false } },
      {
        $lookup: {
          from: 'addresses',
          localField: 'addressId',
          foreignField: '_id',
          as: 'Address'
        }
      }
]
import volunteers from './controllers/VolunteerController'
import helpRequests from './controllers/HelpRequestController.js'
// function sighin(id) {
//     const volunteer = volunteers.get(id) ;
//     if(volunteer == null){

//     }

// }

function sighup(){
    
}

function gethelpReqests(){
    helpRequests.getAll();
}