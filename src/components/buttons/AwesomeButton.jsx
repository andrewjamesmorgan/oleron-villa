import '../../css/button.css';

export default function AwesomeButton({ label, icon, url }) {

  function handleClick() {
    window.open(url, '_blank');
  }

  return (
    <button className="awesome-button" onClick={ handleClick }>
      <span>
        <i className={`fa ${icon}`}></i>
        {label}
      </span>
    </button>
  );
}