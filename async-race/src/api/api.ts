import { engineURL, garageURL, winnersURL } from '../components/constants';
import { ICar, IDrive } from '../interfaces/interfaces';

async function createCarApi(body: object): Promise<ICar> {
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

const getCarApi = async (id: number): Promise<ICar> => {
  return (await fetch(`${garageURL}/${id}`)).json();
};

const updateCarApi = async (id: number, body: object) =>
  (
    await fetch(`${garageURL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

const deleteCarApi = async (id: number) =>
  (await fetch(`${garageURL}/${id}`, { method: 'DELETE' })).json();

async function startEngineApi(id: number) {
  return (await fetch(`${engineURL}?id=${id}&status=started`, { method: 'PATCH' })).json();
}

const stopEngineApi = async (id: number) =>
  (await fetch(`${engineURL}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

async function driveApi(id: number): Promise<IDrive> {
  const res = await fetch(`${engineURL}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
}

const deleteWinnerApi = async (id: number) =>
  (await fetch(`${winnersURL}/${id}`, { method: 'DELETE' })).json();

export {
  createCarApi,
  getCarApi,
  updateCarApi,
  deleteCarApi,
  startEngineApi,
  stopEngineApi,
  driveApi,
  deleteWinnerApi,
};
