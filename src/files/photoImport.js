import s3 from "./awsconfig"
// https://concertsbucket.s3.amazonaws.com/aws+upload/
let apiURL = process.env.REACT_APP_IMAGE_URL || null

const getAPIPhotos = async (city) => {
  let bucketParams = {
    Bucket: "concertsbucket",
  }
  if (apiURL && city) {
    await s3.listObjects(bucketParams, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
}

export default getAPIPhotos
/* import photos */
