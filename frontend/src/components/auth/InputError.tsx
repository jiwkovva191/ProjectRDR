export const InputError = ({text}: {text:string | undefined}) =>{
    return(
        <div className="text-sm text-red-400 size-5 w-100 font-bold mb-2">
            {text}
        </div>
    );
}