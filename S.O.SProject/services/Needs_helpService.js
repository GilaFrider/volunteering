import repo from '../repositories/Need_helpRepo.js';
import BaseService from './BaseService.js';
class Needs_helpService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

//module.exports = new StudentService(repo);
export default new Needs_helpService(repo);