import {motion} from 'framer-motion';
import DomPurify from 'dompurify';

type PostType = {
    userId : number;
    title : string;
    body : string;
}

function Post({body, title, userId} : PostType){

    const cleanTitleHTML : string = DomPurify.sanitize(title);
    const cleanBodyHTML : string = DomPurify.sanitize(body);

    console.log(cleanBodyHTML)

    return (
        <>
            <motion.section 
            className="border-1 border-border-color w-1/4 h-40 overflow-hidden rounded-2xl p-3"
            whileHover={{borderWidth : 1, borderColor : "#ffffff"}}
            >
                <div dangerouslySetInnerHTML={{__html : cleanTitleHTML}}></div>
                <div dangerouslySetInnerHTML={{__html : cleanBodyHTML}}></div>
                <div>{userId}</div>
            </motion.section>
        </>
    )

}

export default Post;