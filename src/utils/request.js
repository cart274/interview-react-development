const axios = require('axios');

/**
 * @desc Request genérico para consultar apis
 * 
 * @param {String} method // (get o post)
 * @param {String} url // /products
 * @param {Object} data // opcional
 * 
 * @return {object} Respuesta de la api
 */
const request = async ( method, url, data) =>{
    try{
        if(method === 'post'){
            axios.post('http://localhost:3000/' + url, data)
        }

        if(method === 'get'){
           return axios.get('http://localhost:3000/' + url)
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