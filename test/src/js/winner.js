import { getRandomInt } from './utils'
import { minPlayers } from './entry'

export const winner = (userIDs, callback) => {
    if (userIDs.length < minPlayers) {
        $('#demo').text('Недостаточно участников')

        setTimeout(() => {
            callback()
        }, 5000);
        return
    }

    const min = 0;
    const max = userIDs.length - 1;

    const winnerID = userIDs[getRandomInt(min, max)];

    $('#demo').text('Победил юзер ID: ' + winnerID)

    setTimeout(() => {
        callback()
    }, 5000);
}
