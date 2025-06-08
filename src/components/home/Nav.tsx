import React, { useState } from "react";

interface User {
    id: string;
    name: string;
    age: number;
}

const Nav: React.FC = () => {

    const [user, setUser] = useState<User[]>([])

    const [name, setName] = useState<string>("")

    const handleSetUser = () => {
        setUser([...user, { id: "1", name: name, age: 3340 }])

        setName("")
    }

    return (
        <nav className="bg-white shadow">
            <ul className="flex space-x-8 px-6 py-4 items-center">
                {
                    user.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="/" className="text-gray-800 font-semibold hover:text-blue-600">
                                    {item?.name}
                                </a>
                            </li>
                        )
                    })
                }
                <li>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </li>
                <li>
                    <button onKeyDown={(e) => e.key == "Enter" && handleSetUser} onClick={() => { handleSetUser() }} >setName</button>
                </li>
                <li className="relative group">
                    <button className="text-gray-800 font-semibold hover:text-blue-600 flex items-center focus:outline-none">
                        Danh mục
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
                        <li>
                            <a href="/san-pham" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">

                            </a>
                        </li>
                        <li>
                            <a href="/dich-vu" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                Dịch vụ
                            </a>
                        </li>
                        <li>
                            <a href="/lien-he" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;