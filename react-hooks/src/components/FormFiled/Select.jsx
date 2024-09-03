function Select(props) {
    return (
        <select name="" id={props.selectId} defaultValue={'DEFAULT'} className="w-full py-2 text-stone-400 border outline-none border-slate-300 px-3 rounded-lg" onChange={props.changeFun}>
            <option value="DEFAULT" disabled>Select the College</option>
            <option value={1} >Option1</option>
            <option value={2}>Option2</option>
            <option value={3}>Option3</option>
        </select>
    )
}

export { Select }