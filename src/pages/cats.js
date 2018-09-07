import React, { Component } from 'react';
import {
  Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

class Cats extends Component {
  render() {

    return(
      <div>
        <header><h1>SINGLE & READY TO MINGLE... MEOW!</h1></header>
        <Row>
            <Col xs={12}>
                    <ListGroup>
                    {this.props.cats.map((cat, index) =>{
                      return (
                        <ListGroupItem
                          key={index}
                          header={
                            <h4>
                              <span className='cat-name'>
                                {cat.name}
                              </span>
                              - <small className='cat-age'>{cat.age} years old</small>
                            </h4>
                          }>
                          <span className='cat-enjoys'>
                            {cat.enjoys}
                          </span>
                        </ListGroupItem>
                      )
                    })}
                  </ListGroup>
                </Col>
              </Row>
              </div>
        );
    }
}



export default Cats
