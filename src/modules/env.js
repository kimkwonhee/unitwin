//-------------------------
// Common
//-------------------------
const BASE_URL = 'http://arteweek.kr'
const PATH = '/unitwin2021'
const CHAT_PATH = '/unitwin2021/chat/index.html?l=kr&r='
const DOWNLOAD = '/unitwin2021/file'

// DEV
const DEV_DOWNLOAD = '/file'
const DEV_CHAT_PATH = '/chat/index.html?l=kr&r='

const prod = {
    baseurl: BASE_URL,
    path: PATH,
    chat: BASE_URL + PATH + CHAT_PATH,
    chatPath: CHAT_PATH,
    link : DOWNLOAD
}

const dev = {
    baseurl: BASE_URL,
    path: PATH,
    chat: BASE_URL + PATH + CHAT_PATH,
    chatPath: DEV_CHAT_PATH,
    link : DEV_DOWNLOAD
}

//-------------------------
// 개발 환경 : prod, dev
//-------------------------
const env = dev
//-------------------------



export default env

// ROOM_NUMBER: 1001 ~ 1020
// LANG: en, kr
// CHAT http://arteweek.kr/2021/unitwin2021/chat/index.html?l={LANG}&r={ROOM_NUMBER}
