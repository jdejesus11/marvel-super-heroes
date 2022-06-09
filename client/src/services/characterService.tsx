import md5 from 'md5'

const BASE_URL = 'https://gateway.marvel.com:443/v1/public'
const API_KEY = '7496aae53f158cc22c0447f8b592d6fa'
const PRIVATE_KEY = 'aed3416c4e7cd8466a4bc9ac587ea585d672a253'

const getCharactersService = (value: string) => {
    let ts = Date.now()
    let hash = md5(`${ts}${PRIVATE_KEY}${API_KEY}`)
    let url = `${BASE_URL}/characters?nameStartsWith=${value}&apikey=${API_KEY}&ts=${ts}&hash=${hash}`
    let headers = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    return fetch(url, headers).then((response) => response.json())
}

export default {
    getCharactersService,
}
