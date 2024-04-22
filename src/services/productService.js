
import Product from "../models/productModel";


export const getAllProductsService = async (queries) => {
    const {  category, sort, page, limit } = queries;
    let queryObject = {};
   
    if (category) {
        queryObject.category = category;
    }
    let response = Product.find(queryObject);

    if (sort) {
        const sortList = sort.split(',').join(' ');
        response = response.sort(sortList);
    } else {
        response = response.sort('-createdAt');
    }

    const pages = Number(page) || 1;
    const limits = Number(limit) || 10;
    const skips = (pages - 1) * limits;
    response = response.skip(skips).limit(limits);
    return response;
};

export const createProductService = async (body) => {
    try {
        const response = await Product.create(body);
        return response;
    } catch (error) {
        return { status: 400, message: error.message };
    }
};

export const updateProductService = async (id, body) => {
    try {
        const response = await Product.findByIdAndUpdate(
            id,
            {
                $set: body
            },
            { new: true }
        );
        return response;
    } catch (error) {
        return { status: 400, message: error.message };
    }
};

export const deleteProductService = async (id) => {
    try {
        const response = await Product.findByIdAndDelete(id);
        return response;
    } catch (error) {
        return { status: 400, message: error.message };
    }
};

export const getProductByIdService = async (id) => {
    try {
        const response = await Product.findById(id);
        return response;
    } catch (error) {
        return { status: 400, message: error.message };
    }
};
