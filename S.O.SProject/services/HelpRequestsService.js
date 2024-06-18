import repo from '../repositories/HelpRequestRepo.js';
import BaseService from './BaseService.js';
import buildPipeline from '../utils/pipeline.js'

class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    
}

//module.exports = new StudentService(repo);
export default new HelpRequestService(repo);