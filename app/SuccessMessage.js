export default function SuccessMessage({ message }) {
    return (
      <div className="text-center my-5">
        <div style={{ fontSize: '4em', marginBottom: '0.2em' }}>🎉</div>
        <h2>{message}</h2>
      </div>
    );
  }
  