import React from 'react'

const LetterPreview = (props) => {
  
  return (
     <div ref={props.coverLetter} className="bg-white mt-2 mx-4 text-[15px] gap-5 flex flex-col py-2  px-5 rounded-lg">
          <h4 className="text-right "><span className="font-semibold">Date:</span> 19 Nov 2025</h4>
          <p>
            To,
            <br /> The Hostmaster,
            <br /> Mercantile Communication Pvt. Ltd. <br /> Durbar Marg,
            Kathmandu
          </p>
          <h4><span className='font-semibold'>Subject:</span> NP Domain Registration</h4>
          <h4>Dear Sir/Madam,</h4>
          <p className="">
            I am writing this letter to request you to kindly register a {""}
             {props.domainName ? props.domainName : "yourdomain.com.np"} domain for me based on my name. I have provided my
            personal details, and also attached a scanned copy of my citizenship
            with this letter. I would be very glad if you approve my domain
            registration request.
          </p>
          <p>
            Thank you very much for consideration. I look forward to hearing
            from you soon.
          </p>
          <h4><span className='font-semibold'>Domain name:</span> {!props.domainName ? "yourdomain.com.np" : props.domainName}</h4>
          <h4><span className="font-semibold">Primary Name Server:</span> {props.primaryServer ? props.primaryServer: "ns101.prabhuhost.com"}</h4>
          <h4><span className='font-semibold'>Secondary Name Server:</span> {props.secondaryServer ? props.secondaryServer: "ns102.prabhuhost.com"}</h4>
          <p>Sincerely,<br /> Name: {props.name ? props.name: "[Your Name]"} <br /> Address: {props.address ? props.address : "[Your Address]"}</p>
        </div>
  )
}

export default LetterPreview