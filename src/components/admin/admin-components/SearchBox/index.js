import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return(
        <div className=" w-[300px] h-[30px] bg-[#f0f5ff] rounded-[40px] m-auto float-left ml-[20px] mr-[50px] relative flex flex-row items-center">
             <div className="ml-2 "><IoSearch size={17} color="#191F5C"/></div>
            <input  type="text" placeholder="search here..."  className="relative pl-2 mt-[0px] align-middle bg-transparent ml-2 border-0 outline-0 placeholder-[rgb(25,31,92)]"/>
        </div>

    )


}

export default SearchBox;