const axios = require('axios');

/**
 * @desc Request genérico para consultar apis
 * 
 * @param {String} method // (get o post)
 * @param {String} path // /products
 * @param {Object} data // opcional
 * 
 * @return {object} Respuesta de la api
 */
const request = async ( method, path, data) =>{
    try{
        const url = 'https://json-server-now.cart274.now.sh/';
        if(method === 'post'){
            axios.post(url + path, data)
        }

        if(method === 'get'){
           return axios.get(url + path)
            .then((response)=>{
                if(response.status === 200)
                    return response.data
                else
                    return {};
            })
        }
    }catch(error){
        console.log(error);
    }
}
export default request;