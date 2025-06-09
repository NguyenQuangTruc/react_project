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