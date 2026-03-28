'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', organisation: '',
    enquiryType: '', eventDate: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <p className="form-success-title">Message sent.</p>
        <p className="form-success-desc">Thank you for reaching out — I&apos;ll be in touch within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input name="firstName" type="text" className="form-input" placeholder="First name" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input name="lastName" type="text" className="form-input" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input name="email" type="email" className="form-input" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label className="form-label">Organisation</label>
        <input name="organisation" type="text" className="form-input" placeholder="Company name" value={form.organisation} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label">Enquiry Type</label>
        <select name="enquiryType" className="form-select" value={form.enquiryType} onChange={handleChange} required>
          <option value="" disabled>Select</option>
          <option>Speaking</option>
          <option>Moderation</option>
          <option>Workshop</option>
          <option>Advisory</option>
          <option>Media</option>
          <option>General</option>
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Event Date</label>
          <input name="eventDate" type="date" className="form-input" value={form.eventDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label">Budget</label>
          <select name="budget" className="form-select" value={form.budget} onChange={handleChange}>
            <option value="" disabled>Select</option>
            <option>Under $5k</option>
            <option>$5k–$10k</option>
            <option>$10k–$25k</option>
            <option>$25k+</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-textarea" placeholder="Tell us about your event..." value={form.message} onChange={handleChange}></textarea>
      </div>
      {status === 'error' && (
        <p style={{color:'#c0392b',fontSize:'0.875rem',marginBottom:'0.5rem'}}>Something went wrong. Please try again or email directly.</p>
      )}
      <div style={{marginTop:'0.5rem'}}>
        <button className="btn btn-accent" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Enquiry'}{' '}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </button>
      </div>
    </form>
  );
}
