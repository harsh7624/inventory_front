import React from 'react';
import ViewInventory from './ViewInventory.js'


const Navigation = ({onRouteChange}) => {
    return(
        <div>
        <nav  style = {{display : 'flex', justifyContent: 'flex-end'}}>
            <input
                    onClick={() => onRouteChange('signin')}
                    type="submit"
                    value="Sign Out"
                /> 
                 
                <br /> 
            <div>
                <ViewInventory />
            </div>
            
        </nav>
        </div>
    );
}

export default Navigation;