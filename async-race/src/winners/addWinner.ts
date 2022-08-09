import { createWinnerApi, getWinnerApi, getWinnerStatusApi, updateWinnerApi } from '../api/api';

export async function addWinner(id: number, time: number) {
  const winnerStatus = await getWinnerStatusApi(id);
  if (winnerStatus === 404) {
    await createWinnerApi({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinnerApi(id);
    if (time && winner.time) {
      await updateWinnerApi(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    }
  }
}
