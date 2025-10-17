
type PostType = {
    userId : number;
    title : string;
    body : string;
}

function Post({body, title, userId} : PostType){


    return (
        <>
            <section className="border-[1px] w-1/4 h-40 overflow-hidden rounded-2xl">
                <div>{body}</div>
                <div>{title}</div>
                <div>{userId}</div>
            </section>
        </>
    )

}

export default Post;