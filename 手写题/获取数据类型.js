export const getType = (obj) => {
    return Object.prototype.toString.call(obj).replace('[Object','').replace(']','').toLowerCase();
}