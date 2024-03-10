import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const user = await createUser();
  const photo = await uploadPhoto();

  return { photo, user };
}
