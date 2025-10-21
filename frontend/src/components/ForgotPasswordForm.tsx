'use client';

import React, { useState } from "react";
import Link from "next/link";
import { api } from '../lib/api';
import styles from "./ForgotPassword.module.css";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setError("");
  }

  function validate() {
    if (!email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email address.";
    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setSubmitting(true);
    try {
      await api.forgotPassword(email);
      setSuccess(true);
    } catch (error: any) {
      setError(error.message || "Failed to send reset email. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>Check Your Email</h1>
            <p className={styles.subtitle}>
              We've sent a password reset link to {email}
            </p>
          </div>
          <div className={styles.footerText}>
            <Link href="/reset-password" className={styles.backLink}>
              Go to Reset Password
            </Link>
            {" | "}
            <Link href="/login" className={styles.backLink}>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card} role="region" aria-labelledby="forgot-heading">
        <header className={styles.header}>
          <h1 id="forgot-heading" className={styles.title}>
            Forgot Password?
          </h1>
          <p className={styles.subtitle}>
            No problem! Just enter the email address you've used to signup.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {error && <div className={styles.formError} role="alert">{error}</div>}

          <label className={styles.label}>
            <span className={styles.labelText}>Email Address</span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              className={`${styles.input} ${error ? styles.inputError : ""}`}
              placeholder="you@example.com"
              aria-invalid={!!error}
            />
          </label>

          <button
            type="submit"
            className={styles.submit}
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? "Sending..." : "Send Reset Link"}
          </button>

          <div className={styles.footerText}>
            Remember your password?{" "}
            <Link href="/login" className={styles.backLink}>
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}