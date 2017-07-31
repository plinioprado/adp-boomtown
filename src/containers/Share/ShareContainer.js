import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import gql from 'graphql-tag';

import { FirebaseStorage } from '../../config/firebase';
import Share from './Share';
import ItemCard from './ItemCard';

import './Share.css';

class ShareContainer extends Component {

  item = {

    title: 'Amazing Item Title',
    description: 'Profound item description',
    imageurl: '../../images/item-placeholder.jpg',
    itemowner: {
      id: 'tU5JzFUwBjfwUjygIU55gJOeraZ2',
      email: 'mackenzie@redacademy.com',
      fullname: 'Mackenzie Kieran'
    }
  }

  selectImage = (fileInput) => {
    this.fileInput = this.fileInput || fileInput;
    this.fileInput.click();
  }

  handleImageUpload = () => {
    const cloud = FirebaseStorage.ref();
    const userId = 'tU5JzFUwBjfwUjygIU55gJOeraZ2';
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
      <div className="share-container" >
        <div className="share-card">
          <ItemCard
            item={this.item}
          />
        </div>
        <div className="share-form">
          <Share
            item={this.item}
            selectImage={this.selectImage}
            uploadInput={this.uploadInput}
          />
        </div>
      </div>
    );
  }
}

const addItem = gql`
   mutation addItem (
    $title: String!
    $description: String!
    $imageurl: String
    $tags: [AssignedTags]
    $itemowner: ID!
  ) {
    addItem(
      title: $title
      description: $description
      imageurl: $imageurl
      tags: $tags
      itemowner: $itemowner
    ) {
      title
      description
      imageurl
      tags
      itemowner {
        id
      }
    }
  }
`;

console.log(addItem); // TODO: Replace por mutation dispatch

export default ShareContainer;
