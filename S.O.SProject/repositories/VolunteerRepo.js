
import VolunteerModel from "../models/VolunteerModel.js";
import BaseRepo from "./BaseRepo.js";
class volunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
    async get(id) {
        try {
            let item = await super.get(id)
            if (!item) {
                let error = new Error("You already Signup, Please Sighin");
                error.statusCode = 404;
                throw error;
            }
            return item;
        } catch (errors) {
            throw errors;
        }
    }

}
export default new volunteerRepo(VolunteerModel);