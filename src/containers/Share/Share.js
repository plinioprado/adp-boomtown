import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { FirebaseStorage } from '../../config/firebase';
import './styles.css';

class Share extends Component {

  selectImage = (fileInput) => {
    this.fileInput = this.fileInput || fileInput;
    this.fileInput.click();
  }

  handleImageUpload = () => {
    const cloud = FirebaseStorage.ref();
    const userId = 'AIzaSyDh9oYFLiFAgN2NnP2xALy_ZCgIxsGQ43M';
    // const userId = FirebaseAuth.currentUser.uid;
    const fileName = this.fileInput.files[0].name;
    // this.props.dispatch(startImageUpload());
    cloud.child(`images/${userId}/${fileName}`)
      .put(this.fileInput.files[0])
      .then(result => {
        // this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
        // this.handleNext;
      });
  }

  handleSubmit = () => {

  }

  uploadInput = '';

  render() {
    return (
      <div className="share">
        <form>
          <RaisedButton
            label="Select an Image"
            onClick={() => this.selectImage(this.uploadInput)}
          />
          <input
            onChange={this.handleImageUpload}
            ref={(input) => { this.uploadInput = input; }}
            hidden
            type="file"
            id="input"
          />
        </form>
      </div>
    );
  }
}

export default Share;
