const BASE_URL = 'https://front-test.hex.team/api';

export class MainApi {
    constructor() {
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    };

    register(data) {
        const url = `${BASE_URL}/register?username=${data.username}&password=${data.password}`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `${data.username}:${data.password}`,
                'Content-Type': 'application/json',
                "Accept": "application/json",
              }
        })
        .then(this._checkResponse)
    };

    login(data) {
        return fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
            // credentials: 'include',
            body: JSON.stringify({username: data.username, password: data.password})
        })
        .then(this._checkResponse)
    };
}

export const mainApi = new MainApi();