import React from 'react';
import Loader from "../Loader/Loader"

const WithLoader = Component => ({ isLoading, ...props }) => {

        if (!isLoading) 
            return (<Component {...props} />);
            
        return (<Loader> </Loader>);
    }

export default WithLoader