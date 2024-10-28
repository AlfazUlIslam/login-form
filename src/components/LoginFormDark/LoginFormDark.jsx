import { useState } from "react"
import { FormHeading } from ".."
import { MdError } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { galaxyBackground, facebookLogo, googleLogo } from "../../assets"

const LoginFormDark = () => {
    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })
    const [toggle, setToggle] = useState(false)
    const [message, setMessage] = useState("")
    const [messageTheme, setMessageTheme] = useState(false)
    const [toggleVis, setToggleVis] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()

        const name = e.target.name
        const value = e.target.value

        setFormdata((prev) => ({...prev, [name]: value}))
    }

    const handleClick = (e) => {
        e.preventDefault()

        if (!(formdata.email && formdata.password)) {
            setMessage("All fields are required")
            setMessageTheme(false)
            setToggle(true)
        } else {
            setMessage("Login successful")
            setMessageTheme(true)
            setToggle(true)
            setFormdata({
                email: "",
                password: ""
            })
        }
    }

    const handleToggle = (e) => {
        e.preventDefault()
        setToggle(false)
    }

    const handleInputClick = () => {
        setToggle(false)
    }
    
    const handleToggleVis = () => {
        setToggleVis(prev => !prev)
    }

    return (
        // login form bg
        <div 
            className="w-[100vw] h-[100vh] bg-cover bg-center 
            bg-no-repeat flex flex-col justify-center items-center 
            gap-6"
            style={{backgroundImage: `url(${galaxyBackground})`}}    
        >
            {/* login form */}
            <form className="w-[540px] h-[564px] rounded-[20px] 
            bg-[#000C] px-[72px] py-[48px]">
                {/* heading */}
                <FormHeading content={"Create an account"} />
                {/* google & facebook login container */}
                <div className="my-[32px] flex flex-col items-center 
                gap-[16px]">
                    {/* google & facebook buttons */}
                    <div className="flex justify-center items-center 
                    gap-[16px]">
                        {/* google button */}
                        <button className="w-[190px] h-[48px] 
                        rounded-[10px] bg-[#26272B] flex justify-center 
                        items-center gap-[8px]">
                            <img src={googleLogo} alt="Google Logo" />
                            <span className="font-poppins font-semibold 
                            text-[16px] text-[#A0A0AB]">
                                Google
                            </span>
                        </button>
                        {/* facebook button */}
                        <button  className="w-[190px] h-[48px] 
                        rounded-[10px] bg-[#26272B] flex justify-center 
                        items-center gap-[8px]">
                            <img src={facebookLogo} alt="Facebook Logo" />
                            <span className="font-poppins font-semibold 
                            text-[16px] text-[#A0A0AB]">
                                Facebook
                            </span>
                        </button>
                    </div>
                    {/* or text */}
                    <div className="font-poppins font-semibold 
                            text-[16px] text-[#A0A0AB]">
                        or
                    </div>
                </div>
                {/* form group email */}
                <div className="flex flex-col items-start">
                    <label className="mb-[12px] font-poppins font-normal 
                    text-[16px] text-[#D1D1D6] leading-[16px]">
                        Email
                    </label>
                    <input 
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        onClick={handleInputClick}
                        type="text" 
                        placeholder="balamia@gmail.com" 
                        className="w-[396px] h-[48px] rounded-[8px] 
                        border-[3px] border-[#3F3F46] pl-[16px] 
                        bg-[transparent] font-poppins font-normal 
                        text-[14px] leading-[14px] text-[#FFF] 
                        focus:outline-none focus:border-primaryBlue"
                    />
                </div>
                {/* form group password */}
                <div className="mt-[24px] flex flex-col items-start 
                relative">
                    {/* label & forgot link */}
                    <div className="w-[396px] flex justify-between items-center">
                        <label className="mb-[12px] font-poppins font-normal 
                        text-[16px] text-[#D1D1D6] leading-[16px]">
                            Password
                        </label>
                        <a 
                            className="font-poppins font-normal 
                            text-[16px] leading-[16px] text-primaryBlue"
                            href="#">
                            Forgot?
                        </a>
                    </div>
                    <input 
                        name="password"
                        value={formdata.password}
                        onChange={handleChange}
                        onClick={handleInputClick}
                        type={toggleVis ? "text" : "password" } 
                        placeholder="Enter your password" 
                        className="w-[396px] h-[48px] rounded-[8px] 
                        border-[3px] border-[#3F3F46] pl-[16px] 
                        bg-[transparent] font-poppins font-normal 
                        text-[14px] leading-[14px] text-[#FFF] 
                        transition-all duration-1000 
                        focus:outline-none focus:border-primaryBlue"
                    />
                    {/* eye icon */}
                    <div 
                        className="w-[30px] h-[30px] text-xl 
                        text-[#FFF] flex justify-center 
                        items-center absolute right-4 top-[50%]"
                        onClick={handleToggleVis}    
                    >
                        {toggleVis ? <FaEye /> : <FaEyeSlash /> }
                    </div>
                </div>
                <button 
                    onClick={handleClick}
                    className="w-[396px] h-[52px] rounded-[8px] 
                    bg-primaryBlue mt-[32px] font-poppins font-semibold 
                    text-[16px] leading-[16px] text-[#FCFCFD] transition-all 
                    duration-1000 hover:bg-fadedBlue active:scale-90">
                    Login Now
                </button>
                {/* sign up link */}
                <div className="mt-[42px] flex justify-center 
                items-center gap-[8px]">
                    <span className="font-poppins font-normal 
                    text-[16px] leading-[16px] text-[#98A2B3]">
                        Dont have an account?
                    </span>
                    <a 
                        className="font-poppins font-normal 
                    text-[16px] leading-[16px] text-primaryBlue"
                        href="#"
                    >
                        Sign Up
                    </a>
                </div>
            </form>
            {/* error message container */}
            <div className="w-[350px] h-[80px] rounded-[10px] 
            bg-[transparent]">
                {toggle && 
                // error message wrapper
                <div className={`bg-[#000C] 
                ${messageTheme ? "text-[#070]" : "text-[#700]"} 
                w-[100%] h-[100%] rounded-[10px] 
                flex justify-center items-center gap-2`}
                >
                    {/* error icon */}
                    <div className="text-3xl">
                        {messageTheme ? 
                        <ImCheckboxChecked />
                        :
                        <MdError />
                        }
                    </div>
                    {/* error message */}
                    <div className="font-poppins font-semibold 
                    text-lg">
                        {message}
                    </div>
                    {/* ok button */}
                    <button 
                        className={`${messageTheme ? "bg-[#070]" : "bg-[#700]"}
                        px-3 py-1 rounded-md text-[white]`}
                        onClick={handleToggle}
                    >
                        OK
                    </button>
                </div>
                }
            </div>
        </div>
    )
}
export default LoginFormDark