import { BASE_URL } from "./constants";

export class ShorterApi {
    constructor() {
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    };

    generateLink(link, token) {
        const url = `${BASE_URL}/squeeze?link=${link}`;
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
        })
        .then(this._checkResponse)
    };

    getData(token) {
        return fetch(`${BASE_URL}/statistics`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
        })
        .then(this._checkResponse)
    }
}

export const shorterApi = new ShorterApi();