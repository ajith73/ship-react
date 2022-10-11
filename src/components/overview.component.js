import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import globe from "../images/globe.png"
import "../css/overviewcomponent.css"
import { connect } from "react-redux"
import { dispatch } from 'redux';
import { clickbutton } from '../store/button.store';
import { clickoverview } from '../store/overview.store';



class OverviewComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      button: true
    }
  }





  // componentDidMount() {
  //   console.log("cmonent did mount")
  //     this.props.dispatch(clickoverview());
  // }

  render() {
    return (
      <>

        <Container className='overview-container'>

          <Modal className='model-content modal-dialog ' show={this.props.popupShow} onHide={() => {
            this.props.dispatch(clickoverview(false));
          }}   >
            <Modal.Header className='model-header' closeButton><h3>overview</h3></Modal.Header>
            <Modal.Body className='model-body' style={{ display: "flex", width: "900px" }}><p className='model-p' >You are a design engineer for a container shipping company. The company management needs you to design container ships, each to be used on a particular route and for a specific purpose. Choose at least three of the five scenarios to work on.

              After you have found designs that work for the scenarios you have chosen, you will write a short report providing evidence and explaining how your designs meet each shipping scenario’s criteria.</p>
              <img src={globe} alt="image" className='globe-img' />

            </Modal.Body>
            <Modal.Footer>
              {!this.props.value ? <Button onClick={() => {
                this.props.dispatch(clickoverview(false));
                this.props.dispatch(clickbutton())
              }}>start</Button> : <Button onClick={() => {
                this.props.dispatch(clickoverview(false));
              }}>close</Button>}


            </Modal.Footer>
          </Modal>
        </Container>  </>
    )
  }
}

function mapStateToProps(state) {
  const { button } = state;
  const { overview } = state;
  return {
    value: button.value,
    popupShow: overview.popupShow
  };


}
export default connect(mapStateToProps)(OverviewComponent);



/*


handleModal(){  
    this.setState({show:!this.state.show})  ;
    
    
  } 

  
  componentDidMount() {
     setTimeout( () => {
      this.setState({show:!this.state.show});
      console.log("render 1" )
    } ,
      1000
    );
  }*/
  










