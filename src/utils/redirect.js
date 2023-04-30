const redirectTo = (path) => {
    const url = import.meta.env.VITE_BASE_URL + path;
    return window.location.href = url;
}

export { redirectTo };