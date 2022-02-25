class Pagination {
    static get = ({page, limit}) => {
        page = page || 1
        limit = limit || 10
        if (limit > 100) {
            limit = 100
        }
        const offset = page * limit - limit
        return {
            limit, offset
        }
    }
}

export default Pagination