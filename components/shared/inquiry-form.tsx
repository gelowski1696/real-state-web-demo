'use client';

import { FormEvent, useState } from 'react';
import { validateInquiry, type InquiryErrors, type InquiryValues } from '@/lib/validation';
import styles from './inquiry-form.module.css';

const initialValues: InquiryValues = { name: '', email: '', phone: '', subject: '', message: '', consent: false };

export function InquiryForm({ projectName }: { projectName?: string }) {
  const [values, setValues] = useState<InquiryValues>({ ...initialValues, subject: projectName ? `Enquiry about ${projectName}` : '' });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const update = <K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) => setValues((current) => ({ ...current, [key]: value }));
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };
  if (submitted) return <div className={styles.success} role="status"><span className={styles.successMark}>✓</span><p className={styles.label}>Demo enquiry received</p><h3>Thank you, {values.name.split(' ')[0]}.</h3><p>This is a demonstration form and no message has been sent. No personal data has been stored.</p><button type="button" onClick={() => { setValues({ ...initialValues, subject: projectName ? `Enquiry about ${projectName}` : '' }); setSubmitted(false); }}>Send another enquiry</button></div>;
  const fieldError = (field: keyof InquiryValues) => errors[field] ? <span className={styles.error} id={`${field}-error`} role="alert">{errors[field]}</span> : null;
  return <form className={styles.form} onSubmit={onSubmit} noValidate aria-describedby="demo-disclosure"><div className={styles.grid}><label>Name *<input name="name" value={values.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} autoComplete="name" />{fieldError('name')}</label><label>Email *<input name="email" type="email" value={values.email} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} autoComplete="email" />{fieldError('email')}</label><label>Phone <span className={styles.optional}>(optional)</span><input name="phone" type="tel" value={values.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" /></label><label>Subject <span className={styles.optional}>(optional)</span><input name="subject" value={values.subject} onChange={(event) => update('subject', event.target.value)} /></label><label className={styles.full}>Message *<textarea name="message" rows={6} value={values.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{fieldError('message')}</label></div><label className={styles.consent}><input name="consent" type="checkbox" checked={values.consent} onChange={(event) => update('consent', event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} /><span>I understand this is a fictional portfolio demonstration and not a live enquiry channel. *</span></label>{fieldError('consent')}<p className={styles.disclosure} id="demo-disclosure">Demo mode: this form validates in your browser only. It does not send or store personal information.</p><button className={styles.submit} type="submit">Submit enquiry <span aria-hidden="true">↗</span></button></form>;
}
