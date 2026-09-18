import { useMemo, useState } from 'react';
import { getData, saveData } from '../services/storageService';

const defaultForm = {
  managerId: '',
  industryId: '',
  visitDate: '',
  visitTime: '',
  contactPerson: '',
  designation: '',
  contactPhone: '',
  email: '',
  purpose: '',
  services: [],
  response: '',
  interestLevel: '',
  priority: '',
  remarks: '',
  followUpRequired: true,
  nextFollowUpDate: '',
  status: 'New Lead',
};

const serviceOptions = [
  'Blood Tests',
  'Full Body Checkup',
  'Corporate Health Checkup',
  'Home Sample Collection',
  'Preventive Health Packages',
  'Specialized Diagnostic Tests',
  'Health Camp',
  'Employee Wellness Program',
];

function Visits() {
  const data = useMemo(() => getData(), []);
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState('');

  const handleIndustryChange = (industryId) => {
    const industry = data.industries.find((item) => item.id === Number(industryId));
    setForm({
      ...form,
      industryId,
      contactPerson: industry?.contactPerson || '',
      designation: industry?.designation || '',
      contactPhone: industry?.phone || '',
      email: industry?.email || '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const visit = {
      id: Date.now(),
      ...form,
      managerId: Number(form.managerId),
      industryId: Number(form.industryId),
      services: form.services,
      followUpRequired: form.followUpRequired,
    };

    if (!form.managerId || !form.industryId || !form.visitDate || !form.response) {
      setMessage('Manager, industry, visit date and response are required.');
      return;
    }

    const updated = [...(data.visits || []), visit];
    saveData({ ...data, visits: updated });
    setMessage('Visit recorded successfully.');
    setForm(defaultForm);
  };

  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Operations</p>
          <h2>Visit & Marketing Details</h2>
        </div>
      </div>

      <div className="panel-card">
        <form className="visit-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Visit Information</h3>
            <div className="form-grid two-col">
              <label><span>Marketing Manager</span><select value={form.managerId} onChange={(e) => setForm({ ...form, managerId: e.target.value })}><option value="">Select</option>{data.managers.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}</select></label>
              <label><span>Industry / Company</span><select value={form.industryId} onChange={(e) => handleIndustryChange(e.target.value)}><option value="">Select</option>{data.industries.map((i) => <option key={i.id} value={i.id}>{i.name}</option>)}</select></label>
              <label><span>Visit Date</span><input type="date" value={form.visitDate} onChange={(e) => setForm({ ...form, visitDate: e.target.value })} /></label>
              <label><span>Visit Time</span><input type="time" value={form.visitTime} onChange={(e) => setForm({ ...form, visitTime: e.target.value })} /></label>
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-grid two-col">
              <label><span>Contact Person</span><input value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} /></label>
              <label><span>Designation</span><input value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} /></label>
              <label><span>Contact Phone</span><input value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} /></label>
              <label><span>Email</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
            </div>
          </div>

          <div className="form-section">
            <h3>Purpose of Visit</h3>
            <div className="form-grid one-col">
              <label><span>Purpose</span><select value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })}><option value="">Select</option><option value="Corporate Health Checkup">Corporate Health Checkup</option><option value="Diagnostic Services">Diagnostic Services</option><option value="Employee Wellness Program">Employee Wellness Program</option><option value="Health Camp">Health Camp</option><option value="Partnership">Partnership</option><option value="General Introduction">General Introduction</option><option value="Other">Other</option></select></label>
            </div>
          </div>

          <div className="form-section">
            <h3>Services Explained</h3>
            <div className="checkbox-grid">
              {serviceOptions.map((option) => (
                <label key={option} className="checkbox-row">
                  <input type="checkbox" checked={form.services.includes(option)} onChange={(e) => {
                    const selected = e.target.checked ? [...form.services, option] : form.services.filter((item) => item !== option);
                    setForm({ ...form, services: selected });
                  }} />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Customer Response</h3>
            <div className="form-grid two-col">
              <label><span>Response</span><select value={form.response} onChange={(e) => setForm({ ...form, response: e.target.value })}><option value="">Select</option><option value="Interested">Interested</option><option value="Very Interested">Very Interested</option><option value="Will Think About It">Will Think About It</option><option value="Need More Information">Need More Information</option><option value="Asked for Quotation">Asked for Quotation</option><option value="Not Interested">Not Interested</option><option value="Contact Later">Contact Later</option></select></label>
              <label><span>Interest Level</span><select value={form.interestLevel} onChange={(e) => setForm({ ...form, interestLevel: e.target.value })}><option value="">Select</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select></label>
              <label><span>Lead Priority</span><select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}><option value="">Select</option><option value="Hot">Hot</option><option value="Warm">Warm</option><option value="Cold">Cold</option></select></label>
              <label><span>Lead Status</span><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="New Lead">New Lead</option><option value="Visited">Visited</option><option value="Interested">Interested</option><option value="Follow-up">Follow-up</option><option value="Negotiation">Negotiation</option><option value="Converted">Converted</option><option value="Not Interested">Not Interested</option><option value="Closed">Closed</option></select></label>
            </div>
          </div>

          <div className="form-section">
            <h3>Remarks and Follow-up</h3>
            <textarea value={form.remarks} onChange={(e) => setForm({ ...form, remarks: e.target.value })} placeholder="Client requested quotation for 500 employees." />
            <div className="form-grid two-col mt-16">
              <label className="checkbox-row big-check"><input type="checkbox" checked={form.followUpRequired} onChange={(e) => setForm({ ...form, followUpRequired: e.target.checked })} /> Follow-up Required</label>
              <label><span>Next Follow-up Date</span><input type="date" value={form.nextFollowUpDate} onChange={(e) => setForm({ ...form, nextFollowUpDate: e.target.value })} /></label>
            </div>
          </div>

          {message && <div className="success-box">{message}</div>}

          <div className="form-actions">
            <button type="submit" className="primary-btn">Save Visit</button>
            <button type="button" className="light-btn" onClick={() => setForm(defaultForm)}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Visits;
