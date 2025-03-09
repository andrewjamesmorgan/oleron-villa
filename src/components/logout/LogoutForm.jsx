import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LogoutForm() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    localStorage.removeItem("ol-username");
    localStorage.removeItem("ol-password");
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
          <div className="responsive-form">
            {/* Logout Button */}
            <button type="submit" className="btn btn-primary btn-primary-branded" disabled={isSubmitting}>
              {isSubmitting ? "Logging out..." : "log out"}
            </button>
          </div>
        </form>
    </div>
  );
}