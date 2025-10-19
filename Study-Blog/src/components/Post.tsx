import {motion} from 'framer-motion';

type PostType = {
    userId : number;
    title : string;
    body : string;
}

function Post({body, title, userId} : PostType){


    return (
        <>
            <motion.section 
            className="border-1 border-border-color w-1/4 h-40 overflow-hidden rounded-2xl p-3"
            whileHover={{borderWidth : 1, borderColor : "#ffffff"}}
            >
                <div>{body}</div>
                <div>{title}</div>
                <div>{userId}</div>
            </motion.section>
        </>
    )

}

export default Post;