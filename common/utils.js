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

export function setActions(action) {
    const temp = getActions();
    temp.push(action);
    const stringytemp = JSON.stringify(temp);
    localStorage.setItem('actions', stringytemp);

}

export function getActions() {
    const item = localStorage.getItem('actions');
    let temp = JSON.parse(item);
    if (!temp) {
        temp = [];   
    }
    return temp;
}

export function getRoundOne() {
    const temp = localStorage.getItem('round1');
    const data = JSON.parse(temp);
    return data;
}
export function getRoundTwo() {
    const temp = localStorage.getItem('round2');
    const data = JSON.parse(temp);
    return data;
}