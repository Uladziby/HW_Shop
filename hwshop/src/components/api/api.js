export const base_url = 'https://api.escuelajs.co/api/v1/products'


export async function getAllProducts() {
    const response = await fetch(base_url+'?offset=0&limit=12');
    const data = await response.json();
    return data;
}

export async function getProduct(id) {
    console.log(id)
    const response = await fetch(base_url+`/${id}`);
    const data = await response.json();
    return data;
}