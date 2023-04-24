import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/NavBar';
import Newsletter from '../components/Newsletter/Newsletter';
import Products from '../components/Products/Products';
import Slider from '../components/Slider/Slider';

// tam
import { createAxios } from '../createInstance';
import { loginSuccess } from '../redux/authRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/apiCalls';
import axios from 'axios';
import PromtionVideo from '../components/PromotionVideo/PromotionVideo';
import { useState } from 'react';
//

const MoreProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;
`;

const More = styled.div`
    position: relative;
    display: inline-block;
    padding: 10px 28px;
    line-height: normal;
    border: 1px solid #ffffff;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    letter-spacing: 1px;
    background-color: #d1d1d1;
    -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
        border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
        border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 1;
    color: #fff;
    overflow: hidden;
    font-weight: bold;

    &:hover {
        color: #000;
        background-color: transparent;
        border: 1px solid rgb(209, 209, 209);
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Info = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding: 30px 0;
    color: red;
`;

const Home = () => {
    // tam
    const user = useSelector((state) => state.auth?.currentUser);
    const dispatch = useDispatch();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    // const [pagination, setPagination] = useState({
    //     page: 1,
    //     limit: 12,
    //     totalRows: 20,
    // });

    const pagination = {
        page: 1,
        limit: 12,
        totalRows: 20,
    };

    const [test, setTest] = useState({});
    const handleRemove = async () => {
        try {
            const res = await axios.get(
                'https://test1245.vercel.app/api/products/find/6381853221cefae6d34b31e0',
            );
            console.log(res.data);
            setTest(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        // <div style={{ overflow: 'hidden' }}>
        //     <div className="container-product">
        //         <div className="grid wide">
        //             <div className="row">
        //                 <button onClick={handleRemove}>click</button>
        //                 <div>{test && test.title}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div style={{ overflow: 'hidden' }}>
            {/* <div> */}
            {/* <Button onClick={handleRemove}>test</Button> */}
            {/* <Announcement /> */}
            <Navbar />
            <Slider />
            {/* <Categories /> */}
            {/* <PromtionVideo /> */}
            <Info>CÁC SẢN PHẨM MỚI</Info>

            <div className="container-product">
                <div className="grid wide">
                    <div className="row">
                        <Products filterPage={pagination.page} pagination={pagination} />
                    </div>
                </div>
            </div>

            <Link to={`/products`} style={{ textDecoration: 'none' }}>
                <MoreProduct>
                    <More>Xem thêm</More>
                </MoreProduct>
            </Link>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;

// <div style={{ overflow: 'hidden' }}>
// {/* <div> */}
// {/* <Button onClick={handleRemove}>test</Button> */}
// {/* <Announcement /> */}
// <Navbar />
// <Slider />
// {/* <Categories /> */}
// {/* <PromtionVideo /> */}
// <Info>CÁC SẢN PHẨM MỚI</Info>

// <div className="container-product">
//     <div className="grid wide">
//         <div className="row">
//             <Products filterPage={pagination.page} pagination={pagination} />
//         </div>
//     </div>
// </div>

// <Link to={`/products`} style={{ textDecoration: 'none' }}>
//     <MoreProduct>
//         <More>Xem thêm</More>
//     </MoreProduct>
// </Link>
// <Newsletter />
// <Footer />
// </div>
