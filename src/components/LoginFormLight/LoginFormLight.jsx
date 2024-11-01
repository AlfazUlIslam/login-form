import { useState } from "react"
import { FormHeading } from ".."
import { MdError } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginFormLight = () => {
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
        <div className="w-[100vw] h-[100vh] bg-gradient-to-r 
        from-[#000] to-[#004] flex flex-col 
        justify-center items-center gap-6">
            {/* login form */}
            <form className="w-[540px] h-[456px] rounded-[20px] 
            bg-[#FFF] px-[72px] py-[48px]">
                {/* heading */}
                <FormHeading content={"Login to your account"} />
                {/* form group email */}
                <div className="flex flex-col items-start">
                    <label className="mb-[12px] font-poppins font-normal 
                    text-[16px] text-[#344054] leading-[16px]">
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
                        border-[3px] border-[#DDD] pl-[16px] 
                        bg-[transparent] font-poppins font-normal 
                        text-[14px] leading-[14px] text-[#000]
                        focus:ouline-none focus:outline-primaryBlue"
                    />
                </div>
                {/* form group password */}
                <div className="mt-[24px] flex flex-col items-start 
                relative">
                    {/* label & forgot link */}
                    <div className="w-[396px] flex justify-between items-center">
                        <label className="mb-[12px] font-poppins font-normal 
                        text-[16px] leading-[16px]">
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
                        border-[3px] border-[#DDD] pl-[16px] font-poppins 
                        font-normal text-[14px] leading-[14px] 
                        focus:ouline-none focus:outline-primaryBlue"
                    />
                    {/* eye icon */}
                    <div 
                        className="w-[30px] h-[30px] text-xl 
                        flex justify-center items-center 
                        absolute right-4 top-[50%]"
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
                <div className={`${messageTheme ? "bg-[#BFB]" : "bg-[#FBB]"} 
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
export default LoginFormLight