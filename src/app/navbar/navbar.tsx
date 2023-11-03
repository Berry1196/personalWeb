import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="bg-slate-800 px-10 py-4 ">
            <div className="flex justify-start space-x-4 ">
                <Link href="/">
                    <div className="text-white ml-20 px-3 py-2 rounded-full text-sm font-medium border border-black">Home</div>
                </Link>
                <Link href="/about">
                    <div className="text-white px-3 py-2 rounded-full text-sm font-medium border border-black">About</div>
                </Link>
                {/* Add more nav items here */}
            </div>
        </nav>
    );
}
