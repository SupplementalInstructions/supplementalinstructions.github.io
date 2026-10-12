import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Users, 
  Download, 
  Trash2, 
  Send, 
  CheckCircle, 
  RefreshCw, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  ArrowLeft,
  ExternalLink,
  PhoneCall
} from "lucide-react";
import useSEO from "../hooks/useSEO";

interface AdmissionLead {
  id: string;
  name: string;
  email: string;
  focusArea: string;
  createdAt: string;
  status?: "New" | "Contacted" | "Shipped" | "Archived";
}

interface CoachingBooking {
  coachId: string;
  coachName: string;
  date: string;
  timeSlot: string;
  intention: string;
  bookedAt: string;
}

const OFFICIAL_GMAIL = "supplementalinstructionllc@gmail.com";
const ADMIN_PASSCODE = "sh2026";

export default function Admin() {
  useSEO({
    title: "Admin Portal — Supplemental Instruction LLC",
    description: "Executive intake administration, candidate triage, and Gmail routing dispatch console.",
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem("sh_admin_auth") === "true";
  });
  const [passcodeInput, setPasscodeInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [admissions, setAdmissions] = useState<AdmissionLead[]>([]);
  const [bookings, setBookings] = useState<CoachingBooking[]>([]);
  const [activeTab, setActiveTab] = useState<"admissions" | "bookings">("admissions");
  const [statusNotification, setStatusNotification] = useState<string | null>(null);

  // Load records from localStorage
  const loadRecords = () => {
    try {
      const storedLeads = JSON.parse(localStorage.getItem("supplemental_admissions_leads") || "[]");
      setAdmissions(storedLeads);

      const storedBookings = JSON.parse(localStorage.getItem("supplemental_coaching_bookings") || "[]");
      setBookings(storedBookings);
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadRecords();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (passcodeInput.trim().toLowerCase() === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("sh_admin_auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("sh_admin_auth");
    setPasscodeInput("");
  };

  const notify = (msg: string) => {
    setStatusNotification(msg);
    setTimeout(() => setStatusNotification(null), 4000);
  };

  // Update lead status
  const updateLeadStatus = (id: string, newStatus: AdmissionLead["status"]) => {
    const updated = admissions.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    setAdmissions(updated);
    localStorage.setItem("supplemental_admissions_leads", JSON.stringify(updated));
    notify(`Status updated to ${newStatus}`);
  };

  // Delete lead
  const deleteLead = (id: string) => {
    if (window.confirm("Are you sure you want to remove this admission record?")) {
      const filtered = admissions.filter(lead => lead.id !== id);
      setAdmissions(filtered);
      localStorage.setItem("supplemental_admissions_leads", JSON.stringify(filtered));
      notify("Lead deleted from local registry.");
    }
  };

  // Export admissions to CSV
  const exportToCSV = () => {
    if (admissions.length === 0) {
      notify("No admission records to export.");
      return;
    }
    const headers = ["Priority ID,Applicant Name,Email,Focus Track,Submitted At,Status\n"];
    const rows = admissions.map(l => 
      `"${l.id}","${l.name}","${l.email}","${l.focusArea}","${l.createdAt}","${l.status || 'New'}"`
    );
    const blob = new Blob([headers.concat(rows.join("\n")).join("")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `supplemental_admissions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    notify("Exported admissions to CSV.");
  };

  // Forward entire digest to Gmail
  const sendDigestToGmail = () => {
    if (admissions.length === 0) {
      notify("No candidates to dispatch.");
      return;
    }

    const subject = encodeURIComponent(`Supplemental Instruction - Admissions Report (${admissions.length} Candidates)`);
    const bodyLines = admissions.map((l, i) => 
      `Candidate #${i + 1}:\n• Name: ${l.name}\n• Email: ${l.email}\n• Track: ${l.focusArea}\n• Priority ID: ${l.id}\n• Date: ${l.createdAt}\n• Status: ${l.status || 'New'}\n`
    ).join("\n-------------------------\n\n");

    const fullBody = encodeURIComponent(
      `Executive Admissions Digest for Supplemental Instruction LLC\nTarget Email: ${OFFICIAL_GMAIL}\nGenerated: ${new Date().toLocaleString()}\n\n=========================\n\n${decodeURIComponent(bodyLines)}`
    );

    window.open(`mailto:${OFFICIAL_GMAIL}?subject=${subject}&body=${fullBody}`, "_blank");
    notify(`Opening email digest to ${OFFICIAL_GMAIL}...`);
  };

  // Single candidate email forward
  const forwardSingleLead = (lead: AdmissionLead) => {
    const subject = encodeURIComponent(`Candidate Admission File: ${lead.name} [${lead.id}]`);
    const body = encodeURIComponent(
      `Hello Admin Team,\n\nHere are the details for candidate admission file ${lead.id}:\n\n• Name: ${lead.name}\n• Email: ${lead.email}\n• Focus Track: ${lead.focusArea}\n• Registered: ${lead.createdAt}\n\nDispatched from Supplemental Instruction Admin Console.`
    );
    window.open(`mailto:${OFFICIAL_GMAIL}?subject=${subject}&body=${body}`, "_blank");
    notify(`Opening email draft for ${lead.name} to ${OFFICIAL_GMAIL}`);
  };

  // If not authenticated, render login lock
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#060B13] text-slate-200 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 rounded-full bg-[#0D9488]/10 blur-[100px] pointer-events-none" />
        <div className="relative w-full max-w-md p-8 rounded-2xl bg-[#0c1524]/80 border border-white/10 shadow-2xl backdrop-blur-xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/15 border border-[#0D9488]/30 flex items-center justify-center mx-auto mb-5 text-[#14B8A6]">
            <Lock className="w-7 h-7" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#14B8A6] font-extrabold block mb-1">
            EXECUTIVE CONSOLE
          </span>
          <h2 className="font-display font-extrabold text-2xl text-white mb-2">Admin Portal Login</h2>
          <p className="text-xs text-slate-400 mb-6 font-sans">
            Please enter your administrative security key to access candidate files, booking registries, and Gmail dispatch tools.
          </p>

          {authError && (
            <div className="p-3 rounded-xl bg-red-950/30 border border-red-800 text-xs text-red-400 font-mono mb-4 text-left">
              ⚠ Invalid Security Key. (Hint: default key is <strong className="text-white">sh2026</strong>)
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcodeInput}
                onChange={(e) => setPasscodeInput(e.target.value)}
                placeholder="Enter passcode (sh2026)"
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#14B8A6] font-mono text-center tracking-widest"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950/20"
            >
              Authenticate Portal
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/5">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Lab</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060B13] text-slate-200 relative overflow-hidden" id="admin-portal-container">
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-[#0D9488]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Floating alert */}
      {statusNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border border-[#14B8A6]/40 bg-slate-900 shadow-2xl text-xs font-mono font-bold tracking-wide text-white animate-fade-in">
          {statusNotification}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 z-10 text-left">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/30 text-[10px] font-mono font-bold text-[#14B8A6] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>OFFICIAL INTAKE ADMINISTRATION CONSOLE</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Admissions & Operations HUD
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
              Connected Target Gmail: <strong className="text-white font-mono">{OFFICIAL_GMAIL}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadRecords}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Refresh Records"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={sendDigestToGmail}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Dispatch Digest to Gmail</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2.5 rounded-xl bg-red-950/20 hover:bg-red-950/40 border border-red-800/40 text-red-400 hover:text-red-300 text-xs font-bold transition-all cursor-pointer"
            >
              Lock Console
            </button>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-xl bg-[#0c1524]/60 border border-white/10 shadow-md">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block font-bold">TOTAL ADMISSIONS QUEUED</span>
            <span className="font-display font-extrabold text-3xl text-white mt-1 block">{admissions.length}</span>
            <span className="text-[10px] text-[#14B8A6] font-mono mt-2 block font-semibold">● Real Candidate Inquiries</span>
          </div>

          <div className="p-5 rounded-xl bg-[#0c1524]/60 border border-white/10 shadow-md">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ADVISOR BOOKING REQUESTS</span>
            <span className="font-display font-extrabold text-3xl text-cyan-400 mt-1 block">{bookings.length}</span>
            <span className="text-[10px] text-cyan-400 font-mono mt-2 block font-semibold">● Scheduled Alignment Slots</span>
          </div>

          <div className="p-5 rounded-xl bg-[#0c1524]/60 border border-white/10 shadow-md">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block font-bold">GMAIL NOTIFICATION ROUTE</span>
            <span className="font-mono font-bold text-xs text-amber-400 mt-2 block truncate">{OFFICIAL_GMAIL}</span>
            <span className="text-[10px] text-slate-400 font-mono mt-2 block">Direct Dispatch Armed</span>
          </div>

          <div className="p-5 rounded-xl bg-[#0c1524]/60 border border-white/10 shadow-md">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FOUNDER WHATSAPP DESK</span>
            <span className="font-mono font-bold text-xs text-[#2ECC71] mt-2 block">+1 (470) 812-5814</span>
            <span className="text-[10px] text-slate-400 font-mono mt-2 block">Direct Fast-Track Active</span>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("admissions")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "admissions"
                ? "bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Candidate Admissions ({admissions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "bookings"
                ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Coaching Bookings ({bookings.length})</span>
          </button>
        </div>

        {/* TAB 1: ADMISSIONS TABLE */}
        {activeTab === "admissions" && (
          <div className="bg-[#0c1524]/70 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-display font-bold text-base text-white">Active Candidate Inquiries</h3>
                <p className="text-xs text-slate-400 mt-0.5">Every application submitted via the intake portal is catalogued below with 1-click dispatch.</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400">Total: {admissions.length} Candidates</span>
              </div>
            </div>

            {admissions.length === 0 ? (
              <div className="p-16 text-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-slate-500">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-sm text-white">No Admission Inquiries Yet</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                  When visitors submit applications on the admissions page, their details will automatically appear here and be routed to {OFFICIAL_GMAIL}.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 border-b border-white/10 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Priority ID</th>
                      <th className="py-3.5 px-4">Applicant Name</th>
                      <th className="py-3.5 px-4">Email Address</th>
                      <th className="py-3.5 px-4">Focus Track</th>
                      <th className="py-3.5 px-4">Submission Date</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {admissions.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-[#14B8A6]">{lead.id}</td>
                        <td className="py-4 px-4 font-semibold text-white">{lead.name}</td>
                        <td className="py-4 px-4 font-mono text-slate-300">
                          <a href={`mailto:${lead.email}`} className="hover:text-cyan-400 underline">
                            {lead.email}
                          </a>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0D9488]/15 border border-[#0D9488]/25 text-[#14B8A6]">
                            {lead.focusArea}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-400 font-mono text-[11px]">
                          {new Date(lead.createdAt).toLocaleDateString()} {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="py-4 px-4">
                          <select
                            value={lead.status || "New"}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as AdmissionLead["status"])}
                            className="bg-slate-950 border border-white/10 rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-200 focus:outline-none focus:border-[#14B8A6]"
                          >
                            <option value="New">🟢 New</option>
                            <option value="Contacted">🟡 Contacted</option>
                            <option value="Shipped">📦 Shipped</option>
                            <option value="Archived">⚪ Archived</option>
                          </select>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Forward to Gmail */}
                            <button
                              onClick={() => forwardSingleLead(lead)}
                              className="p-1.5 rounded-lg bg-[#0D9488]/15 hover:bg-[#0D9488]/30 border border-[#0D9488]/30 text-[#14B8A6] transition-all cursor-pointer"
                              title={`Forward this lead to ${OFFICIAL_GMAIL}`}
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </button>

                            {/* Direct WhatsApp to Candidate */}
                            <a
                              href={`https://wa.me/14708125814?text=${encodeURIComponent(
                                `Admissions Review for ${lead.name} (${lead.id}): Track = ${lead.focusArea}, Email = ${lead.email}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition-all cursor-pointer"
                              title="Chat on WhatsApp Desk"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>

                            {/* Delete */}
                            <button
                              onClick={() => deleteLead(lead.id)}
                              className="p-1.5 rounded-lg bg-red-950/20 hover:bg-red-950/40 border border-red-800/30 text-red-400 transition-all cursor-pointer"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: COACHING BOOKINGS TABLE */}
        {activeTab === "bookings" && (
          <div className="bg-[#0c1524]/70 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-display font-bold text-base text-white">Coaching Alignment Bookings</h3>
                <p className="text-xs text-slate-400 mt-0.5">Sessions scheduled by candidates through the Certified Advisors directory.</p>
              </div>

              <span className="text-[11px] font-mono text-slate-400">Total: {bookings.length} Bookings</span>
            </div>

            {bookings.length === 0 ? (
              <div className="p-16 text-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-slate-500">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-sm text-white">No Coaching Bookings Yet</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                  When users request sessions in the coach directory, appointment files will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 border-b border-white/10 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Advisor Name</th>
                      <th className="py-3.5 px-4">Target Date</th>
                      <th className="py-3.5 px-4">Time Slot</th>
                      <th className="py-3.5 px-4">Candidate Roadblocks Note</th>
                      <th className="py-3.5 px-4">Booked At</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {bookings.map((booking, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-bold text-white">{booking.coachName}</td>
                        <td className="py-4 px-4 font-mono text-cyan-400">{booking.date}</td>
                        <td className="py-4 px-4 font-mono text-slate-300">{booking.timeSlot}</td>
                        <td className="py-4 px-4 text-slate-400 max-w-xs truncate font-sans">
                          {booking.intention || "—"}
                        </td>
                        <td className="py-4 px-4 text-slate-400 font-mono text-[11px]">
                          {new Date(booking.bookedAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <a
                            href={`mailto:${OFFICIAL_GMAIL}?subject=${encodeURIComponent(
                              `Scheduled Coaching Slot: ${booking.coachName} (${booking.date})`
                            )}&body=${encodeURIComponent(
                              `Advisor: ${booking.coachName}\nDate: ${booking.date}\nSlot: ${booking.timeSlot}\nNote: ${booking.intention}`
                            )}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-[11px] transition-all"
                          >
                            <Mail className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Notify Gmail</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
