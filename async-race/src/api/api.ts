import { garageURL } from '../components/constants';

export const createCarApi = async (body: object) => {
  (
    await fetch(garageURL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};
