import Image from "next/image"
import CloseIcon from "@/public/icons/circle-xmark.svg"

interface CloseButtonProps {
    handleClose: () => void,
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClose }: CloseButtonProps) => {
    return (
        <button type="button" onClick={handleClose} className="z-50 right-4 top-4 bg-transparent border-0 p-0 absolute">
            <Image src={CloseIcon} alt="close icon: x mark" height="30" width="30" />
        </button>
    )
}

export default CloseButton;