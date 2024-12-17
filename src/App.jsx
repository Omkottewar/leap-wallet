import { useState } from "react";
import "./index.css";
import {
  Blogs,
  Dashboard,
  Download,
  Footer,
  Hero,
  Mobile,
  Navbar,
  SafetyComponent,
  SupportComponent,
} from "./components";
import { Route, Routes } from "react-router-dom";
import MobilePage from "./pages/Mobile/MobilePage";
import BrowserPage from "./pages/Browser/BrowserPage";
import ChainsPage from "./pages/Chains/ChainsPage";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          element={
            <div>
              <Hero />
              <Mobile />
              <Dashboard />
              <SafetyComponent />
              <SupportComponent />
              <Download />
              <Blogs />
            </div>
          }
          index
        />
        <Route
          element={
            <div>
              <MobilePage />
            </div>
          }
          path="mobile"
        />
        <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="desktop"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="dashboard"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="elements"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="metamask"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="Security"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="Blog"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="support"
        />
                <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="download"
        />
          <Route
          element={
            <div>
             <ChainsPage />
            </div>
          }
          path="chains"
        />        
        <Route
        element={
          <div>
            <ChainsPage />
          </div>
        }
        path="dApps"
      />
              <Route
          element={
            <div>
              <BrowserPage />
            </div>
          }
          path="validators"
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
