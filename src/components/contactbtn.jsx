function Contact(props){
    const tag = props.tag
    return (

            <button className='text-white flex justify-center gap-2 items-center mr-10 rounded-md h-8 w-25 bg-green-600 pl-3 pr-3 text-xs'>
                {props.title}
            </button>
        
        );
}

export default Contact;