import connect from './DB.js';

class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll() {
        
        return this.model.find();
    }


    async get(id) {
        try {
            let item = await this.model.findById(id)
            console.log(item);
            if (!item) {
                let error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            let item = await this.model.create(data);
            if (item) {
                return new HttpResponse(item);
            } else {
                throw new Error('Something wrong happened');
            }
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item) {
                let error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            } else {
                return new HttpResponse(item, { deleted: true });
            }
        } catch (errors) {
            throw errors;
        }
    }
}

//module.exports = BaseRepo;
export default BaseRepo;