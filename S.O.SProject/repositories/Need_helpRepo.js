import Need_helpModel from '../models/Need_helpModel.js'
import BaseRepo from "./BaseRepo.js";
class Need_helpRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new Need_helpRepo(Need_helpModel);