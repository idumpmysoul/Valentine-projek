import LoveBackground from "../assets/love.svg";
import Heart from "../assets/Heart.png";
import Bubble from "../assets/buletbulet.png";



const Message = () => {
    return (
        <>
    <div className="overflow-hidden w-full h-auto md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center -rotate-2 shadow-xl shadow-shadowcard">
    <div className="overflow-hidden flex justify-end items-center h-full ">
    <img src={Heart} className="inline-block" />
    <img src={Heart} className="inline-block" />
    
</div>
<br />
                
                {/* w-[330px] md:w-[560px] lg:w-[1002px] */}
                <div className="overflow-hidden text-left w-full md:px-12 lg:px-[15px] px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px] md:mb-[20px] font-bold">To : </div>
                
                <div className="overflow-hidden flex flex-col items-center justify-center gap-6">
                    <div className="text-left w-full md:px-12 lg:px-[15px] px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px] font-bold">From :</div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                
            </div>
            <div className="absolute overflow-hidden w-full bottom-0">
            <img src={LoveBackground} alt="Hati" className="overflow-hidden bottom-0 left-0 right-0 w-full md:scale-150 lg:scale-125 translate-y-24 h-fit z-10 object-fit" />
            </div>
        </>
    )
}

export default Message;
