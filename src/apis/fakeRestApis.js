export async function getAllProducts() {
    const jsonProductsData = await fetch("https://fakestoreapi.com/products").then(res => res.json());
    console.log(`rj_ getAllProducts data -- ${jsonProductsData}`);
    return jsonProductsData;
}