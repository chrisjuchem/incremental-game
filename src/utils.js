export const getFormattedTime = (date) => {
    let hours = ('0' + date.getHours().toString()).slice(-2);
    let minutes = ('0' + date.getMinutes().toString()).slice(-2);
    let seconds = ('0' + date.getSeconds().toString()).slice(-2);
    let millis = date.getMilliseconds().toString().padEnd(3, '0');

    return `${hours}:${minutes}:${seconds}.${millis}`;
};
