import { useState,useEffect } from 'react';
import './App.css'
import Card from './components/card'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className='font-["Hanken_Grotesk"] min-h-screen lg:grid lg:place-content-center'>
      <div className='lg:grid lg:grid-cols-[auto_auto] lg:place-content-center' style={{boxShadow: windowWidth >= 1024 ? "10px 10px 18px -20px #333333":"none"}}>
        <section className='rounded-b-[40px] lg:rounded-t-[40px] bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] grid lg:h-[410px] lg:w-[350px] 1.5xl:w-[320px]'>
          <h3 className='text-[hsl(241,100%,89%)] text-lg mt-5 1.5xl:mt-8 mb-4 mx-auto 1.5xl:text-xl'>Your Result</h3>
          <div className='rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] grid grid-rows-[auto_auto] items-center justify-center w-32 h-32 1.5xl:w-36 1.5xl:h-36 mx-auto'>
            <h5 className='text-[hsl(0,0%,100%)] text-5xl font-extrabold mt-6'>76</h5>
            <h6 className='text-[hsl(241,100%,89%)] mb-6 text-center'>of 100</h6>
          </div>
          <h2 className='text-[hsl(0,0%,100%)] text-2xl font-bold mx-auto'>Great</h2>
          <p className='text-[hsl(241,100%,89%)] mx-auto text-center px-6 1.5xl:px-11 xs:px-10 mt-1.5 mb-9'>You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        <section className='grid gap-4 px-2 xs:px-8'>
          <h3 className='text-[hsl(224,30%,27%)] font-extrabold mt-5 mb-1 text-lg 1.5xl:text-xl'>Summary</h3>
          <Card title="reaction" value="80" color="hsla(0,100%,67%" />
          <Card title="memory" value="92" color="hsla(39,100%,56%" />
          <Card title="verbal" value="61" color="hsla(166,100%,37%" />
          <Card title="visual" value="72" color="hsla(234,85%,45%" />
          <button className='bg-[hsl(224,30%,27%)] text-[hsl(221,100%,96%)] hover:bg-gradient-to-b hover:from-[hsl(252,100%,67%)] hover:to-[hsl(241,81%,54%)] px-28 py-3 mt-2 mb-8 rounded-[40px] 1.5xl:w-[260px] 1.5xl:px-0'>Continue</button>
        </section>
      </div>
    </main>
  )
}

export default App