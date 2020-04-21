export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function setPlayerProfile(string, object) {
    const temp = JSON.stringify(object);
    localStorage.setItem(string, temp);
}

export function getLocalStorage(string) {
    const temp = localStorage.getItem(string);
    const data = JSON.parse(temp);
    return data;
}