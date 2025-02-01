const pageData = {
    title: "About Our Platform",
    text1: "We are building a unique freelance platform designed to help every talent find work from any corner of the world. Our platform connects companies with high-quality, vetted professionals, enabling fast hiring without the need for costly recruiters.",
    text2: "We invite everyone interested to join us as a contributor or propose a commercial partnership on mutually beneficial terms."
}

const HeroSection = () => {
    return(
        <div className="mt-10 lg:mt-25 w-full block lg:flex lg:border-t border-b border-divider-grey">
            <div className="w-full pb-4 md:pb-8 lg:pb-0 justify-center lg:w-1/3 px-4 lg:px-10 flex items-center border-b lg:border-r border-divider-grey text-2xl md:text-3xl lg:text-4xl lg:leading-normal xl:text-5xl xl:leading-normal 2xl:text-64 2xl:leading-normal bg-brand-gradient text-transparent font-semibold">{pageData.title}</div>
            <div className="w-full lg:w-2/3">
                <div className="px-4 py-6 lg:px-8 lg:py-12 xl:px-10 xl:py-20 text-text-darken-1 text-md md:text-lg lg:text-2xl border-b border-divider-grey">{pageData.text1}</div>
                <div className="px-4 py-6 lg:px-8 lg:py-12 xl:px-10 xl:py-20 text-text-darken-1 text-md md:text-lg lg:text-2xl">{pageData.text2}</div>
            </div>
        </div>
    )
}

export default HeroSection