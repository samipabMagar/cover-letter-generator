import React from 'react'

const LetterDetails = (props) => {
  
  return (
    <div className="border  border-zinc-400 shadow-2xl mt-2  py-5 px-5  mx-4 rounded-lg">
          <h3 className="text-center mb-4 text-xl font-semibold">
            Letter Details
          </h3>
          <form
            className="  flex flex-col rounded text-zinc-700  gap-3 "
            action=""
          >
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="">
                Domain Name
              </label>
              <input value={props.domainName} onChange={(e) => props.setDomainName(e.target.value)}
                className="py-2 px-4  bg-white rounded"
                type="text"
                placeholder="eg: example.com.np"
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="">
                Primary Name Server
              </label>
              <input
              value={props.primaryServer}
              onChange={(e)=> props.setPrimaryServer(e.target.value)}
                className="py-2 px-4  bg-white rounded"
                type="text"
                placeholder="eg: ns1.babal.host "
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="">
                Secondary Name Server
              </label>
              <input value={props.secondaryServer} onChange={(e)=> props.setSecondaryServer(e.target.value)}
                className="py-2 px-4  bg-white rounded"
                type="text"
                placeholder="eg: ns2.babal.host "
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="">
                Your Name
              </label>
              <input
                className="py-2 px-4  bg-white rounded"
                type="text"
                placeholder="eg: Samipab Roka"
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="">
                Address
              </label>
              <input
                className="py-2 px-4  bg-white rounded"
                type="text"
                placeholder="full address"
              />
            </div>
            <button onClick={props.handleDownload} className="bg-[#3B82F6] text-white rounded py-2 px-3 text">
              Download
            </button>
          </form>
        </div>
  )
}

export default LetterDetails