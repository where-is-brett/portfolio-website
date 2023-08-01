import Image from "next/image"

interface CloseButtonProps {
    handleClose: () => void,
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClose }: CloseButtonProps) => {
    return (
        <button type="button" onClick={handleClose} className="right-4 top-4 bg-transparent border-0 p-0 absolute">
            <Image src="/icons/circle-xmark.svg" alt="close icon: x mark" height="30" width="30" />
        </button>
    )
}

export default CloseButton;