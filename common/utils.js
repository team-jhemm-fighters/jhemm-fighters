export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
}

// nice utils!
export function setPlayerProfile(string, object) {
    const temp = JSON.stringify(object);
    localStorage.setItem(string, temp);
}

export function getLocalStorage(string) {
    const temp = localStorage.getItem(string);
    const data = JSON.parse(temp);
    return data;
}

export function getTurnOne() {
    const temp = localStorage.getItem('round1');
    const data = JSON.parse(temp);
    return data;
}

// could be more versatile like so, with the default value of 1
export function getTurn(round = 1) {
    const temp = localStorage.getItem(`round${round}`);
    const data = JSON.parse(temp);
    return data;
}