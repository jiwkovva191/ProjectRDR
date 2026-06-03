export const InputError = ({text}: {text:string | undefined}) =>{
    return(
        <div className="text-sm text-red-400 w-full font-bold mb-2">
            {text}
        </div>
    );
}