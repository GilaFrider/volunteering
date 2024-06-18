import HelpRequestModel from "../models/HelpRequestModel.js";
import BaseRepo from "./BaseRepo.js";
class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new HelpRequestRepo(HelpRequestModel);