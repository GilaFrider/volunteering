import FieldModel from "../models/FieldModel";
import BaseRepo from "./BaseRepo";
class FieldRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new FieldRepo(FieldModel);