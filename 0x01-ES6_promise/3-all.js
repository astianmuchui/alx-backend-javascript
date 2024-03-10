import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPromise = uploadPhoto();
  const createUserPromise = createUser();

  Promise.all([uploadPromise, createUserPromise])
    .then((results) => {
      const [uploadResult, createUserResult] = results;
      console.log(uploadResult.body, createUserResult.firstName, createUserResult.lastName);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}
