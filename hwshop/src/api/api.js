export const base_url = 'https://fakestoreapi.com/products'

export async function getAllProducts(limit) {
    let response;
    try {
        response = await fetch(!limit ? `${base_url}` : `${base_url}?limit=${limit}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`${base_url}/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)

        return error.message
    }
}