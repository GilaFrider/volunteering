import HelpRequestModel from "../models/HelpRequestModel.js";
import BaseRepo from "./BaseRepo.js";
import buildPipeline from "../utils/pipeline.js";

class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }

    async getAll() {
        const pipeline = buildPipeline();
        return await this.model.aggregate(pipeline).exec();
    }
}
export default new HelpRequestRepo(HelpRequestModel);