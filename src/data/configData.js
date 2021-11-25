export const config = {
    dev: "http://localhost:5500",
    production: "https://portfolio-mb1.herokuapp.com",
}

export const apiUrl = (window.location === 'localhost' || window.location.hostname === '127.0.0.0' ? config.dev : config.production);

export function getApiUrl() {
    return (window.location === 'localhost' || window.location.hostname === '127.0.0.0') ? config.dev : config.production;
}