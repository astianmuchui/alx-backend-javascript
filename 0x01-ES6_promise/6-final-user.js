import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((results) => {
      for (const result of results) {
        if (result.status === 'rejected') {
          result.value = `Error: ${result.reason.message}`;
          delete result.reason;
        }
      }
      return results;
    });

}