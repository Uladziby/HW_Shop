export const base_url = 'https://fakestoreapi.com/products'
//export const base_url = 'https://api.escuelajs.co/api/v1/categories'


export async function getAllProducts(limit) {
    try {
        const response = await fetch(`${base_url}?limit=${limit}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message
    }

}

export async function getProduct(id) {
    try {
        const response = await fetch(base_url + `/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error.message
    }
}