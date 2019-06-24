import React from 'react';

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
          quantity: 0

         
        }
      }

     /* onPlaceOrder = (event) => {
        console.log('does it work?',event);
        console.log(this.state.quantity);

        //for time being assistant manager change to updatequantity
        fetch('http://localhost:3000/updatequantity', {
            method : 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                quantity : this.state.quantity,
                pid: event.target.id
               
            })
        })*/

        onPlaceOrder = (event) => {
            console.log('does it work?',event);
            console.log(this.state.quantity);
    
            //for time being assistant manager change to updatequantity
            fetch('http://localhost:3000/addAssistant', {
                method : 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    quantity : this.state.quantity,
                    pid: event.target.id
                   
                })
            })
          
         //const { id } = props;
         //console.log(id);
     }

     onUpdateQuantity= (event) =>{
          //  console.log(event,'whyyyyyyyyyyyyy');
            //console.log(event.target.value,'harshhhhhhh')
            this.setState({quantity: event.target.value});

            //this.setState({signInEmail: event.target.value})
     }


      render() {
        const { pid, pname } = this.props;
        console.log(this.props,pid,pname);
        const candidateProps = { ...this.props };
       // delete candidateProps.candidates;
      
        return (
          <tr key = {pid}>
            <td  colSpan="5">
            <div border ='2'>
              
                <td> {pid}</td>
                <td>{ pname } </td>
                <td colSpan = "5"  >
                    <input 
                        onChange ={this.onUpdateQuantity}
                        type = "number" 
                        id = {pid}
                        key = {pid}  
                        className = "anchors"          
                     />
                </td>
                <td>
                    <input
                        onClick={this.onPlaceOrder}
                        type="submit"
                        value="order"
                        id = {pid}
                    /> 
                </td>
            </div>
            </td>
          </tr>
          );
      }
}

export default Inventory;