import AWS from "aws-sdk"
async function AWSSetup() {
  let credentials = {}
  const s3 = new AWS.S3()
  return s3
}
export default { AWSSetup }
