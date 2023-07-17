import { LOGO_URL } from "../utilities/constants";
const Header=function (){
    return (
        <div className='container flex justify-between'>
            <div className='logo'>
                <img src={LOGO_URL} className='w-28'/>
            </div>
            <div className='links'>
                <ul className='flex gap-5 mx-5 my-5 text-xl'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Grocery</li>
                </ul>
            </div>
        </div>
    )};
export default Header;