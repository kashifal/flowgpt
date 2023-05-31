import React, { useState } from 'react'

const GPTForm = () => {
    const [gptprompt, setGPTPrompt] = useState({
        name:'',
        description:'',
        tags:'',
        Bounty:''
      })



       //here is prompt form value
  function formFunc(e){ 
    console.log(gptprompt);
  }




  return (
    <div className="z-50  relative h-full flex items-center  gap-8 ">
              <form
                className="  pr-8 sm:pl-44 pl-4 pt-8 relative rounded-xl w-[100%]  h-full"
                style={{
                  background: "rgba(26, 27, 30, 0.85)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <img
                  src="/images/cisa.png"
                  className="sm:absolute relative lg:left-12 lg:w-auto w-12 left-4"
                  alt=""
                />
                <div>
                  <label
                    htmlFor="comment"
                    className="block
													text-base font-medium leading-6 text-gray-100"
                  >
                    Name of Prompt
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="JesusGPT"
                      type="text"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-3  shadow-sm text-sm focus:outline-none px-4"
                      name=""
                      id=""
                      value={gptprompt.name}
                      onChange={(e) => setGPTPrompt({...gptprompt, name:e.target.value})}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="comment"
                    className="block
													text-base font-medium leading-6 text-gray-100"
                  >
                    Description
                  </label>
                  <div className="mt-4">
                    <textarea
                      placeholder="For Example: Generate personalized emails like a pro"
                      name=""
                      id=""
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-2  shadow-sm text-sm focus:outline-none px-4"
                      cols="30"
                      rows="8"
                      value={gptprompt.description}
                      onChange={(e) => setGPTPrompt({...gptprompt, description:e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="comment"
                    className="block
                    text-base font-medium leading-6 text-gray-100"
                  >
                    Tags
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="Search for Tags..."
                      type="text"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-3  shadow-sm text-sm focus:outline-none px-4"
                      name=""
                      id=""
                      value={gptprompt.tags}
                      onChange={(e) => setGPTPrompt({...gptprompt, tags:e.target.value})}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="comment"
                    className="block
													text-base font-medium leading-6 text-gray-100"
                  >
                    Bounty
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="Individual Prompt"
                      type="text"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-3  shadow-sm text-sm focus:outline-none px-4"
                      name=""
                      id=""
                      value={gptprompt.Bounty}
                      onChange={(e) => setGPTPrompt({...gptprompt, Bounty:e.target.value})}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => formFunc()}
                  className="px-8 mt-6 py-2 bg-white rounded-full"
                >
                  Save
                </button>
              </form>
            </div>
  )
}

export default GPTForm