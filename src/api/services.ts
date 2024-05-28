import API from "./core";


export async function getUser(username: string) {
    await delay(1000);
    return API.get(`users/${username}`);
}

export async function getUserRepos(username: string) {
    await delay(1000);
    return API.get(`users/${username}/repos`);
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }