const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const {
    pathParameters: { id }
  } = event;
  const params = {
    TableName: "books",
    Key: { id }
  };
  try {
    const title = await documentClient.get(params).promise()
    
    const data = await documentClient.delete(params).promise();
    
    const response = {
      statusCode: 200,
      body: "Deleted " + JSON.stringify(title.Item.title)
    };
    
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};