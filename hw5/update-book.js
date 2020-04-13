const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const {
    pathParameters: { id }
  } = event;
  const { title } = JSON.parse(event.body);
  const params = {
    TableName: "books",
    Item: {
      id: id,
      title: title
    },
    Key:{id}
  };
 
  try {
     const oldTitle = await documentClient.get(params).promise()
    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200,
      body: "Updated title from " + JSON.stringify(oldTitle.Item.title) + " to \"" + title + "\""
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};