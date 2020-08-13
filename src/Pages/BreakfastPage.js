import React, { Component } from "react";
import data from "./../data/BreakfastData";
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




class BrekfastPage extends Component {
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

 

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (<Frag>


      <WrapperBtn>
      {data.Breakfast.map((item, i) => (
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
            <Lb htmlFor="exampleForm2"> Customer Name :</Lb>
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
                ${this.state.total}.00
              </CellsT>
             
            </RowsT>
          </WrapperItemT >

          <BtnSent 
          type="button" 
          onClick={this.handleOrder}>
          Send to Kitchen
          </BtnSent>
        </WrappeOrder>
      </WrapperItems>
      </Frag>
    );
  }
}

export default BrekfastPage;
