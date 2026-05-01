import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";
import {
  LayoutDashboard,
  LogOut,
  ArrowLeft,
  Mail,
  FileText,
  Search,
  RefreshCw,
  Eye,
  X,
  Download,
  User,
  Phone,
  Building2,
  MessageSquare,
  GraduationCap,
  BookOpen,
  Tag,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  CalendarDays,
  Network,
  ChevronRight,
  Menu,
  Lock,
} from "lucide-react";

/* ================= AUTH ================= */

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "1234") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
      setTimeout(() => setError(""), 2500);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a1040] to-[#24243e] flex items-center justify-center p-4">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 ring-2 ring-purple-500/40 shadow-lg shadow-purple-500/20">
              <img
                src="/Images/Helix.png"
                alt="Helix Logo"
                className="w-full h-full object-contain bg-white/10 p-1"
              />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Helix Admin</h2>
            <p className="text-purple-300/70 text-sm mt-1">Conferences Dashboard</p>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 text-xs transition-colors"
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(139,92,246,0.4)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/20"
            >
              Access Dashboard
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return <Dashboard onLogout={() => setIsAuthenticated(false)} />;
};

/* ================= DATA ================= */

const CONFERENCES = [
  { name: "FOODMEET 2026", domain: "foodmeet.helixconferences.com" },
  { name: "FOODMICRO 2026", domain: "foodmicrobiome.helixconferences.com" },
  { name: "AGRIREGEN 2026", domain: "agritech.helixconferences.com" },
  { name: "FOODTECH 2026", domain: "foodtech.helixconferences.com" },
  { name: "MILLETS 2026", domain: "millets.helixconferences.com" },
  { name: "MEDICLAVE 2026", domain: "mediclave.helixconferences.com" },
  { name: "DIGIPATH 2026", domain: "digital-pathology.helixconferences.com" },
  { name: "PRECISION MEDICINE 2026", domain: "precisionmedicine.helixconferences.com" },
  { name: "AESTHETICA 2026", domain: "cosmetology.helixconferences.com" },
  { name: "BIOCON 2026", domain: "biocon.helixconferences.com" },
  { name: "SYNBIO 2026", domain: "syntheticbiology.helixconferences.com" },
  { name: "MICROBIOME 2026", domain: "microbiome.helixconferences.com" },
  { name: "RARE DISEASE 2026", domain: "raredisease.helixconferences.com" },
  { name: "QUANTUMTECH 2026", domain: "quantumtech.helixconferences.com" },
  { name: "ZEROTRUSTAI 2026", domain: "zerotrust-ai.helixconferences.com" },
  { name: "SMART MATERIALS 2026", domain: "smartmaterials.helixconferences.com" },
  { name: "MATENERGY 2026", domain: "advancedmaterials.helixconferences.com" },
  { name: "PHARMATECH 2026", domain: "pharmatech.helixconferences.com" },
  { name: "AI DRUG 2026", domain: "drugdiscovery.helixconferences.com" },
  { name: "CELLGENE 2026", domain: "cellgene.helixconferences.com" },
  { name: "PHARMACCESS 2026", domain: "pharma.helixconferences.com" },
  { name: "NURSE SUMMIT 2026", domain: "nursesummit.helixconferences.com" },
  { name: "AI NURSE 2026", domain: "nursing.helixconferences.com" },
  { name: "ER SUMMIT 2026", domain: "criticalcare.helixconferences.com" },
  { name: "NURSE LEAD 2026", domain: "nursingleadership.helixconferences.com" },
];

/* ================= VIEW MODAL ================= */

