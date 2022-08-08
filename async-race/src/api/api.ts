import { garageURL } from '../components/constants';
import { ICar } from '../interfaces/interfaces';

export async function createCarApi(body: object): Promise<ICar> {
  return (
    await fetch(garageURL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
}

export const getCarApi = async (id: number): Promise<ICar> => {
  return (await fetch(`${garageURL}/${id}`)).json();
};

export const updateCarApi = async (id: number, body: object) =>
  (
    await fetch(`${garageURL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCarApi = async (id: number) =>
  (await fetch(`${garageURL}/${id}`, { method: 'DELETE' })).json();
