export default class Pagination {
    static get = ({page, limit, sort_by, sort_method}) => {
        page = page || 1
        limit = limit || 10
        sort_by = sort_by || 'id'
        sort_method = sort_method || 'ASC'
        if (limit > 100) {
            limit = 100
        }
        const offset = page * limit - limit
        return {
            limit, offset, sort_by, sort_method
        }
    }
}