const ViewModal = ({ item, type, onClose }) => {
  if (!item) return null;
  const isContact = type === "contact";

  const fields = isContact
    ? [
        { icon: <User size={16} />, label: "First Name", value: item.firstName },
        { icon: <User size={16} />, label: "Last Name", value: item.lastName },
        { icon: <Mail size={16} />, label: "Email", value: item.email },
        { icon: <Phone size={16} />, label: "Phone", value: item.phone || "—" },
        { icon: <Building2 size={16} />, label: "Company", value: item.company || "—" },
        { icon: <MessageSquare size={16} />, label: "Message", value: item.message },
      ]
    : [
        { icon: <User size={16} />, label: "First Name", value: item.firstName || "-" },
        { icon: <User size={16} />, label: "Last Name", value: item.lastName || "-" },
        { icon: <Phone size={16} />, label: "Mobile Number", value: item.mobileNumber || "-" },
        { icon: <Mail size={16} />, label: "Email", value: item.email || "-" },
        { icon: <MapPin size={16} />, label: "Address", value: item.address || "-" },
        { icon: <Globe size={16} />, label: "State", value: item.state || "-" },
        { icon: <Globe size={16} />, label: "Country", value: item.country || "-" },
        { icon: <GraduationCap size={16} />, label: "University", value: item.university || "-" },
        { icon: <Building2 size={16} />, label: "Affiliation", value: item.affiliation || "-" },
        { icon: <BookOpen size={16} />, label: "Abstract Title", value: item.abstractTitle || "-" },
        { icon: <Tag size={16} />, label: "Track / Interest", value: item.interestedIn || "-" },
        { icon: <Linkedin size={16} />, label: "LinkedIn", value: item.linkedin || "-" },
        { icon: <Twitter size={16} />, label: "Twitter", value: item.twitter || "-" },
      ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 24 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="bg-[#1a1040] border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-900/30 w-full max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400">
                {isContact ? <Mail size={18} /> : <FileText size={18} />}
              </span>
              <span className="font-semibold text-white">
                {isContact ? "Contact Details" : "Abstract Details"}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </motion.button>
          </div>

          {/* Modal Body */}
          <div className="p-5 space-y-3 overflow-y-auto max-h-[65vh]">
            {fields.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start space-x-3 bg-white/5 rounded-xl p-3 border border-white/5"
              >
                <span className="text-purple-400 mt-0.5 shrink-0">{f.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 mb-0.5">{f.label}</p>
                  <p className="text-white text-sm break-words">{f.value || "—"}</p>
                </div>
              </motion.div>
            ))}

            {!isContact && item._id && (
              <motion.a
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
                whileTap={{ scale: 0.97 }}
                href={`${import.meta.env.VITE_API_URL}/abstracts/file/${item._id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 rounded-xl transition-all mt-2"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ================= DASHBOARD ================= */

const NAV_ITEMS = [
  { key: "conferences", label: "Helix Conferences", icon: <CalendarDays size={18} /> },
  { key: "subdomains", label: "Subdomains", icon: <Network size={18} /> },
  { key: "abstracts", label: "Helix Abstract Details", icon: <FileText size={18} /> },
];

const Dashboard = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState("subdomains");
  const [selectedConference, setSelectedConference] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHelixSubMenu, setIsHelixSubMenu] = useState(false);

  const handleNavClick = (key) => {
    if (key === "conferences") {
      setIsHelixSubMenu(true);
      setActiveNav("emails");
    } else {
      setIsHelixSubMenu(false);
      setActiveNav(key);
    }
    setSelectedConference(null);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a1040] to-[#24243e] text-white overflow-hidden">

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : 0 }}
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 flex flex-col
          bg-white/5 backdrop-blur-xl border-r border-white/10
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo area */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-purple-500/40 shrink-0">
              <img
                src="/Images/Helix.png"
                alt="Helix"
                className="w-full h-full object-contain bg-white/10 p-0.5"
              />
            </div>
            <div>
              <p className="font-bold text-white leading-tight">Helix Admin</p>
              <p className="text-xs text-purple-300/60">Conferences Portal</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {!isHelixSubMenu ? (
            NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick(item.key)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${activeNav === item.key
                    ? "bg-gradient-to-r from-purple-600/80 to-indigo-600/80 text-white shadow-lg shadow-purple-900/30"
                    : "text-white/50 hover:text-white hover:bg-white/8"
                  }
                `}
              >
                <span className="flex items-center space-x-3">
                  <span className={activeNav === item.key ? "text-white" : "text-purple-400"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </span>
                {activeNav === item.key && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <ChevronRight size={14} />
                  </motion.span>
                )}
              </motion.button>
            ))
          ) : (
            <div className="space-y-2">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setIsHelixSubMenu(false)}
                className="flex items-center space-x-2 px-4 py-2 text-purple-400 hover:text-purple-300 text-xs font-medium transition-colors mb-2"
              >
                <ArrowLeft size={14} />
                <span>Main Menu</span>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveNav("emails")}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${activeNav === "emails"
                    ? "bg-gradient-to-r from-purple-600/80 to-indigo-600/80 text-white shadow-lg shadow-purple-900/30"
                    : "text-white/50 hover:text-white hover:bg-white/8"
                  }
                `}
              >
                <span className="flex items-center space-x-3">
                  <Mail size={18} className={activeNav === "emails" ? "text-white" : "text-purple-400"} />
                  <span>Email Details</span>
                </span>
                {activeNav === "emails" && <ChevronRight size={14} />}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveNav("contacts")}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${activeNav === "contacts"
                    ? "bg-gradient-to-r from-indigo-600/80 to-blue-600/80 text-white shadow-lg shadow-indigo-900/30"
                    : "text-white/50 hover:text-white hover:bg-white/8"
                  }
                `}
              >
                <span className="flex items-center space-x-3">
                  <MessageSquare size={18} className={activeNav === "contacts" ? "text-white" : "text-indigo-400"} />
                  <span>Contact Details</span>
                </span>
                {activeNav === "contacts" && <ChevronRight size={14} />}
              </motion.button>
            </div>
          )}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.96 }}
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10 text-sm font-medium transition-all"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <img src="/Images/Helix.png" alt="Helix" className="w-full h-full object-contain bg-white/10" />
            </div>
            <span className="font-semibold text-sm">Helix Admin</span>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="text-white/60 hover:text-white">
            <Menu size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <AnimatePresence mode="wait">
            {isHelixSubMenu && activeNav === "emails" && (
              <EmailDetailsView key="emails" />
            )}

            {isHelixSubMenu && activeNav === "contacts" && (
              <ContactDetailsView key="contacts" />
            )}

            {!isHelixSubMenu && activeNav === "abstracts" && (
              <HelixAbstractDetailsView key="abstracts" />
            )}

            {!isHelixSubMenu && activeNav === "conferences" && !selectedConference && (
              <motion.div
                key="conferences-home"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <HelixConferencesView onSelectConference={(c) => { setSelectedConference(c); setActiveNav("subdomains"); }} />
              </motion.div>
            )}

            {!isHelixSubMenu && activeNav === "subdomains" && !selectedConference && (
              <motion.div
                key="subdomains-home"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <SubdomainsView onSelectConference={setSelectedConference} />
              </motion.div>
            )}

            {!isHelixSubMenu && selectedConference && (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <ConferenceDetail
                  conference={selectedConference}
                  onBack={() => setSelectedConference(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


/* ================= HELIX CONFERENCES VIEW ================= */

const HelixConferencesView = ({ onSelectConference }) => (
  <div>
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white">Helix Conferences</h1>
      <p className="text-purple-300/60 text-sm mt-1">
        {CONFERENCES.length} active conferences worldwide
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {CONFERENCES.map((conf, i) => (
        <motion.div
          key={conf.domain}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.04, duration: 0.35, ease: "easeOut" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 28px rgba(139,92,246,0.25)",
            borderColor: "rgba(139,92,246,0.6)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelectConference(conf)}
          className="group bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer transition-all relative overflow-hidden"
        >
          {/* Glow accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

          <div className="flex items-start justify-between mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/30">
              <CalendarDays size={16} className="text-white" />
            </div>
            <ChevronRight size={16} className="text-white/20 group-hover:text-purple-400 transition-colors" />
          </div>

          <h3 className="font-bold text-white text-sm leading-tight mb-1">{conf.name}</h3>
          <p className="text-xs text-purple-300/60 truncate">{conf.domain}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ================= SUBDOMAINS VIEW ================= */

const SubdomainsView = ({ onSelectConference }) => (
  <div>
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white">Subdomains</h1>
      <p className="text-purple-300/60 text-sm mt-1">
        Select a conference to view submissions
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {CONFERENCES.map((conf, i) => (
        <motion.div
          key={conf.domain}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.04, duration: 0.35, ease: "easeOut" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 28px rgba(99,102,241,0.25)",
            borderColor: "rgba(99,102,241,0.6)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelectConference(conf)}
          className="group bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer transition-all relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />

          <div className="flex items-start justify-between mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-900/30">
              <Network size={16} className="text-white" />
            </div>
            <span className="text-[10px] text-indigo-300/60 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
              Active
            </span>
          </div>

          <h3 className="font-bold text-white text-sm leading-tight mb-1">{conf.name}</h3>
          <p className="text-xs text-indigo-300/60 truncate">{conf.domain}</p>

          <div className="mt-3 flex items-center text-indigo-400/60 text-xs group-hover:text-indigo-300 transition-colors">
            <span>View submissions</span>
            <ChevronRight size={12} className="ml-1" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ================= CONFERENCE DETAIL ================= */

const ConferenceDetail = ({ conference, onBack }) => {
  const [tab, setTab] = useState("contact");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [abstracts, setAbstracts] = useState([]);
  const [abstractLoading, setAbstractLoading] = useState(false);
  const [contactSearch, setContactSearch] = useState("");
  const [abstractSearch, setAbstractSearch] = useState("");
  const [viewItem, setViewItem] = useState(null);
  const [viewType, setViewType] = useState(null);

  const fetchContacts = useCallback(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/contacts/${conference.domain}`)
      .then((res) => setContacts(Array.isArray(res.data) ? res.data : []))
      .catch((err) => { console.error("API Error:", err); setContacts([]); })
      .finally(() => setLoading(false));
  }, [conference.domain]);

  const fetchAbstracts = useCallback(() => {
    setAbstractLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/abstracts/domain/${conference.domain}`)
      .then((res) => setAbstracts(Array.isArray(res.data) ? res.data : []))
      .catch((err) => { console.error("Abstract API Error:", err); setAbstracts([]); })
      .finally(() => setAbstractLoading(false));
  }, [conference.domain]);

  useEffect(() => { fetchContacts(); }, [fetchContacts]);
  useEffect(() => { if (tab === "abstracts") fetchAbstracts(); }, [tab, fetchAbstracts]);

  const filteredContacts = contacts.filter((c) => {
    const q = contactSearch.toLowerCase();
    return (
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.company?.toLowerCase().includes(q)
    );
  });

  const filteredAbstracts = abstracts.filter((a) => {
    const q = abstractSearch.toLowerCase();
    return (
      `${a.firstName} ${a.lastName}`.toLowerCase().includes(q) ||
      a.email?.toLowerCase().includes(q) ||
      a.abstractTitle?.toLowerCase().includes(q) ||
      a.university?.toLowerCase().includes(q)
    );
  });

  const openView = (item, type) => { setViewItem(item); setViewType(type); };
  const closeView = () => { setViewItem(null); setViewType(null); };

  return (
    <div>
      {viewItem && <ViewModal item={viewItem} type={viewType} onClose={closeView} />}

      {/* Back */}
      <motion.button
        whileHover={{ x: -4 }}
        onClick={onBack}
        className="mb-5 flex items-center space-x-2 text-white/40 hover:text-purple-300 transition-colors text-sm"
      >
        <ArrowLeft size={16} />
        <span>Back</span>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">{conference.name}</h2>
        <p className="text-purple-300/60 text-sm mt-1">{conference.domain}</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 flex-wrap gap-y-2">
        {[
          { key: "contact", label: "Contacts", icon: <Mail size={15} /> },
          { key: "abstracts", label: "Abstracts", icon: <FileText size={15} /> },
        ].map((t) => (
          <motion.button
            key={t.key}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setTab(t.key)}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              tab === t.key
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30"
                : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10"
            }`}
          >
            {t.icon}
            <span>{t.label}</span>
          </motion.button>
        ))}
      </div>

      {/* ---- CONTACTS TAB ---- */}
      {tab === "contact" && (
        <motion.div
          key="contact-tab"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={contactSearch}
                onChange={(e) => setContactSearch(e.target.value)}
                placeholder="Search contacts…"
                className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.93 }}
              onClick={fetchContacts}
              disabled={loading}
              className="flex items-center space-x-1.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-purple-300 text-sm transition-all"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              <span className="hidden sm:inline">Refresh</span>
            </motion.button>
          </div>

          {loading && (
            <div className="flex items-center justify-center space-x-2 text-purple-300/60 py-12">
              <RefreshCw size={18} className="animate-spin" />
              <span>Loading contacts…</span>
            </div>
          )}

          {!loading && filteredContacts.length === 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/30 text-center py-12">
              {contacts.length === 0 ? "No contact submissions yet." : "No results match your search."}
            </motion.p>
          )}

          {!loading && filteredContacts.length > 0 && (
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    {["Name", "Email", "Phone", "Company", "Message", ""].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs text-white/40 font-medium uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((c, i) => (
                    <motion.tr
                      key={c._id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-t border-white/5 hover:bg-purple-500/5 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm font-medium text-white">{c.firstName} {c.lastName}</td>
                      <td className="px-4 py-3 text-sm text-white/60">{c.email}</td>
                      <td className="px-4 py-3 text-sm text-white/60">{c.phone || "—"}</td>
                      <td className="px-4 py-3 text-sm text-white/60">{c.company || "—"}</td>
                      <td className="px-4 py-3 text-sm text-white/60 max-w-xs truncate">{c.message}</td>
                      <td className="px-4 py-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openView(c, "contact")}
                          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                        >
                          <Eye size={14} />
                          <span>View</span>
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      )}

      {/* ---- ABSTRACTS TAB ---- */}
      {tab === "abstracts" && (
        <motion.div
          key="abstracts-tab"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={abstractSearch}
                onChange={(e) => setAbstractSearch(e.target.value)}
                placeholder="Search abstracts…"
                className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.93 }}
              onClick={fetchAbstracts}
              disabled={abstractLoading}
              className="flex items-center space-x-1.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-purple-300 text-sm transition-all"
            >
              <RefreshCw size={14} className={abstractLoading ? "animate-spin" : ""} />
              <span className="hidden sm:inline">Refresh</span>
            </motion.button>
          </div>

          {abstractLoading && (
            <div className="flex items-center justify-center space-x-2 text-purple-300/60 py-12">
              <RefreshCw size={18} className="animate-spin" />
              <span>Loading abstracts…</span>
            </div>
          )}

          {!abstractLoading && filteredAbstracts.length === 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/30 text-center py-12">
              {abstracts.length === 0 ? "No abstract submissions yet." : "No results match your search."}
            </motion.p>
          )}

          {!abstractLoading && filteredAbstracts.length > 0 && (
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    {["Name", "Email", "Title", "Track", "University", "PDF", ""].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs text-white/40 font-medium uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredAbstracts.map((a, i) => (
                    <motion.tr
                      key={a._id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-t border-white/5 hover:bg-indigo-500/5 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm font-medium text-white">{a.firstName} {a.lastName}</td>
                      <td className="px-4 py-3 text-sm text-white/60">{a.email}</td>
                      <td className="px-4 py-3 text-sm text-white/60 max-w-xs truncate">{a.abstractTitle}</td>
                      <td className="px-4 py-3 text-sm text-white/60">{a.interestedIn}</td>
                      <td className="px-4 py-3 text-sm text-white/60">{a.university}</td>
                      <td className="px-4 py-3">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={`${import.meta.env.VITE_API_URL}/abstracts/file/${a._id}`}
                          className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download size={14} />
                          <span>PDF</span>
                        </motion.a>
                      </td>
                      <td className="px-4 py-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openView(a, "abstract")}
                          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                        >
                          <Eye size={14} />
                          <span>View</span>
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

/* ================= EMAIL DETAILS VIEW ================= */

const EmailDetailsView = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchEmails = useCallback(() => {
    setLoading(true);
axios
  .get("https://backend-code-6vqy.onrender.com/emails/getemail")
  .then((res) => setEmails(Array.isArray(res.data.emails) ? res.data.emails : []))
      .catch((err) => {
        console.error("Email API Error:", err);
        setEmails([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  const filteredEmails = emails.filter((e) => {
    const q = search.toLowerCase();
    return (
      e.email?.toLowerCase().includes(q) ||
      e.subject?.toLowerCase().includes(q) ||
      e.message?.toLowerCase().includes(q)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Email Details</h1>
          <p className="text-purple-300/60 text-sm mt-1">Manage and view all email communications</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search emails…"
              className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            onClick={fetchEmails}
            disabled={loading}
            className="flex items-center space-x-1.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-purple-300 text-sm transition-all"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            <span className="hidden sm:inline">Refresh</span>
          </motion.button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <RefreshCw size={24} className="text-purple-500 animate-spin" />
        </div>
      ) : filteredEmails.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
          <Mail size={40} className="mx-auto text-white/10 mb-3" />
          <p className="text-white/30">No emails found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredEmails.map((email, i) => (
            <motion.div
              key={email._id || i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                    <User size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{email.email}</h3>
             
                 
                  </div>
                </div>
                <div className="text-[10px] text-white/20 font-medium uppercase tracking-wider">
                  {new Date(email.createdAt).toLocaleDateString() || "Recent"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

/* ================= CONTACT DETAILS VIEW ================= */


const ContactDetailsView = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null); // For view modal

  const fetchContacts = useCallback(() => {
    setLoading(true);
    axios
      .get("https://backend-code-6vqy.onrender.com/contact/getcontactform")
      .then((res) => setContacts(Array.isArray(res.data.data) ? res.data.data : []))
      .catch((err) => {
        console.error("Contact API Error:", err);
        setContacts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const filteredContacts = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.message?.toLowerCase().includes(q) ||
      c.company?.toLowerCase().includes(q)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Contact Form Submissions
            <span className="ml-3 text-sm font-medium text-indigo-300/70">
              ({filteredContacts.length} Total)
            </span>
          </h1>
          <p className="text-indigo-300/60 text-sm mt-1">
            Review inquiries and contact requests
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts…"
              className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            onClick={fetchContacts}
            disabled={loading}
            className="flex items-center space-x-1.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-indigo-300 text-sm transition-all"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            <span className="hidden sm:inline">Refresh</span>
          </motion.button>
        </div>
      </div>

      {/* Loading / No Data */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <RefreshCw size={24} className="text-indigo-500 animate-spin" />
        </div>
      ) : filteredContacts.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
          <MessageSquare size={40} className="mx-auto text-white/10 mb-3" />
          <p className="text-white/30">No submissions found</p>
        </div>
      ) : (
        /* Table */
        <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl">
          <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-indigo-300/70">
              <tr>
                <th className="px-4 py-3">Sl.No</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact, i) => (
                <tr
                  key={contact._id || i}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="px-4 py-3 text-white/40">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    {contact.name} 
                  </td>
                  <td className="px-4 py-3 text-indigo-300/80">{contact.email}</td>
                  <td className="px-4 py-3 text-white/70">{contact.subject || "—"}</td>
                  <td className="px-4 py-3 max-w-xs truncate text-white/60">{contact.message}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0b0f1a] max-w-lg w-full rounded-2xl border border-white/10 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-bold text-white">Contact Details</h2>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-white/40 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <p>
                <span className="text-white/40">Name:</span> {selectedContact.firstName} {selectedContact.lastName}
              </p>
              <p>
                <span className="text-white/40">Email:</span> {selectedContact.email}
              </p>
              {selectedContact.phone && (
                <p>
                  <span className="text-white/40">Phone:</span> {selectedContact.phone}
                </p>
              )}
              {selectedContact.company && (
                <p>
                  <span className="text-white/40">Company:</span> {selectedContact.company}
                </p>
              )}
              <p>
                <span className="text-white/40">Subject:</span> {selectedContact.subject || "—"}
              </p>
              <div>
                <p className="text-white/40 mb-1">Message:</p>
                <p className="bg-white/5 border border-white/10 rounded-xl p-3 text-white/80">
                  {selectedContact.message}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};


/* ================= HELIX ABSTRACT DETAILS VIEW ================= */

/* ================= HELIX ABSTRACT DETAILS VIEW ================= */

const HelixAbstractDetailsView = () => {
  const [abstracts, setAbstracts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedAbstract, setSelectedAbstract] = useState(null);

  const getFileUrl = (path) => {
    if (!path) return null;
    
    // Handle case where path might be an object (e.g. from Cloudinary)
    const strPath = typeof path === 'string' ? path : (path.url || path.secure_url);
    
    if (!strPath || typeof strPath !== 'string') return null;

    if (strPath.startsWith("http")) return strPath;
    // Normalize backslashes (Windows) to forward slashes (URL)
    const normalizedPath = strPath.replace(/\\/g, "/");
    // This assumes the backend serves files from the root or the path already includes 'uploads/'
    return `/${normalizedPath}`;
  };

  const fetchAbstracts = useCallback(() => {
    setLoading(true);
    axios
      .get("https://helix-abstract-form-backend-1.onrender.com/api/forms/all")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : (res.data.data || []);
        setAbstracts(data);
      })
      .catch((err) => {
        console.error("Abstract API Error:", err);
        setAbstracts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchAbstracts();
  }, [fetchAbstracts]);

  const filteredAbstracts = abstracts.filter((a) => {
    const q = search.toLowerCase();
    return (
      `${a.firstName} ${a.lastName}`.toLowerCase().includes(q) ||
      a.affiliation?.toLowerCase().includes(q) ||
      a.university?.toLowerCase().includes(q) ||
      a.country?.toLowerCase().includes(q) ||
      a.tracks?.toLowerCase().includes(q)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Helix Abstract Submissions
            <span className="ml-3 text-sm font-medium text-emerald-300/70">
              ({filteredAbstracts.length} Total)
            </span>
          </h1>
          <p className="text-emerald-300/60 text-sm mt-1">
            Review and manage scientific abstract submissions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search abstracts…"
              className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            onClick={fetchAbstracts}
            disabled={loading}
            className="flex items-center space-x-1.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-emerald-300 text-sm transition-all"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            <span className="hidden sm:inline">Refresh</span>
          </motion.button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <RefreshCw size={24} className="text-emerald-500 animate-spin" />
        </div>
      ) : filteredAbstracts.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
          <FileText size={40} className="mx-auto text-white/10 mb-3" />
          <p className="text-white/30">No abstract submissions found</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl">
          <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-emerald-300/70">
              <tr>
                <th className="px-4 py-3">Sl.No</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Affiliation</th>
                <th className="px-4 py-3">University</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Track</th>
                <th className="px-4 py-3 text-center">Files</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAbstracts.map((abstract, i) => (
                <tr
                  key={abstract._id || i}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="px-4 py-3 text-white/40">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    {abstract.firstName} {abstract.lastName}
                  </td>
                  <td className="px-4 py-3 text-white/70">{abstract.affiliation || "—"}</td>
                  <td className="px-4 py-3 text-white/60">{abstract.university || "—"}</td>
                  <td className="px-4 py-3 text-emerald-300/80">{abstract.country || "—"}</td>
                  <td className="px-4 py-3 text-white/60 max-w-xs truncate">{abstract.tracks || "—"}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                       {abstract.abstract && (
                        <a href={getFileUrl(abstract.abstract)} target="_blank" rel="noopener noreferrer" title="View Abstract" className="text-emerald-400 hover:text-emerald-300 transition">
                          <FileText size={16} />
                        </a>
                      )}
                      {abstract.biography && (
                        <a href={getFileUrl(abstract.biography)} target="_blank" rel="noopener noreferrer" title="View Bio" className="text-blue-400 hover:text-blue-300 transition">
                          <User size={16} />
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => setSelectedAbstract(abstract)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedAbstract && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelectedAbstract(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0b0f1a] max-w-lg w-full rounded-2xl border border-white/10 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <FileText size={18} className="text-emerald-400" />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Submission Details</h2>
              </div>
              <button onClick={() => setSelectedAbstract(null)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6 text-sm max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
              
              <div className="flex flex-col items-center">
                {selectedAbstract.photo ? (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <img
                        src={getFileUrl(selectedAbstract.photo)}
                        alt="Profile"
                        className="w-28 h-28 rounded-3xl object-cover border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/20"
                      />
                    </div>
                    <a
                      href={getFileUrl(selectedAbstract.photo)}
                      download
                      className="flex items-center space-x-2 px-5 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl text-[10px] font-black transition-all border border-emerald-500/20 tracking-[0.2em] uppercase italic"
                    >
                      <Download size={12} />
                      <span>Download Pic</span>
                    </a>
                  </div>
                ) : (
                  <div className="w-28 h-28 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
                    <User size={40} className="text-white/10" />
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <h3 className="text-white font-bold text-2xl leading-tight">
                    {selectedAbstract.firstName} {selectedAbstract.lastName}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    <MapPin size={12} className="text-emerald-500" />
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{selectedAbstract.country || "International"}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Affiliation</p>
                  <p className="text-white font-medium">{selectedAbstract.affiliation || "—"}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">University</p>
                  <p className="text-white font-medium">{selectedAbstract.university || "—"}</p>
                </div>
              </div>

              <div className="px-2">
                <div className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10">
                  <p className="text-emerald-400/50 text-[10px] uppercase font-bold tracking-widest mb-1">Selected Track</p>
                  <p className="text-emerald-100 font-semibold italic">"{selectedAbstract.tracks || "General Session"}"</p>
                </div>
              </div>

              <div className="space-y-3 px-2 pt-2">
                {selectedAbstract.abstract ? (
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href={getFileUrl(selectedAbstract.abstract)}
                    download
                    className="flex items-center justify-between w-full px-6 py-5 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30 text-emerald-300 rounded-2xl border border-emerald-500/30 transition-all group shadow-lg shadow-emerald-500/5"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <FileText size={20} className="text-emerald-400" />
                      </div>
                      <span className="font-black text-xs tracking-tighter uppercase italic">Download Abstract PDF</span>
                    </div>
                    <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  </motion.a>
                ) : (
                  <div className="flex items-center px-6 py-5 bg-white/5 text-white/20 rounded-2xl border border-white/5 opacity-40 italic text-xs">
                    No Abstract PDF uploaded
                  </div>
                )}

                {selectedAbstract.biography ? (
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href={getFileUrl(selectedAbstract.biography)}
                    download
                    className="flex items-center justify-between w-full px-6 py-5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 text-blue-300 rounded-2xl border border-blue-500/30 transition-all group shadow-lg shadow-blue-500/5"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <User size={20} className="text-blue-400" />
                      </div>
                      <span className="font-black text-xs tracking-tighter uppercase italic">Download Bio PDF</span>
                    </div>
                    <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  </motion.a>
                ) : (
                  <div className="flex items-center px-6 py-5 bg-white/5 text-white/20 rounded-2xl border border-white/5 opacity-40 italic text-xs">
                    No Biography PDF uploaded
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};
export default Admin;

