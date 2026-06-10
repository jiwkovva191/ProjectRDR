

interface ReserveButtonProps {
    selectedDate: number | null;
    onReserve: () => void;
}

const ReserveButton = ({
    selectedDate,
    onReserve
}: ReserveButtonProps) => {
    return(
        <div className="flex justify-center mt-8">
            <button
                disabled={!selectedDate}
                onClick={onReserve}
                className={`px-6 py-3 rounded-lg transition ${selectedDate ? "bg-green-800 text-white" : "bg-green-100 text-black"}`}>

                Reserve Date
            </button>
        </div>
    )
}

export default ReserveButton;