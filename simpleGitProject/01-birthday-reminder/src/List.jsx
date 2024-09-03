import data from './data'
function List() {
    return (
        <>
            <div>
                <article className='border w-96 bg-black min-h-10 p-2 mx-auto'>
                    <h2 className='text-slate-200 text-xl text-center mb-2'>Persons Details</h2>
                    {
                        data.map((e) => {
                            return (
                                <div className='bg-blue-400 flex items-center rounded-xl cursor-grab active:cursor-grabbing mb-2 gap-4' key={e.id}>
                                    <div className=' rounded-xl'>
                                        <img src={e.image} alt="PersonImage" className='w-10 h-10 object-cover rounded-full m-2' />
                                    </div>
                                    <h2 className='text-[22px] font-medium w-[150px]'>{e.name}</h2>
                                    <p className='font-medium'>{e.age}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
        </>
    )
}
export { List }