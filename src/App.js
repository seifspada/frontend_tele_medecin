import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./index.css";

//specialites
import Cardiologie from "./medecin/speciality/Cardiologie";
import Dermatologie from "./medecin/speciality/Dermatologie";
import Neurologie from "./medecin/speciality/Neurologie";
import Pediatrie from "./medecin/speciality/Pediatrie";
import Psychiatrie from "./medecin/speciality/Psychiatrie";
//menu bar
import AcceuilAdmin from "./admin/AdminDashboard";
import ContactAdmin from "./admin/AdminDashboardConatct";
import SpecialitesAdmin from "./admin/SpecialitesAdmin";
import AcceuilMedecien from "./medecin/AcceuilMedecin";
import ContactMedecien from "./medecin/ContactMedecin";
import SpecialtiesMedecin from "./medecin/SpecialitesMedecin";
import AcceuilPatient from "./patient/AcceuilPatient";
import ContactPatient from "./patient/ContactPatient";
import SpecialtiesPatient from "./patient/SpecialitesPatient";


//register Medecien et Patient

import CreateMedicien from "./page/createMedicien";
import CreatePatient from "./page/createPatient";
//login
import Connect from "./Connect";
import Login from "./page/login";
import Register from "./page/register";
// Interface

import InterfaceAdmin from "./admin/InterfaceAdmin";
import DoctorProfileForm from "./DoctorProfileForm";
import InterfaceMedicien from "./medecin/InterfaceMedicien";
import SpecialtyPage from "./medecin/speciality/SpecialtyPage";
import InterfacePatient from "./patient/InterfacePatient";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Connect" element={<Connect />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CreatePatient" element={<CreatePatient />} />
        <Route path="/CreateMedicien" element={<CreateMedicien />} />
        <Route path="/Login" element={<Login />} />
        {/*menu bar */ }
        <Route path="/SpecialtiesMedecin" element={<SpecialtiesMedecin />} />
        <Route path="/SpecialtiesPatient" element={<SpecialtiesPatient />} />
        <Route path="/SpecialitesAdmin" element={<SpecialitesAdmin />} />
        <Route path="/ContactMedecien" element={<ContactMedecien />} />
        <Route path="/ContactPatient" element={<ContactPatient />} />
        <Route path="/ContactAdmin" element={<ContactAdmin />} />
        <Route path="/AcceuilMedecien" element={<AcceuilMedecien />} />
        <Route path="/AcceuilPatient" element={<AcceuilPatient />} />
        <Route path="/AcceuilAdmin" element={<AcceuilAdmin />} />

        {/*Specialites*/}
        <Route path="/Cardiologie" element={<Cardiologie />} />
        <Route path="/Neurologie" element={<Neurologie />} />
        <Route path="/Psychiatrie" element={<Psychiatrie />} />
        <Route path="/Dermatologie" element={<Dermatologie />} />
        <Route path="/Pediatrie" element={<Pediatrie />} />
        {/*interfaec */}
        <Route path="/DoctorProfileForm" element={<DoctorProfileForm />} />
        <Route path="/InterfaceMedicien" element={<InterfaceMedicien />} />
        <Route path="/InterfacePatient" element={<InterfacePatient />} />
        <Route path="/InterfaceAdmin" element={<InterfaceAdmin />} />
        <Route path="/SpecialtyPage" element={<SpecialtyPage />} />

        {/* Route pour une page 404 */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
