import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const product = await Product.findOne({ 'id': request.params.id });
        response.status(200).json(product);
    }catch (error) {
     response.status(400).json({ message : error.message });
    }
}

  