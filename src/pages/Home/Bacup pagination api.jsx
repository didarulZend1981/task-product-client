app.get('/api/products', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        

        const startIndex = (page - 1) * limit;
     
        const total = await productCollection.countDocuments();

        const products = await productCollection.find({})
            .skip(startIndex)
            .limit(limit)
            .toArray();

        res.json({
            page,
            totalPages: Math.ceil(total / limit),
            products
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});