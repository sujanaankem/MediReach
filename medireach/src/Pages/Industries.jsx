import { useMemo, useState } from 'react';
import { getData, saveData } from '../services/storageService';
import DataTable from '../components/DataTable';

const defaultForm = {
  name: '',
  type: '',
  address: '',
  city: '',
  contactPerson: '',
  designation: '',
  phone: '',
  email: '',
  employees: '',
  website: '',
  status: 'Active',
};

function Industries() {
  const data = useMemo(() => getData(), []);
  const [industries, setIndustries] = useState(data.industries || []);
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Company name is required.';
    if (!form.type.trim()) nextErrors.type = 'Industry type is required.';
    if (!form.contactPerson.trim()) nextErrors.contactPerson = 'Contact person is required.';
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) nextErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const newIndustry = { id: Date.now(), ...form };
    const updated = [...industries, newIndustry];
    setIndustries(updated);
    saveData({ ...data, industries: updated });
    setForm(defaultForm);
  };

  const columns = [
    { key: 'id', label: 'Industry ID' },
    { key: 'name', label: 'Company Name' },
    { key: 'type', label: 'Industry Type' },
    { key: 'city', label: 'City' },
    { key: 'contactPerson', label: 'Contact Person' },
    { key: 'designation', label: 'Designation' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'employees', label: 'Employees' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Clients</p>
          <h2>Industries</h2>
        </div>
        <button type="button" className="primary-btn">+ Add Industry</button>
      </div>

      <div className="panel-card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <label><span>Industry / Company Name</span><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />{errors.name && <small className="field-error">{errors.name}</small>}</label>
          <label><span>Industry Type</span><select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option value="">Select</option><option value="IT">IT</option><option value="Manufacturing">Manufacturing</option><option value="Hospital">Hospital</option><option value="School">School</option><option value="College">College</option><option value="Pharma">Pharma</option><option value="Banking">Banking</option><option value="Corporate">Corporate</option><option value="Retail">Retail</option><option value="Other">Other</option></select>{errors.type && <small className="field-error">{errors.type}</small>}</label>
          <label><span>Address</span><input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></label>
          <label><span>City</span><input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} /></label>
          <label><span>Contact Person</span><input value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} />{errors.contactPerson && <small className="field-error">{errors.contactPerson}</small>}</label>
          <label><span>Designation</span><input value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} /></label>
          <label><span>Phone Number</span><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />{errors.phone && <small className="field-error">{errors.phone}</small>}</label>
          <label><span>Email</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />{errors.email && <small className="field-error">{errors.email}</small>}</label>
          <label><span>Number of Employees</span><input type="number" value={form.employees} onChange={(e) => setForm({ ...form, employees: e.target.value })} /></label>
          <label><span>Website</span><input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></label>
          <label><span>Status</span><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="Active">Active</option><option value="Inactive">Inactive</option></select></label>

          <div className="form-actions"><button type="submit" className="primary-btn">Save Industry</button><button type="button" className="light-btn" onClick={() => setForm(defaultForm)}>Clear</button></div>
        </form>
      </div>

      <div className="panel-card">
        <DataTable columns={columns} rows={industries} emptyMessage="No industries found." />
      </div>
    </div>
  );
}

export default Industries;
