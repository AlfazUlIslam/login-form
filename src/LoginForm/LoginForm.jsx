import { useState } from "react"
import background from "../assets/background.png"
import "./LoginForm.css"

const LoginForm = () => {
    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        e.preventDefault()

        const name = e.target.name
        const value = e.target.value

        setFormdata((prev) => ({...prev, [name]: value}))
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(formdata)
    }


  return (
    // login form bg
    <div className="w-[100vw] h-[100vh] bg-[#000] 
    bg-gradient-to-r from-darkMidnightBlue to-mediumMidnightBlue 
    flex justify-center items-center">
        {/* login form */}
        <div className="w-[540px] h-[456px] rounded-[20px] 
        bg-[#FFF] px-[72px] py-[48px]">
            {/* heading */}
            <h1 className="w-[308px] mx-auto mb-[32px] font-poppins font-medium 
            text-[28px] leading-[28px] text-[#000]">
                Login to your account
            </h1>
            {/* form group email */}
            <div className="flex flex-col items-start">
                <label className="mb-[12px] font-poppins font-normal 
                text-[16px] leading-[16px]">
                    Email
                </label>
                <input 
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    type="text" 
                    placeholder="balamia@gmail.com" 
                    className="w-[396px] h-[48px] 
                    rounded-8px border-[3px] border-[#DDD] 
                    pl-[16px] font-poppins font-normal 
                    text-[14px] leading-[14px] focus:ouline-none 
                    focus:outline-primaryBlue"
                />
            </div>
            {/* form group password */}
            <div className="mt-[24px] flex flex-col items-start">
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
                    type="text" 
                    placeholder="Enter your password" 
                    className="w-[396px] h-[48px] rounded-8px 
                    border-[3px] border-[#DDD] pl-[16px] font-poppins 
                    font-normal text-[14px] leading-[14px] 
                    focus:ouline-none focus:outline-primaryBlue"
                />
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
        </div>
    </div>
  )
}
export default LoginForm