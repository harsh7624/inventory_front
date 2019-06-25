import React from 'react';
import Inventory from './Inventory';

function onPlaceOrder(event) {
   console.log('does it work?',event);
    //const { id } = props;
    //console.log(id);
}

function section( props ) {
    return <Inventory {...props}/>
/*    const { pid, pname } = props;
    console.log(props,pid,pname);
    const candidateProps = { ...props };
   // delete candidateProps.candidates;
  
    return (
      <tr key = {pid}>
        <td  colSpan="5">
        <table border ='2'>
          
            <td> {pid}</td>
            <td>{ pname } </td>
            <td colSpan = "5"  >
                <input 

                    type = "number" 
                    id = {pid}            
                 />
            </td>
            <td>
                <input
                    onSubmit={onPlaceOrder}
                    type="submit"
                    value="order"
                    id = {pid}
                /> 
            </td>
        </table>
        </td>
      </tr>
  
     
    //  pname.map( pname => (
      //  <Candidate key={ candidate.id } candidate={ candidate } { ...candidateProps } />
      //) ),
    );*/
  }

class ViewInventory extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props,'props')
        this.state = {
          data: [],
          quantity: 0,
          role: ''
     
        }
      }

      updateQuantity = (event) =>{
          console.log(event);
         
      }

     
        
    viewInv = () => {

        fetch('http://localhost:3000/test', {
            method : 'get',
            headers: {'Content-Type': 'application/json'},
           
        })
          .then(response => response.json())
          .then(data => {
             console.log(data.rows);
             this.setState({data : data.rows});
             
          })
        //console.log(this.state);
        
    }

    approveInv = () => {
        console.log('assistant');


    }

    confirmInv = () => {
        console.log('manager visits this page');
    }

    render() {
        return(
            <div>
            <div>
                <h1> Display </h1>
                {/*
                    this.state.role === "manager"
                    ? <div>
                      <input
                            onClick={this.viewInv}
                            type="submit"
                            value=" View Inventory"
                        />

                        <h1> Manager </h1>
                        </div>
                    : <h1>Assistant </h1>
                        
                 */   
                }
                
                 <input
                      onClick={this.viewInv}
                      type="submit"
                      value=" View Inventory"
                 />

                 <input 
                    onClick = {this.approveInv}
                    type="submit"
                    value = "Assistant add Inventory"
                />

                <input 
                    onClick = {this.confirmInv}
                    type = "submit"
                    value = "approve inventory"
                />
                 <br/>
            </div>    
             <div>
                 <table>
                 {
                     this.state.data ?
                      (this.state.data.map (pid => section(pid) ))
                      
                      : null
                 }
                 </table>
            </div>
              </div> 
                  
            
        );
    }
}

export default ViewInventory;