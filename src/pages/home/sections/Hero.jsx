import { heroImage } from '../../../assets/images';

const Hero = () => {
    return (
        <section className="relative overflow-hidden px-8 py-16 before:absolute before:left-0 before:top-0 before:h-[750px] before:w-[750px] before:-translate-x-[20%] before:content-[url(/src/assets/images/multicircle.png)] after:absolute after:right-0 after:top-0 after:-z-10 after:h-[1399.298px] after:w-[467px] after:-translate-y-[25%] after:rotate-[65.712deg] after:rounded-[233.5px] after:bg-gradient-to-b after:from-[rgba(251,168,28,0.11)] after:to-[rgba(224,86,136,0.06)] after:blur-[150px] after:content-[''] lg:py-24">
            <div className="container mx-auto my-auto">
                <div className="grid gap-4 md:grid-cols-2 md:grid-rows-[auto_minmax(0,_1fr)] md:gap-6 lg:gap-8">
                    <div className="flex flex-col gap-4 text-center md:row-start-1 md:row-end-2 md:text-start">
                        <h1 className="whitespace-nowrap text-[34px] font-bold leading-9 md:text-6xl lg:text-[80px] lg:leading-[84px]">
                            <span className="text-secondary-50">Code the Next</span>
                            <br />
                            <span className="text-accent-500">Breakthrough!</span>
                        </h1>

                        <p className="text-base leading-6 md:text-3xl lg:text-4xl lg:leading-[57px]">
                            Join Our Developer <br /> Dream Team....!
                        </p>
                    </div>

                    <div className="text-center md:row-start-1 md:row-end-3">
                        <img src={heroImage} alt="hero-image" />
                    </div>

                    <div className="justify-self-start text-center lg:row-start-2 lg:row-end-3">
                        <button className="rounded-md bg-accent-500 px-9 py-2 font-nunito text-xl font-bold leading-normal text-primary-950 hover:bg-accent-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
