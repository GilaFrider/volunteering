
import VolunteerModel from "../models/VolunteerModel.js";
import BaseRepo from "./BaseRepo.js";
class volunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new volunteerRepo(VolunteerModel);