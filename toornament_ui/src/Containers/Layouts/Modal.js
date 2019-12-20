import React,{Component} from 'react';
import Modal from 'react-responsive-modal';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  fontSize:"18px"
};

class ModalExample extends Component {
 

  render() {
    return (
      <div style={styles}>
      {/* <button onClick={this.onOpenModal}>Open modal</button> */}
      <Modal open={this.props.show} onClose={this.props.close}>
        <h2>Toornament</h2>
        <p>
         {this.props.res}
        </p>
      </Modal>
    </div>
    );
  }
}

export default ModalExample;

