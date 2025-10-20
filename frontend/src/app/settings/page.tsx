'use client';

import Head from "next/head";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import { api, User } from "../../lib/api";

export default function SettingsPage() {
  // Account
  const [email, setEmail] = useState("user@branaarts.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadUserProfile();
  }, []);

  async function loadUserProfile() {
    try {
      const userData = await api.getProfile();
      setUser(userData);
    } catch (error) {
      console.error('Failed to load user profile:', error);
    }
  }

  // Toggles
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [privateMessaging, setPrivateMessaging] = useState(false);

  // Language
  const [language, setLanguage] = useState("English");

  // UI state
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  function validateEmail(value: string) {
    return /^\S+@\S+\.\S+$/.test(value);
  }

  async function handleUpdatePassword(e?: React.FormEvent) {
    e?.preventDefault();
    setMessage(null);

    if (!currentPassword || !newPassword) {
      setMessage("Please provide both current and new passwords to change your password.");
      return;
    }
    if (newPassword.length < 8) {
      setMessage("New password must be at least 8 characters.");
      return;
    }

    setSaving(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setMessage("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } catch {
      setMessage("Failed to update password. Try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveAll(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      emailRef.current?.focus();
      return;
    }

    setSaving(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setMessage("Settings saved successfully!");
    } catch {
      setMessage("Failed to save settings. Try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Head>
        <title>Settings — BRANA Arts</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <div className="page">
        <DashboardSidebar activePage="settings" />
        <div className="contentArea">
        <header className="topnav" role="banner">
        <div className="brand">
        </div>

        <nav className="centerlinks" aria-label="Main">
          <a href="/">Home</a>
          <a href="/collections">Explore</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/my-artworks">My Artworks</a>
        </nav>

        <div className="right">
          <button className="iconBtn" aria-label="Notifications">🔔</button>
          <div className="avatar">
            <Image 
              src={user?.profilePicture || "/assets/hanna.jpg"} 
              alt="User" 
              width={36} 
              height={36} 
            />
          </div>
        </div>
      </header>

      <main className="main">
        <form onSubmit={handleSaveAll} className="container" aria-labelledby="settings-heading">
          <h1 id="settings-heading">Settings</h1>

          <section className="section">
            <h2 className="sectionTitle">Account</h2>
            <div className="sectionBody">
              <label className="label">
                <span className="labelText">Email Address</span>
                <input
                  ref={emailRef}
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-required
                />
              </label>

              <div className="pwRow">
                <label className="label small">
                  <span className="labelText">Current Password</span>
                  <input
                    className="input"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder=""
                    autoComplete="current-password"
                  />
                </label>

                <label className="label small">
                  <span className="labelText">New Password</span>
                  <input
                    className="input"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder=""
                    autoComplete="new-password"
                  />
                </label>
              </div>

              <div className="actionsRow">
                <button
                  type="button"
                  className="button muted"
                  onClick={(e) => handleUpdatePassword(e as any)}
                  disabled={saving}
                >
                  Update Password
                </button>
              </div>
            </div>
          </section>

          <hr className="divider" />

          <section className="section">
            <h2 className="sectionTitle">Notifications</h2>
            <div className="sectionBody">
              <div className="toggleRow">
                <div className="toggleText">
                  <div className="labelText">Email Notifications</div>
                  <div className="muted">Receive notifications for new followers, likes, and comments.</div>
                </div>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      aria-label="Email notifications"
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>

              <div className="toggleRow">
                <div className="toggleText">
                  <div className="labelText">Push Notifications</div>
                  <div className="muted">Get push notifications for new messages and mentions.</div>
                </div>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={pushNotifications}
                      onChange={(e) => setPushNotifications(e.target.checked)}
                      aria-label="Push notifications"
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>
            </div>
          </section>

          <hr className="divider" />

          <section className="section">
            <h2 className="sectionTitle">Privacy</h2>
            <div className="sectionBody">
              <div className="toggleRow">
                <div className="toggleText">
                  <div className="labelText">Public Profile</div>
                  <div className="muted">Allow others to see your profile and activity.</div>
                </div>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={publicProfile}
                      onChange={(e) => setPublicProfile(e.target.checked)}
                      aria-label="Public profile"
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>

              <div className="toggleRow">
                <div className="toggleText">
                  <div className="labelText">Private Messaging</div>
                  <div className="muted">Only allow users you follow to send you direct messages.</div>
                </div>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={privateMessaging}
                      onChange={(e) => setPrivateMessaging(e.target.checked)}
                      aria-label="Private messaging"
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>
            </div>
          </section>

          <hr className="divider" />

          <section className="section">
            <h2 className="sectionTitle">Language</h2>
            <div className="sectionBody">
              <label className="label">
                <span className="labelText">Select Language</span>
                <select className="select" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Select language">
                  <option>English</option>
                  <option>አማርኛ (Amharic)</option>
                  <option>Oromiffa</option>
                  <option>ትግርኛ (Tigrinya)</option>
                </select>
              </label>
            </div>
          </section>

          <div className="bottomRow">
            {message && <div className="message" role="status">{message}</div>}

            <button type="submit" className="button primary" disabled={saving} aria-busy={saving}>
              {saving ? "Saving…" : "Save All Changes"}
            </button>
          </div>
        </form>
      </main>
        </div>
      </div>

      <style jsx>{`
        :root{
          --page-bg: #fbfaf8;
          --muted: #6b625d;
          --accent: #a65b2b;
          --muted-2: #9b8f88;
          --field-bg: #fff;
          --soft: rgba(0,0,0,0.06);
          --radius: 8px;
        }
        *{box-sizing:border-box}
        body{ margin:0; font-family: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial; background: var(--page-bg); color: #a65b2b !important; }
        * { color: #a65b2b !important; }
        .page { display: flex; min-height: 100vh; }
        .contentArea { flex: 1; display: flex; flex-direction: column; }

        .topnav{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 14px 28px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .brand{ display:flex; align-items:center; gap:12px; }
        .logo{ border-radius: 50%; object-fit: cover; }
        .centerlinks { display:flex; gap:20px; }
        .centerlinks a { color:#a65b2b !important; text-decoration:none; font-weight:600; }
        .centerlinks a:hover { text-decoration:underline; }
        .right{ display:flex; align-items:center; gap:12px; }
        .iconBtn{
          background:transparent;
          border:none;
          font-size:18px;
          cursor:pointer;
        }
        .avatar{ border-radius:999px; overflow:hidden; }
        .avatar img { border-radius: 50%; object-fit: cover; }

        .main{ max-width: 920px; margin: 28px auto; padding: 0 18px 80px; }
        h1 { font-family: "Playfair Display", serif; font-size: 36px; margin: 0; color: #a65b2b !important; }
        .container{ display:flex; flex-direction:column; gap: 18px; }

        .section{ display:flex; flex-direction:column; gap:12px; }
        .sectionTitle{ font-weight:700; color: #222; font-size:16px; margin: 0 0 6px; }
        .sectionBody{ background: transparent; padding: 4px 0 0 0; display:flex; flex-direction:column; gap:12px; }

        .label{ display:flex; flex-direction:column; gap:8px; max-width:720px; }
        .labelText{ font-weight:700; color:#a65b2b !important; font-size:13px; }
        .input, .select{ width:100%; padding:10px 12px; border-radius:8px; border:1px solid var(--soft); background: var(--field-bg); font-size:14px; outline:none; }
        .input:focus, .select:focus{ box-shadow: 0 8px 20px rgba(166,91,43,0.06); border-color: rgba(166,91,43,0.08); }

        .pwRow{ display:flex; gap:12px; }
        .label.small{ flex:1; }

        .actionsRow{ display:flex; gap:12px; align-items:center; margin-top:4px; }

        .divider{ border: none; border-top: 1px solid rgba(0,0,0,0.04); margin: 12px 0; }

        /* Toggle rows */
        .toggleRow{ display:flex; justify-content:space-between; align-items:center; gap:12px; max-width:720px; padding:8px 0; }
        .toggleText{ max-width:640px; }
        .muted{ color: var(--muted-2); font-size:13px; margin-top:4px; }

        /* Switch style */
        .switch{ position:relative; display:inline-block; width:46px; height:26px; }
        .switch input{ opacity:0; width:0; height:0; }
        .slider{
          position:absolute;
          cursor:pointer;
          top:0; left:0; right:0; bottom:0;
          background:#e9e7e5;
          transition:.2s;
          border-radius:999px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
        }
        .slider:before{
          content:"";
          position:absolute;
          height:20px; width:20px;
          left:4px; top:3px;
          background:#fff;
          border-radius:50%;
          transition:.2s;
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
        }
        .switch input:checked + .slider{ background: var(--accent); }
        .switch input:checked + .slider:before{ transform: translateX(20px); }

        /* bottom row */
        .bottomRow{ display:flex; justify-content:space-between; align-items:center; margin-top: 8px; gap:12px; }
        .message{ color: var(--muted); font-size:14px; }

        /* Buttons */
        .button{ padding:8px 12px; border-radius:8px; border:none; cursor:pointer; font-weight:700; }
        .button.muted{ background:#efe6de; color:#4a2f20; }
        .button.primary{ background:var(--accent); color:#fff !important; box-shadow: 0 6px 18px rgba(166,91,43,0.12); }

        /* responsive */
        @media (max-width: 860px){
          .pwRow{ flex-direction: column; }
          .toggleRow{ flex-direction: column; align-items:flex-start; }
          .bottomRow{ flex-direction: column-reverse; align-items:stretch; }
        }
      `}</style>
    </>
  );
}