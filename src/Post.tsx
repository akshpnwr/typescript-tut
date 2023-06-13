
type PostProps = {
    id: number,
    title: string,
    message?: string    
}

export default function Post({id, title, message} : PostProps) {
    return (
        <div>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{message}</p>
        </div>
    )
    
}