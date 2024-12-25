import axios from 'axios';

export default defineEventHandler(async (event) => {

    try {
        const { limit, page, type } = getQuery(event)

        console.log(limit, page, type)

        const {data} = await axios.get("https://center.istudyedu.com/api/products", {
            params: {
                limit: limit,
                page: page,
                type: type
            }
        })

        // console.log(data)

        return data;
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Ошибка запроса к API"
        })
    }

})