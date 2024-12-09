
import { Link } from 'react-router-dom';
import "../App.css";

export default function Register() {

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Register Form</h1>
      <form>
        <Link to="/createPatient">
        <button type="submit">Patient</button>
        </Link>
        <br />
        <br />
        <Link to="/createMedicien">
        <button type="submit" >Médicien</button>
        </Link>
      </form>
    </div>
  );
}

