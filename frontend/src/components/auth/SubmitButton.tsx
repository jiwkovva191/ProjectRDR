export const SubmitButton  = ({text}: {text:string}) =>{
    return(
        <button type="submit" className="w-1/3 bg-blue-400 text-white rounded p-2 mt-2">
            {text}
        </button>
    );
}