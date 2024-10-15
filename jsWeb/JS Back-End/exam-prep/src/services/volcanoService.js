import Volcano from "../models/Volcano.js"

const volcanoService = {
    async create(volcano, ownerId) {
        return await Volcano.create({...volcano, owner: ownerId})
    },
    async getAll(filter={}) {
        let query = Volcano.find()

        if (filter.name) {
            query.find({name: {$regex: filter.name, $options: 'i'}})
        }

        
        if (filter.volcanoType) {
            query.find({volcanoType: filter.volcanoType})
        }

        return query.lean()

    },
    async getOne(volcanoId) {
        return Volcano.findById(volcanoId).lean()
    },
    async vote(volcanoId, userId ) {
        return Volcano.findByIdAndUpdate(volcanoId, {$push: {voteList: userId}});
    },
    async remove(volcanoId) {
        return Volcano.findByIdAndDelete(volcanoId);
    },
    async edit(volcanoId, volcanoData) {
        return Volcano.findByIdAndUpdate(volcanoId, volcanoData, {runValidators: true})
    }

}

export default volcanoService