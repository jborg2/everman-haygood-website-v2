export const getRepo = async (url: URL) => {
    const res = await fetch(url);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const json = await res.json();
    return json
};