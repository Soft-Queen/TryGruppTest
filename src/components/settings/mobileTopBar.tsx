type MobileTopBarProps = {
  onMenuClick: () => void;
};

export const MobileTopBar = ({ onMenuClick }: MobileTopBarProps) => {
return(
    <>
         <div className="md:hidden bg-white border-b border-[#F9FAFB] p-4 flex items-center justify-between sticky top-0 z-30">
        <div className=" flex items-center space-x-2">
          <img src="/react.svg" alt="" />
          <h1 className="text-lg font-bold">Untitled UI</h1>
        </div>
        <button className="text-gray-600" onClick={onMenuClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
)
}
