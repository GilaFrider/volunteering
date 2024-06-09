import repo from '../repositories/FieldRepo.js';
import BaseService from './BaseService.js';
class FieldService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

//module.exports = new StudentService(repo);
export default new FieldService(repo);