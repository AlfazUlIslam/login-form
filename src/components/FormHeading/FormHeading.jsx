const FormHeading = (props) => {
    const { content } = props

    return (
        <h1 className="w-[308px] mx-auto mb-[32px] 
        font-poppins font-medium text-[28px] leading-[28px] 
        text-[#FFFC] text-center">
            {content}
        </h1>
    )
}
export default FormHeading