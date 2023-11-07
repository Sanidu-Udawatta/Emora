import Repository from '../utils/repository'

const getChildDetails = (id) => {
    return Repository.get('/child/' + id)
}

const updateChildDetails = (details) => {
    return Repository.put('/child' , details)
}

export {
    getChildDetails,
    updateChildDetails
}