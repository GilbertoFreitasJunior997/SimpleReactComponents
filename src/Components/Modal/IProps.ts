export default interface IModalProps {
    title?: string;

    isOpen: boolean;
    onConfirm: () => Promise<void>;
    onClose: () => void;
    dontCloseOnConfirm?: boolean;

    hideCloseButton?: boolean;

    children?: React.ReactNode;
}