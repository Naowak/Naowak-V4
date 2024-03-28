export default function Author () {

  return (
    <div className='xl:fixed xl:w-1/5 xl:p-10'>
      <div className='bg-white rounded-xl overflow-hidden shadow-2xl'>
        <img src={`picture.png`} alt='user_picture' className='' />
        <div className='p-2'>
          <h1 className='text-lg text-center font-semibold'>Yannis Bendi-Ouis</h1>
          <h2 className='text-sm text-center text-slate-500  p-0.5'>Doctorant en Intelligence Artificielle</h2>
          <h3 className='text-sm text-center text-red-400 p-0.5'>Inria de Bordeaux</h3>
        </div>
      </div>
    </div> 
    )
  }