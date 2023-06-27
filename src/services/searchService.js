import * as request from '~/untils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: q,
                type: type
            },
        })
        
    return res.data
    }

    catch(err) {
        console.log(err)
    }

}