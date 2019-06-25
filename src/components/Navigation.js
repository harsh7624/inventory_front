import React from 'react';
import ViewInventory from './ViewInventory.js'


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props,'nai');
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
            <nav  style = {{display : 'flex', justifyContent: 'flex-end'}}>
                <input
                        onClick={() => this.props.onRouteChange('signin')}
                        type="submit"
                        value="Sign Out"
                    /> 
                     
                    <br /> 
                <div>
                    <ViewInventory   {...this.props.role}/>
                </div>
                
            </nav>
            </div>
        );
    }
}
/*const Navigation = ({onRouteChange,role}) => {
    console.log(role,'navi',onRouteChange);

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
                <ViewInventory   {...role}/>
            </div>
            
        </nav>
        </div>
    );
}*/

export default Navigation;