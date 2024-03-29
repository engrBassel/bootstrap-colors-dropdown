interface Props {
  color: string;
  onClose(): void;
}
const Alert = ({ color, onClose }: Props) => {
  return (
    <>
      <div
        className={`alert alert-${color} alert-dismissible fade show`}
        role="alert"
      >
        <strong>Perfect!</strong> You have showed the alert.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
