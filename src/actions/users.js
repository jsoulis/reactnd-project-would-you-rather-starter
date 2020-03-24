export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userAnswer ({ authedUser, qid, answer }) {
    return {
        type: SAVE_ANSWER,
        qid,
        answer,
        authedUser
    }
}