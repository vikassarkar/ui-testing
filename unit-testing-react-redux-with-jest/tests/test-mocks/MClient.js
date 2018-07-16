import fetch from "isomorphic-fetch";

//Mocking Real Api"s works on open network
// const headers = {
//     "Content-Type": "application/json",
//     "JsonStub-User-Key": "46a4465d-233d-462d-bfc7-6e3eb7b93948",
//     "JsonStub-Project-Key": "ce5ff799-eff2-41ea-86e0-2af3b6670588"
// }

export const headers = {
    "Content-Type": "application/json; charset=UTF-8",
};
export const print = {
    log: (data) => {
        //console.log(data);
    }
};
export const client = {
    get: (api, payload) => {
        return new Promise(function (resolve, reject) {
            let apiUrl = "";
            if (payload && payload.id)
                apiUrl = api + "/" + payload.id;
            else if (payload && payload.sort)
                apiUrl = api + "?_sort=" + payload.sort + "&_order=" + payload.order ? payload.order : "AESC";
            else if (payload && payload.filter)
                apiUrl = api + "?_filter=" + payload.filter;
            else
                apiUrl = api;
            fetch(apiUrl).then((response) => { return response.json() }).then((json) => {
                print.log(json)
                if (json.error)
                    reject(json);
                else
                    resolve(json);
            }).catch((error) => {
                print.log(error)
                reject(error);
            });
        });
    },
    post: (api, payload) => {
        return new Promise(function (resolve, reject) {
            fetch(api, {
                method: "POST",
                body: JSON.stringify(payload),
                credentials: "include",
                headers: headers
            }).then((response) => { return response.json() }).then((json) => {
                print.log(json)
                if (json.error)
                    reject(json);
                else
                    resolve(json);
            }).catch((error) => {
                print.log(error)
                reject(error);
            });
        });
    },
    put: (api, payload) => {
        return new Promise(function (resolve, reject) {
            fetch(api, {
                method: "PUT",
                body: JSON.stringify(payload),
                credentials: "include",
                headers: headers
            }).then((response) => { return response.json() }).then((json) => {
                print.log(json)
                if (json.error)
                    reject(json);
                else
                    resolve(json);
            }).catch((error) => {
                print.log(error)
                reject(error);
            });;
        });
    },
    patch: (api, payload) => {
        return new Promise(function (resolve, reject) {
            fetch(api, {
                method: "PATCH",
                body: JSON.stringify(payload),
                credentials: "include",
                headers: headers
            }).then((response) => { return response.json() }).then((json) => {
                print.log(json)
                if (json.error)
                    reject(json);
                else
                    resolve(json);
            }).catch((error) => {
                print.log(error)
                reject(error);
            });;
        });
    },
    delete: (api, payload) => {
        return new Promise(function (resolve, reject) {
            fetch(api, {
                method: "DELETE",
                headers: headers
            }).then((response) => {
                return { status: response.status, statusText: response.statusText }
            }).then((json) => {
                print.log(json)
                if (json.status === 200)
                    resolve(json);
                else
                    reject(json);
            }).catch((error) => {
                print.log(error)
                reject(error);
            });;
        });
    }
};