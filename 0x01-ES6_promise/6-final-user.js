import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const profilePromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, profilePromise])
    .then((results) => {
      const resultsArray = results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));

      return resultsArray;
    });
}
