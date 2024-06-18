import BaseController from './BaseController.js';
import service from '../services/Need_helpService.js';

class Need_helpController extends BaseController {
    constructor(service) {
        super(service);        
    }
}

export default new Need_helpController(service);
