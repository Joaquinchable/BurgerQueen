import React, { Component } from "react";
import data from "./../data/LunchDinnerData";
import {
  WrapperItems,
  WrapperItem,
  WrapperItemT,
  WrappeOrder,
  WrapperBtn,
  CustomerName,
  Lb,
  Inp,
  Rows,
  RowsT,
  Cells,
  BtnDelete,
  BtnSent,
  Btn,
  Frag,
  CellsT
} from './../Layout/index'



//   import firebase from "firebase";
//   const firestore = firebase.firestore();

//    const settings = { /* your settings... */ timestampsInSnapshots: true };
//   firestore.settings(settings);
//     const db = firebase.firestore();

// library.add(faPlusSquare, faTrashAlt, faPaperPlane);

class LunchDinnerPage extends Component {
  constructor() {
    super();
    this.state = { operations: [], total: 0, user: "" };
  }

  handleClick = e => {
    const { value, name } = e.target;

    const array = this.state.operations;

    array.push({ type: name, price: value });

    this.state.operations.forEach(obj => {
      this.setState({ total: this.state.total + parseInt(obj.price) });
    });
  };

  handleDelete = id => {
    this.setState({
      operations: this.state.operations.filter((e, i) => {
        return i !== id;
      })
    });
    this.state.operations.forEach((e, i) => {
      if (i === id) {
        this.setState({ total: this.state.total - parseInt(e.price) });
      }
    });
  };

  //   handleOrder = () => {
  //     // db.collection("order")
  //     //   .add({
  //     //     user: this.state.user,
  //     //     operations: this.state.operations
  //     //   })
  //       .then(function(docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //         console.log("created order");
  //       })
  //       .catch(function(error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (<Frag>


      <WrapperBtn>
      {data.LunchAndDinner.map((item, i) => (
        <Btn
          key={i}
          id={i}
          onClick={this.handleClick}
          name={item.type}
          value={item.price}
          type="button"
        >
          {item.type} : ${item.price}.00
        </Btn>
      ))}
    </WrapperBtn>

      <WrapperItems>
       

        <WrappeOrder>
          <CustomerName>
            <Lb htmlFor="exampleForm2">Customer Name :</Lb>
            <Inp
              name="user"
              value={this.state.user}
              type="user"
              onChange={this.handleChange}
            />
          </CustomerName>
          {this.state.operations.map((menu, i) => {
            return (
              <WrapperItem key={i}>
                <Rows>
                  <Cells>{menu.type} : </Cells>
                  <Cells> ${menu.price}.00</Cells>
                  <Cells>
                       <BtnDelete type="button" onClick={() => this.handleDelete(i)}>
                             X
                       </BtnDelete>
                  </Cells>
                </Rows>
              </WrapperItem>
            );
          })}

          <WrapperItemT >
            <RowsT>
              <CellsT>Total:</CellsT>
              <CellsT>
                <strong>${this.state.total}.00</strong>
              </CellsT>
             
            </RowsT>
          </WrapperItemT >

          <BtnSent type="button" onClick={this.handleOrder}>
          Send to Kitchen
          </BtnSent>
        </WrappeOrder>
      </WrapperItems>
      </Frag>
    );
  }
}

export default LunchDinnerPage;
