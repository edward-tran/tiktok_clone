import * as request from '~/utils/request';
export const search = async (q, type = 'less') => {
    try {
        const respone = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return respone.data;
    } catch (error) {
        console.log(error);
    }
};
