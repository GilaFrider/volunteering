import BaseController from './BaseController.js';
import service from '../services/HelpRequestsService.js';

class HelpRequestService extends BaseController {
    constructor(service) {
        super(service);        
    }
}

export default new HelpRequestService(service);