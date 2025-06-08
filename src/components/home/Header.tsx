import './Header.css'
import { useState } from 'react'

export default function Header(props: any) {
    function doiMauNen(mauNen: string) {

        document.body.style.backgroundColor = mauNen

    }

    const [mau, setMau] = useState<string>("red");

    return (

        <div className='header'>
            <div className="h-12 w-full flex justify-center items-center text-13px" >

                {/* logo */}
                < img className="h-7" src={props.ursLogo} alt="" />

                {/* list item */}
                < ul className='flex'>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Cửa Hàng
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-50 w-screen left-134 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Mac
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-50 w-screen left-110 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            iPad
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-50 w-screen left-95 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            iPhone
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-50 w-screen left-78 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Watch
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-53 w-screen left-55 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Air Pods
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-55 w-screen left-35 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            TV & Nhà
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-55 w-screen left-13 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Giải Trí
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-60 w-screen  -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Cửa Hàng
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-60 w-screen left-125 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='ml-5 mr-5 relative group'>
                        <a href="#" className=''>
                            Cửa Hàng
                        </a>
                        {/* Submenu */}
                        <div className="flex pl-60 w-screen left-125 -translate-x-1/2 absolute top-full z-10 bg-white shadow-lg p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Mua hàng</p>
                                    </li>
                                    <li className='mt-2'>
                                        <b className='font-bold text-2xl'>
                                            Mua sản phẩm mới nhất
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Mac
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPad
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            iPhone
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Apple Watch
                                        </b>
                                    </li>
                                    <li className='mt-1'>
                                        <b className='font-bold text-2xl'>
                                            Phụ Kiện
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Tình trạng đơn hàng
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Apple Trade In
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Tài Chính
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-10'>
                                <ul>
                                    <li className='mt-1'>
                                        <p className='text-10px text-gray-500'>Liên Kết Nhanh</p>
                                    </li>
                                    <li className='mt-2'>
                                        <p className='text-13px font-semibold'>
                                            Giáo Dục
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-13px font-semibold'>
                                            Doanh Nghiệp
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul >

                <div>
                    <input type="text" className='border-2 rounded-2xl' />
                </div>

                <button className='ml-10 bg-amber-950 text-white pl-1 pr-1 rounded-2xl'
                    onClick={(e) => {
                        if (mau === "white") {
                            doiMauNen("green")
                            setMau("green")
                        } else {
                            doiMauNen("white")
                            setMau("white")
                        }
                    }}
                >
                    Đổi màu nền
                </button>
            </div >


        </div>
    )
}