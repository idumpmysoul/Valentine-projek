import LoveBackground from "../assets/love.svg";
import Heart from "../assets/Heart.png";




const Message = () => {
    return (
        <>
            <div className="w-full h-auto md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard">
            <div className="flex justify-end items-center h-full ">
    <img src={Heart} className="inline-block" />
    <img src={Heart} className="inline-block" />
    
</div>



                
                <br />
                
                {/* w-[330px] md:w-[560px] lg:w-[1002px] */}
                <div className="text-left w-full md:px-12 lg:px-[15px] px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px] md:mb-[20px] font-bold">To : </div>
                
                <div className="flex flex-col items-center justify-center gap-6">
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
            
            <img
                src={LoveBackground}
                alt="Hati"
                className="fixed bottom-0 left-0 right-0 w-full  h-auto lg:h-auto z-10 object-cover"
            />
        </>
    )
}

export default Message;
