function SmallCarasole({data}) {
    return ( <div>
        {data.map((item) => {
            return(
                <div key={item.id}>{item.title}</div>
            )
        })}
    </div> );
}

export default SmallCarasole;