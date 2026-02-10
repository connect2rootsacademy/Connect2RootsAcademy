import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
// import ApplyAsATrainerModal from './ui/ApplyAsATrainerModal/ApplyAsATrainerModal';
import Footer from './components/Footer/Footer';
import About from '../src/pages/About/About';
import Home from '../src/pages/Home/Home';
import Contact from '../src/pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition';
import Privacy from './pages/Privacy/Privacy';
import Profile from './components/profile';
import NotFound from './pages/404NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import Entrepreneuship from './pages/Entrepreneuship/Entrepreneuship';
import Professional from './pages/Professional/Professional';
import ViksitBharat from './pages/ViksitBharat2047/ViksitBharat';
import Institutional from './pages/Partnership/Institutional';
import Corporate from './pages/Partnership/Corporate';
import OurTeam from './pages/About/OurTeam';
import MainAboutUs from './pages/About/MainAboutUs';
import ApplyAsTrainer from './pages/TrainingPrograms/ApplyAsTrainer';
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
import ExploreCourses from './pages/ExploreCourses/explore-courses';
// ENTREPRENEURSHIP COURSES
// COACHING PAGES IMPORTING
import CorporateCoaching from './pages/Coaching/CorporateCoaching';
import GroupCoaching from './pages/Coaching/GroupCoaching';
import LeadershipCoaching from './pages/Coaching/LeadershipCoaching';
import IndividualCoaching from './pages/Coaching/IndividualCoaching';
import PsychometricAssessment from './components/Footer/Services/PsychometricAssessment';
import ComAndSkillManagement from './components/Footer/Services/ComAndSkillManagement';
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen overflow-hidden max-w-[100vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-courses" element={<ExploreCourses />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/mainAboutUs" element={<MainAboutUs />} />
          <Route path="/visionandmission" element={<VisionandMission />} />
          <Route path="/applyastrainer" element={<ApplyAsTrainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/entrepreneuship" element={<Entrepreneuship />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/viksitbharat2047" element={<ViksitBharat />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/corporate" element={<Corporate />} />
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
          <Route path="/corporatecoaching" element={<CorporateCoaching />} />
          <Route path="/groupcoaching" element={<GroupCoaching />} />
          <Route path="/leadershipcoaching" element={<LeadershipCoaching />} />
          <Route path="/individualcoaching" element={<IndividualCoaching />} />
          <Route
            path="/psychometricassessment"
            element={<PsychometricAssessment />}
          />
          <Route
            path="/comandskillmanagement"
            element={<ComAndSkillManagement />}
          />
        </Routes>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
