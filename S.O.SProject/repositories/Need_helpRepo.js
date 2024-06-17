import Need_helpModel from "../models/Need_helpModel";
import BaseRepo from "./BaseRepo";
class Need_helpRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new Need_helpRepo(Need_helpModel);