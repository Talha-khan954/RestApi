import product from "../models/product.js";


export const getAllProducts = async (req, res) => {

    const  {company, name, featured, sort, select}  = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company
        console.log(queryObject, "queryObject")
    }

    if(name) {
        queryObject.name = {$regex : name , $options: "i"};
        console.log(queryObject)
    }

    if(featured){
        queryObject.featured = featured === "true";
        console.log(queryObject)
    }


    console.log("Query Object:", queryObject); // 👈 Debugging ke liye

    let apiData = product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || Infinity;

    let skip = (page - 1) * limit;

    // page = 2
    // limit = 3
    // skip = 1 * 3 = 3

    apiData = apiData.skip(skip).limit(limit);


    const products = await apiData;
    res.status(200).json({products});
};

export const getAllProductsTesting = async (req, res) => {
    console.log(req.query)
    const products = await product.find(req.query);
    console.log("Fetched Products:", products); // ✅ Debugging ke liye
    console.log("changes", req.query)
    res.status(200).json({products, nbHits: products.length });
};


export const getAllGames = async (req, res) => {
    res.status(200).json({msg:"i am playing the games..."});
};