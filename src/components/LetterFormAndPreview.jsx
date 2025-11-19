import React, { useRef, useState } from 'react'
import LetterDetails from './LetterDetails'
import LetterPreview from './LetterPreview'

const LetterFormAndPreview = ({handleDownload, coverLetter}) => {
  const[domainName, setDomainName] = useState(""); 
  const[primaryServer, setPrimaryServer] = useState("");
  const[secondaryServer, setSecondaryServer] = useState("");
  const[name, setName] = useState("");
  const[address, setAddress] = useState("");
  return (
    <div>
        <LetterDetails setDomainName={setDomainName} primaryServer={primaryServer} setPrimaryServer={setPrimaryServer} secondaryServer={secondaryServer} setSecondaryServer={setSecondaryServer} domainName={domainName} handleDownload={handleDownload}/>
       <LetterPreview secondaryServer={secondaryServer} setSecondaryServer={setSecondaryServer} primaryServer={primaryServer} domainName={domainName} coverLetter={coverLetter}/>
      
      </div>
  )
}

export default LetterFormAndPreview