import React from 'react'

const App = () => {
  return (
    <div className='bg-[#F8FAFC] w-full h-min-screen'>
      <h1 className='text-[#0F172A] text-center'>Generate Your Cover Letter</h1>
      <form action="">
        <label htmlFor="">Domain Name</label>
        <input type="text" placeholder='eg: example.com.np' />
        <label htmlFor="">Primary Name Server</label>
        <input type="text" placeholder='eg: ns1.babal.host ' />
        <label htmlFor="">Secondary Name Server</label>
        <input type="text" placeholder='eg: ns2.babal.host ' />
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='eg: Samipab Roka' />
        <label htmlFor="">Address</label>
        <input type="text" placeholder='full address' />
        <button>Download</button>
      </form>
    </div>
  )
}

export default App