const axios = require('axios');

const request = async ( method, url, data) =>{
    try{
        if(method === 'post'){
            axios.post('http://localhost:3000/' + url, data)
        }

        if(method === 'get'){
            axios.get('http://localhost:3000/' + url)
            .then((response)=>{
                console.log(response);
                debugger;
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