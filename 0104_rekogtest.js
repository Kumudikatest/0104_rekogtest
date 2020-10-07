let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const sqs = new AWS.SQS();
const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {

    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/hirutest01041`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();

    } catch (err) {
        // error handling goes here
        //test ttt

    };
    try {
        let data = await s3.listObjects({
            Bucket: "induuuu",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};