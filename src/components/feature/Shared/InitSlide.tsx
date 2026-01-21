import { useNavigate } from "react-router-dom";

export const InitSlide = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-[90dvh] overflow-hidden">
            {/* 중앙 콘텐츠 */}
            <div className="
                relative z-10
                flex flex-col items-center justify-center
                h-full
                text-center
                px-6
            ">
                <h1 className="text-3xl sm:text-[50px] leading-snug sm:leading-normal font-bold">
                    새로운 구인, 간편한 구직<br />
                    한국 취업은 링크투비자
                </h1>

                <p className="text-xl sm:text-[30px] font-bold mt-6 sm:mt-10 text-gray-800 leading-relaxed">
                    복잡한 서류도,<br />
                    언어로 인한 장벽도 없습니다.
                </p>

                <p className="text-xl sm:text-[30px] font-bold mt-3 sm:mt-10 text-gray-600">
                    지금 바로 시작해보세요
                </p>

                <button
                    onClick={() => navigate("/init")}
                    className="
                        mt-10
                        px-8 py-3
                        rounded-xl
                        bg-blue-600
                        text-white
                        font-semibold
                        text-sm
                        hover:bg-blue-700
                        transition
                    "
                >
                    지금 시작하기
                </button>
            </div>

            {/* 하단 이미지 */}
            <img
                src="/images/bg-bt-all.png"
                alt=""
                className="
                    pointer-events-none
                    absolute bottom-0 left-0
                    w-full
                    h-[280px] sm:h-[340px]
                    object-cover
                    translate-y-1/3
                "
            />
        </div>
    );
};
