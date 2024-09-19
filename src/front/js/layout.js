import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { ContactUs } from "./pages/contactUs";
import { Single } from "./pages/single";
import { ProviderProfile } from "./pages/providerProfile";
import { ProviderMapPage } from "./pages/providerMapPage";
import injectContext from "./store/appContext";
import { ProviderSignUp1 } from "./pages/providerSignUp1";
import { ProviderSignUp2 } from "./pages/providerSignUp2";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ProviderServices } from "./pages/providerServices";
import { ProviderProfileCompleted } from "./pages/providerProfileCompleted";
import { ClientMapPage } from "./pages/clientMapPage";
import { ClientSignUp1 } from "./pages/clientSignUp1";
import { ClientSignUp2 } from "./pages/clientSignUp2";
import { ClientServices1 } from "./pages/clientServices1";
import { JobPost1 } from "./pages/jobPost";
import { JobPost2 } from "./pages/jobPostPreview";
import { JobPostUpdate } from "./pages/JobPostUpdate";
import { SignUp } from "./component/SignUp";
import { Login } from "./component/login";
import { ViewJobs } from "./pages/viewJobs";
import { HowItWorks } from "./pages/howItWorks";
import { Blog } from "./pages/blog";
import AccountSettings from "./pages/account";
import { PersonalInfo } from "./pages/PersonalInfo";
import PersonalSecurity from "./pages/loginsecurity";
import { JobPostsList } from "./pages/JobPostsList";
import WateringService from "./pages/WateringService";
import RepottingService from "./pages/RepottingService";
import PruningService from "./pages/PruningService";
import PestControlService from "./pages/PestControlService";
import PlantCleaningService from "./pages/PlantCleaningService";
import Chat from './component/Chat';
import { PlantSitterProfile } from './pages/PlantSitterProfile';
import { AccountVerification } from "./pages/AccountVerification";
import { EnterNewPassword } from "./pages/EnterNewPassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ViewSitters } from "./pages/viewSitters";

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<ContactUs />} path="/contact-us" />
                        <Route element={<HowItWorks />} path="/how-it-works" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<ProviderServices />} path="/provider-services" />
                        <Route element={<ClientServices1 />} path="/client-services1" />
                        <Route element={<JobPost1 />} path="/job-post" />
                        <Route element={<JobPostUpdate />} path="/job-post-update/:job_post_id" />
                        <Route element={<JobPost2 />} path="/job-post-preview/:job_post_id" />
                        <Route element={<ProviderProfile />} path="/provider-profile" />
                        <Route element={<ProviderProfileCompleted />} path="/provider-profile-completed" />
                        <Route element={<ProviderMapPage />} path="/provider-map" />
                        <Route element={<ClientMapPage />} path="/client-map" />
                        <Route element={<ViewSitters />} path="/view-sitters" />
                        <Route element={<ProviderSignUp1 />} path="/provider-signup1" />
                        <Route element={<ClientSignUp1 />} path="/client-signup1" />
                        <Route element={<ProviderSignUp2 />} path="/provider-signup2" />
                        <Route element={<ClientSignUp2 />} path="/client-signup2" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<ViewJobs />} path="/view-jobs" />
                        <Route element={<Blog />} path="/blog" />
                        <Route element={<WateringService />} path="/watering" />
                        <Route element={<RepottingService />} path="/repotting" />
                        <Route element={<PruningService />} path="/pruning" />
                        <Route element={<PestControlService />} path="/pestcontrol" />
                        <Route element={<PlantCleaningService />} path="/plantcleaning" />
                        <Route element={<AccountSettings />} path="/account-settings" />
                        <Route element={<PersonalInfo />} path="/personal-info" />
                        <Route element={<PersonalSecurity />} path="/login-security" />
                        <Route element={<PlantSitterProfile />} path="/plantsitter/:id" />
                        <Route element={<JobPostsList />} path="/job-posts" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<AccountVerification />} path="/verification" />
                        <Route element={<ForgotPassword />} path="/forgot-password" />
                        <Route element={<EnterNewPassword />} path="/enternewpassword" />
                    </Routes>
                    <Chat />
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);