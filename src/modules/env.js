//-------------------------
// Common
//-------------------------
const BASE_URL = 'http://arteweek.kr'
const PROD = '/unitwin'
const DEV = '/2021/unitwin2021'
const CHAT_PATH = '/chat/index.html?l=kr&r='

const prod = {
    baseurl: BASE_URL,
    path: PROD,
    chat: BASE_URL + PROD + CHAT_PATH
}

const dev = {
    baseurl: BASE_URL,
    path: DEV,
    chat: BASE_URL+ DEV + CHAT_PATH
}

//-------------------------
// 개발 환경 : prod, dev
//-------------------------
const env = prod
//-------------------------



export default env

// ROOM_NUMBER: 1001 ~ 1020
// LANG: en, kr
// CHAT http://arteweek.kr/2021/unitwin2021/chat/index.html?l={LANG}&r={ROOM_NUMBER}
