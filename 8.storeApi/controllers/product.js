const Product=require('../models/ products')

// const getAllProductsStatic = async (req,res)=>{
//     res.status(200).json({msg: 'Get Static Product list' })
// }

// const getAllProducts = async (req,res)=>{
//     res.sendStatus(200).json({msg: 'Get Product list' })
// }

const getAllProducts = async (req,res)=>{
    // const {featured:featuredReq} = req.query
    // will search for featured products based on the input parameter
    // const product = await Product.find({featured: featuredReq}) 
    // as the request is coming in the format required, could be invoked directly.
    // issue with this methodology is if user provides some other variable it will be also part of the query and sa that variable doesnt exist, no items will be returned
    // const product = await Product.find(req.query)
    // so only pull out the fields which are required from the input using destructing 
    const {featured, name, company, ratingValue, ratingOperator, sort, fields, numericFilter} = req.query
    // console.log(featured, name, company, ratingValue, ratingOperator,sort, fields)
    const queryObject = {}
    if (featured) {
        // the below will create a new element in queryObject and queryObject will be { featured: 'false' }, but ideally no quotes should be put in the value as it is boolean
        // queryObject.featured = featured
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name){
        searchName = '^'+name
        console.log(searchName, typeof searchName)
        queryObject.name = { $regex: searchName, $options: 'i'} 
    }
    // if (ratingValue){
    //     // let checkValue = {};
    //     // if (ratingOperator === '>'){
    //     //     checkValue = `{ $gte: ${ratingValue} }`
    //     // }
    //     // queryObject.rating = checkValue
    //     queryObject.rating = ratingOperator === '>' ? `{$gte: ${ratingValue}}` : `{$gt: ${ratingValue}}`
    // }
    try {
        // const product = await Product.find(queryObject)
        // product = product.sort(price)
        // if(sort){
            //     console.log(sort)
            //     product = product.sort(sort)
            // }
            
            // creating the query properly before executing it. The result type is object(not sure how though?)
        let result = Product.find(queryObject)
            
            // console.log('Before sort '+ result + 'typeof '+ typeof result)
            // .sort(name -price) - sort with name in ascending and price in descending
        if (sort){
            const sortList = sort.split(',').join(' ')
            result = result.sort(sortList)
            // console.log('After sort '+ result1 + 'typeof '+ typeof result1)
        }else {
            //default sorting condition if not parameters are provided in the input. 
            result=result.sort('createdAt')
        }
            // console.log('After sort '+ result + 'typeof '+ typeof result)
            
            // once the result object have the query execute the same using await.
        if (fields){
            const selectList = fields.split(',').join(' ')
            result = result.select(selectList)
        }

        if (numericFilter){
            console.log(numericFilter);
            //Steps to replace the price>30,rating>=4 to the format understood by MongoDB price:{$gt: 30}, rating:{$gte:4}
            // define a field to map the human readable values to MongoDB equivalent, ie > to $gt
            const operatorMap = {
                '>':'$gt',
                '>=':'$gte',
                '=':'$eq',
                '<':'$lt',
                '<=':'$lte',
            };
            // type of fields to be searched \bLO will search for LO in the start and LO\b will search LO in the end. Here we are searching for different human readable ones.
            const regularExpression =  /\b(<|>|>=|=|<|<=)\b/g;
            // console.log(typeof regularExpression)
            //Use replace function to change human readable with mongoDB equivalent. replace have two inputs, if any instance of regularExpression is found, run the callback function with that instance to add hypen(-) before and after and also replace with value in the operatorMap[match] for the match symbol. 
            // input - price>30,rating>=4 output - price-$gt-30,rating-$gte-4
            let filter = numericFilter.replace(regularExpression,(match)=>`-${operatorMap[match]}-`)
            console.log(filter)
            // split the output into field opertor and value 
            // input price-$gt-30,rating-$gte-4 output will be 1. price $gt 30 2. rating $gte 4
            // filter = filter.split(',').forEach(element => {
            //     const [field,opertor,value] = element.split('-')
            //     console.log(field,opertor,value)
            // });
            // numeric filters are allowed only in 2 numeric fields available. check whether request have only those specific requests. 
            const options = ['price','rating'];
            filter = filter.split(',').forEach(element => {
                const [field,operator,value] = element.split('-')
                //check whether the field is present in the op
                if (options.includes(field)){
                    //using dynamic instead of . for property value. 
                    queryObject[field] = {[operator]:Number(value)}
                }
                // final queryObject as follows 
                // { price: { '$gt': 30 },
                //  rating: { '$gte': 4 } }
            });
            console.log(queryObject)
        }

        // if value is present take that value, else 1 will be default value 
        const page = req.query.page || 1
        const limit = req.query.limit || 30
        // calulate number of records to be skipped
        const skip = (page-1)*limit
        // add skip and limit to get pagination 
        result = result.skip(skip).limit(limit)

        const product = await result 
        res.status(200).json({product, nbHits: product.length})
    } catch (error) {
        console.log(error)
    }
}

const getAllProductsStatic = async (req,res)=>{

    try {
        // const product = await Product.find({price: '{$gt:30}'}).sort('price').select('name price') 
        // const product = await Product.find({featured: true}).sort('price').select('name price featured') 
        // const product = await Product.find({featured: true, name: 'vase table'}).sort('price').select('name price featured') 
        // const searchName = /^wo/
        // console.log(typeof searchName, searchName)
        // const product = await Product.find({name: {$regex: searchName,$options: 'i'}})
        // const query = Product.find({})
        // const product = await query
        const product = await Product.find({}).sort('name').skip(2).limit(10)
        res.status(200).json({nbHits: product.length,product})
        
    } catch (error) {
        console.log(error)
    }
}

const createNewProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body) 
        res.status(201).json({msg: `${req.body.length} got added`,product:{product}})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected happened'})
    }
}



module.exports = {
    getAllProducts,
    getAllProductsStatic,
    createNewProduct
}