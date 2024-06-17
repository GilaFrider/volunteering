import AddressModel from "../models/AddressModel";
import BaseRepo from "./BaseRepo";
class AddressRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new AddressRepo(AddressModel);