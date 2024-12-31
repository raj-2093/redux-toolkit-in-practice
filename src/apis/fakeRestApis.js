export async function getAllProductsApi() {
    const productsData = await fetch("https://fakestoreapi.com/products");
    return await productsData.json();
}

export async function getProductApi(productId) {
    const productsData = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return await productsData.json();
}

/**
 * 
 * @param {{ title: string, price: string, description: string, category: string, image: string}} product 
 */
export async function addProductApi(product) {
    // Verification and validation
    // API calling for posting product
    // return new product object that is added
    return product;
}