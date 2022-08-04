const FullWrapper = props => {
    return <div className="h-full overflow-scroll bg-gradient-to-br from-emerald-700 to-slate-900">
        {props.children}
    </div>
}

export default FullWrapper;