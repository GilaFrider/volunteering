import repo from '../repositories/Need_helpRepo.js';
import BaseService from './BaseService.js';
class Need_helpService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

export default new Need_helpService(repo);