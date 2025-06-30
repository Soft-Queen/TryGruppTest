const ConnectedEmail = () => {
    return(
        <>
             <div className="mb-8 border-b border-[#EAECF0]">
          <h5>User Roles</h5>
          <p className="text-[#667085] text-sm pb-5">
            Update your roles details and information.
          </p>
        </div>
        <div className="mb-8 flex  flex-col md:flex-row">
          <div className="w-full md:max-w-[15%]">
            <h3 className="font-semibold mb-1 text-[#344054]">
              Connected Email
            </h3>
            <span className="text-sm text-[#667085] tracking-normal">
              Select role account
            </span>
          </div>
          <div className=" gap-2 w-full md:max-w-[80%]">
            <label className="flex items-center gap-2 mb-1 text-[#344054] text-sm leading-5">
              <input
                type="radio"
                name="email"
                className="w-4 h-4 accent-[#7F56D9]"
                defaultChecked
              />
             <div className="mt-2 mb-1">
                 <span>My account email</span> <br />
              <span>olivia@untitledui.com</span>
             </div>
            </label>
            <label className="flex items-center gap-2 mb-1 text-[#344054] text-sm leading-5">
              <input
                type="radio"
                name="email"
                className="w-4 h-4 accent-[#7F56D9]"
              />
              <span>An alternative email</span>
            </label>
            <input
              type="email"
              placeholder="billing@untitledui.com"
              className="border border-[#D0D5DD] rounded-md p-2 w-full max-w-[50%] text-sm text-gray-800 accent-[#7F56D9] focus:outline-none focus:ring-1 focus:ring-[#D6BBFB]"
            />
          </div>
        </div>

        </>
    )
}
export default ConnectedEmail;