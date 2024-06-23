export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const removeFromLocalStorage = (key, title) => {
    const routines = loadFromLocalStorage(key);
    if (routines) {
        const updatedRoutines = routines.filter(routine => routine.title !== title);
        saveToLocalStorage(key, updatedRoutines);
    }
};
