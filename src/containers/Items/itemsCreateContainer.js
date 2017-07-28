// Base fot future Item creation

import gql from 'graphql-tag';

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

/*
{
  "title": "ttt",
  "description": "ddd",
  "imageurl": "http://sss",
  "tags": [
      { "id": 1 }
  ],
  "itemowner": "111"
}
*/

console.log(addItem);
