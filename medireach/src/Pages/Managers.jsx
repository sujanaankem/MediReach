import { useMemo, useState } from 'react';
import { getData, saveData } from '../services/storageService';
import DataTable from '../components/DataTable';

const defaultForm = {
  name: '',
  employeeId: '',
  phone: '',
  email: '',
  area: '',
  joiningDate: '',
  status: 'Active',
};

function Managers() {
  const data = useMemo(() => getData(), []);
  const [managers, setManagers] = useState(data.managers || []);
  const [form, setForm] = useState(defaultForm);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Manager name is required.';
    if (!form.employeeId.trim()) nextErrors.employeeId = 'Employee ID is required.';
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) nextErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.area.trim()) nextErrors.area = 'Assigned area is required.';
    if (!form.joiningDate) nextErrors.joiningDate = 'Joining date is required.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    let updated;
    if (editingId) {
      updated = managers.map((manager) => (manager.id === editingId ? { ...manager, ...form } : manager));
    } else {
      updated = [...managers, { id: Date.now(), ...form }];
    }

    setManagers(updated);
    saveData({ ...data, managers: updated });
    setForm(defaultForm);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const filtered = managers.filter((manager) => manager.id !== id);
    setManagers(filtered);
    saveData({ ...data, managers: filtered });
  };

  const columns = [
    { key: 'id', label: 'Manager ID' },
    { key: 'name', label: 'Manager Name' },
    { key: 'employeeId', label: 'Employee ID' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'area', label: 'Assigned Area' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions', render: (row) => (
        <div className="action-buttons">
          <button type="button" className="table-btn secondary" onClick={() => setForm(row)}>View</button>
          <button type="button" className="table-btn secondary" onClick={() => { setEditingId(row.id); setForm(row); }}>Edit</button>
          <button type="button" className="table-btn danger" onClick={() => handleDelete(row.id)}>Delete</button>
        </div>
      ) },
  ];

  return (
    <div className="page-stack">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">Team</p>
          <h2>Marketing Managers</h2>
        </div>
        <button type="button" className="primary-btn">+ Add Manager</button>
      </div>

      <div className="panel-card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            <span>Manager Name</span>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <small className="field-error">{errors.name}</small>}
          </label>

          <label>
            <span>Employee ID</span>
            <input value={form.employeeId} onChange={(e) => setForm({ ...form, employeeId: e.target.value })} />
            {errors.employeeId && <small className="field-error">{errors.employeeId}</small>}
          </label>

          <label>
            <span>Phone Number</span>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            {errors.phone && <small className="field-error">{errors.phone}</small>}
          </label>

          <label>
            <span>Email</span>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <small className="field-error">{errors.email}</small>}
          </label>

          <label>
            <span>Assigned Area</span>
            <input value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
            {errors.area && <small className="field-error">{errors.area}</small>}
          </label>

          <label>
            <span>Joining Date</span>
            <input type="date" value={form.joiningDate} onChange={(e) => setForm({ ...form, joiningDate: e.target.value })} />
            {errors.joiningDate && <small className="field-error">{errors.joiningDate}</small>}
          </label>

          <label>
            <span>Status</span>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>

          <div className="form-actions">
            <button type="submit" className="primary-btn">{editingId ? 'Update' : 'Save'}</button>
            <button type="button" className="light-btn" onClick={() => { setForm(defaultForm); setEditingId(null); setErrors({}); }}>Clear</button>
            <button type="button" className="light-btn" onClick={() => { setForm(defaultForm); setEditingId(null); }}>Cancel</button>
          </div>
        </form>
      </div>

      <div className="panel-card">
        <DataTable columns={columns} rows={managers} emptyMessage="No managers found." />
      </div>
    </div>
  );
}

export default Managers;
