// import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
// import ApplyAsATrainerModal from './ui/ApplyAsATrainerModal/ApplyAsATrainerModal';
import Footer from './components/Footer/Footer';
import About from '../src/pages/About/About';
import Home from '../src/pages/Home/Home';
import Contact from '../src/pages/Contact/Contact';
// import Courses from '../src/pages/Courses/Courses';
// import FreeCourses from '../src/pages/Courses/FreeCourses';
// import PaidCourses from '../src/pages/Courses/PaidCourses';
// import CertificateCourses from '../src/pages/Courses/CertificateCourses';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition';
import Privacy from './pages/Privacy/Privacy';
import Profile from './components/profile';
import NotFound from './pages/404NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import Entrepreneuship from './pages/Entrepreneuship/Entrepreneuship';
import Professional from './pages/Professional/Professional';
import Institutional from './pages/Partnership/Institutional';
import Corporate from './pages/Partnership/Corporate';
import OurTeam from './pages/About/OurTeam';
import MainAboutUs from './pages/About/MainAboutUs';
import ApplyAsTrainer from './pages/TrainingPrograms/ApplyAsTrainer';
// import ProtectedRoute from './components/ProtectedRoute';
import Workshops from './pages/TrainingPrograms/Workshops';
import Webinar from './pages/TrainingPrograms/Webinar';
import CorporateTraining from './pages/TrainingPrograms/CorporateTraining';
import IndustryDetail from './pages/TrainingPrograms/IndustryDetail';
// PROFESSIONAL COURSES IMPORTING
import BankingAndFinancialServices from './pages/ProfessionalCourses/BankingAndFinanceService/BankingAndFinancialServices';
import AiAndDataScience from './pages/ProfessionalCourses/AiAndDataScience/AiAndDataScience';
import CloudComputing from './pages/ProfessionalCourses/CloudComputingAndIT/CloudComputing';
import WebDev from './pages/ProfessionalCourses/WebDevelopment/WebDev';
import CareerDevelopment from './pages/ProfessionalCourses/CareerDevelopment/CareerDevelopment';
import Bpo from './pages/ProfessionalCourses/BPOAndCommunication/Bpo';
import SalesAndMarketing from './pages/ProfessionalCourses/SalesAndMarketing/SalesAndMarketing';
import AccountingAndFinance from './pages/ProfessionalCourses/AccountingAndFinancial/AccountingAndFinance';
import Design from './pages/ProfessionalCourses/DesignAndCreativeArts/Design';
import RuralDevelopment from './pages/ProfessionalCourses/RuralDevelopmentAndEntrepreneurship/RuralDevelopment';
import VisionandMission from './pages/About/VisionandMission';
import ProfessionalCoursePage from './pages/Courses/ProfessionalCoursePage';
// ENTREPRENEURSHIP COURSES

function App() {
  // const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => setShowModal(true), 1500); // 1.5 seconds
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <ScrollToTop />
      {/* <ApplyAsATrainerModal
        open={showModal}
        onClose={() => setShowModal(false)}
      /> */}
      <Navbar />
      <main className="min-h-screen overflow-hidden max-w-[100vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/mainAboutUs" element={<MainAboutUs />} />
          <Route path="/visionandmission" element={<VisionandMission />} />
          <Route path="/applyastrainer" element={<ApplyAsTrainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          <Route path="/entrepreneuship" element={<Entrepreneuship />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/corporate" element={<Corporate />} />
          {/* <Route path="/freecourses" element={<FreeCourses />} />
          <Route path="/paidcourses" element={<PaidCourses />} />
          <Route path="/certificatecourses" element={<CertificateCourses />} /> */}
          <Route path="/termsconditions" element={<TermsAndCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/coptraining" element={<CorporateTraining />} />
          <Route
            path="/coptraining/industry/:slug"
            element={<IndustryDetail />}
          />
          <Route
            path="/bankingandfinance"
            element={<BankingAndFinancialServices />}
          />
          <Route path="/aianddatascience" element={<AiAndDataScience />} />
          <Route path="/cloudcomputing" element={<CloudComputing />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route
            path="/courses/professional/:courseName"
            element={<ProfessionalCoursePage />}
          />
          <Route path="/careerdevelopment" element={<CareerDevelopment />} />
          <Route path="/bpo" element={<Bpo />} />
          <Route path="/salesandmarketing" element={<SalesAndMarketing />} />
          <Route
            path="/accountingandfinance"
            element={<AccountingAndFinance />}
          />
          <Route path="/design" element={<Design />} />
          <Route path="/ruraldevelopment" element={<RuralDevelopment />} />
        </Routes>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
