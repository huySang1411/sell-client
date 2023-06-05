import { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import axios from 'axios';
// import './products.css';
// import { BASE_URL_API } from '../../requestMethods';

const Products = ({
    cat,
    filters,
    sort,
    filterPage,
    setPagination,
    pagination,
    axios,
    BASE_URL_API,
}) => {
    const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);

    let limit = pagination.limit;
    // const user = useSelector((state) => state.auth?.currentUser);
    // const axiosJWT = createAxiosInstance(user, dispatch);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    BASE_URL_API +
                        `products/?category=${cat}&page=${filterPage}&limit=${limit}&sort=${sort}`,
                );

                const { resultProducts, pagi } = res.data;
                setProducts(resultProducts);

                if (setPagination) {
                    setPagination(pagi);
                } else {
                    return;
                }

                console.log(res.data);
                // pagination = res.data.pagi;
            } catch (err) {
                console.log(err);
            }
            console.log('useEffect1');
        };

        getProducts();
    }, [cat, filterPage, setPagination, limit, sort]);

    console.log('products', products);

    return (
        <>
            {products.map((item, index) => (
                // <div className="col l-3 c-12" key={item._id}>
                <div
                    className={`col l-3 c-6 c${index % 2 === 0 ? '2' : '1'}`}
                    key={item._id}
                >
                    <Product item={item} />
                </div>
            ))}
        </>
    );
};

export default Products;
