import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ValidatedTextField from '../../components/ValidatedTextField';
import ShareSelect from './ShareSelect';

import './Share.css';

const Share = ({ item, selectImage, handleImageUpload, uploadInput }) => (
  <div>
    <form>
      <h4>Add an image</h4>
      <p>We live in a visual culture. Upload an image of the item you're sharing.</p>
      <RaisedButton
        label="Select an Image"
        onClick={() => selectImage(uploadInput)}
      />
      <input
        onChange={handleImageUpload}
        ref={(input) => { uploadInput = input; }}
        hidden
        type="file"
        id="input"
      />
      <h4>Add a Title & Description</h4>
      <p>Folks need to know what you're sharing. Give them a clue by adding a title & description.
      </p>
      <div>
        <ValidatedTextField label="Title" name="title" />
      </div>
      <div>
        <ValidatedTextField label="Description" name="description" rows="3" />
      </div>
      <h4>Categorize Your Item</h4>
      <p>To share an item, you'll add it to our list of categories. You can select multiple categories.</p>
      <ShareSelect />
      <h4>Confirm Things!</h4>
      <p>Great! If you're happy with everything, tap the button.</p>
      <div>
        <RaisedButton label="CONFIRM" primary type="submit" />
      </div>
    </form>
  </div>
);

Share.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  selectImage: PropTypes.func.isRequired,
  uploadInput: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired
};

export default Share;
