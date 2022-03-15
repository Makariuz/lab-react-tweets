export function User({userName, name, handle, timestamp}){
    return (
        <>
            <span className="user">{userName}
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span>

          
        </>
    )
}