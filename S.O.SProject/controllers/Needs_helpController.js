import BaseController from './BaseController.js';
import service from '../services/Needs_helpService.js';

class Needs_helpController extends BaseController {
    constructor(service) {
        super(service);        
    }
}

export default new Needs_helpController(service);