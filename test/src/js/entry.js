import { gameStatus, changeGameStatus } from './countdown'

let usersCounter = 0
export let userIDs = []
export const minPlayers = 2
const maxPlayers = 10

$('.js-accept-game-button').on('click', function (e) {
    e.preventDefault()

    usersCounter++

    if (!gameStatus) {
        return
    }

    if (usersCounter >= maxPlayers) {
        $('#user-counter').text('Max users')
        return
    }

    $('#user-counter').text(usersCounter + ' users')
    userIDs.push(usersCounter);
})

export const resetCounter = () => {
    userIDs = []
    usersCounter = 0
    $('#user-counter').text(usersCounter + ' users')
    changeGameStatus()
}