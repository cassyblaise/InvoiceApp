import React, { Component } from 'react';
import {Table, Button} from "reactstrap";
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import {fasImage, faThumbUp, faThumbDown, faMoneyCheckAlt, faSearchDollar} from "@fortawesome/fontawesome-free-solid"

class App extends Component {
    state = {  
        isLoading : false,
        invoices  : [
             {
                    "id": "100",
                    "Vendor": "cassy",
                    "Amount": "$1000",
                    "Invoice": "123",
                    "Date": "16/02/2021"

                },
                {
                    "id": "200",
                    "Vendor": "cassy",
                    "Amount": "$1000",
                    "Invoice": "123",
                    "Date": "16/02/2021"

                },
                {
                    "id": "300",
                    "Vendor": "cassy",
                    "Amount": "$1000",
                    "Invoice": "123",
                    "Date": "16/02/2021"

                }
        ]
    }

    remove(id){
        console.log(id)
        let updatedInvoices = [...this.state.invoices].filter(i => i.id !== id)
        this.setState({invoices : updatedInvoices})
    }
    render() {
        const isLoading = this.state.isLoading;
        const allinvoices = this.state.invoices; 
          
            if(isLoading)
             return(<div>Loading...</div>)
            let invoices =
            allinvoices.map(invoice =>
                <tr key={invoice.id}>
                    <td>{invoice.Vendor}</td>
                    <td>{invoice.Amount}</td>
                    <td>{invoice.Invoice}</td>
                    <td>{invoice.Date}</td>
                    <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.id)}> Ok</Button></td>
                    <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.id)}>NOT OK</Button></td>
                    <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}>50%</Button></td>
                    <td><Button className="btn btn-lg btn-warning" onClick={() => this.remove(invoice.id)}>??</Button></td>
                    <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}>Image</Button></td>
                </tr>
            )
       return(
          <div className="container border border-secondary rounded center">

           <div className="row">
            <div className="col-12">
                 <h2>pending Invoices - Cassy INC </h2>
            </div>
           </div>

           <div className="row">
               <div className=".col-xs-12 center text-center">
                  <Table dark responsive striped bordered hover>
                      <thead>
                      <tr>
                          <th>Vendor</th>
                          <th>Amount</th>
                          <th>Invoices $</th>
                          <th>Date</th>
                          <th colSpan="4">Actions</th>
                          <th>Image</th>
                        </tr>  
                      </thead>

                      <tbody>
                          {this.state.invoices.length === 0 ? <td colSpan="9">All caught up!</td> : invoices}
                      </tbody>
                  </Table>
               </div>
           </div>
          </div>
       )  
    }
}
 
export default App;