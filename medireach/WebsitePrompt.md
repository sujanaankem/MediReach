I want to build a complete React JS web application called **MediReach – Diagnostic Marketing & Lead Management System**.

## 1. Project Purpose

MediReach is a web application for a diagnostic company that has multiple marketing managers who visit different industries, companies, hospitals, schools, colleges, and organizations to promote diagnostic services.

The application should allow the company to record:

* Which marketing manager visited
* Which industry/company they visited
* Date and time of visit
* Contact person and designation
* Purpose of the visit
* Diagnostic services explained
* Customer/industry response
* Interest level
* Lead priority
* Remarks
* Follow-up date
* Follow-up history
* Lead status
* Conversion status

The main objective is to replace manual notebooks/Excel sheets with a centralized marketing visit, lead, and follow-up management system.

---

# 2. Technology

Use:

* React JS
* Vite
* JavaScript
* HTML
* CSS
* React Router DOM
* React Hooks
* LocalStorage for temporary data storage
* Reusable React components

Do NOT use TypeScript.

Do NOT use a complicated UI library unless absolutely necessary.

Keep the code beginner-friendly, clean, modular, and easy to understand.

---

# 3. Overall Design

Create a professional medical/diagnostic company dashboard.

Design style:

* Clean
* Modern
* Professional
* Responsive
* Corporate
* Medical/healthcare inspired
* White background
* Navy/dark blue sidebar
* Blue primary buttons
* Light blue backgrounds
* White cards
* Rounded corners
* Soft shadows
* Simple icons
* Clear typography

Use a consistent design throughout all pages.

The application should look like a real company CRM/marketing management system rather than a college demo project.

---

# 4. Main Application Layout

After login, use a common layout:

LEFT SIDEBAR

* MediReach logo/name
* Dashboard
* Marketing Managers
* Industries
* Visits
* Leads & Follow-ups
* Reports
* Settings
* Logout

TOP HEADER

* Menu button
* Page title
* Notification icon
* Logged-in user name
* User role
* Profile icon/dropdown

MAIN CONTENT

* Page-specific content

Use a responsive sidebar.

On smaller screens, convert the sidebar into a collapsible menu.

---

# 5. Pages

Create these main pages:

1. Login
2. Dashboard
3. Marketing Managers
4. Industries
5. Visits
6. Leads & Follow-ups
7. Reports
8. Settings

Use React Router for navigation.

Routes should be:

/login
/dashboard
/managers
/industries
/visits
/leads
/reports
/settings

---

# 6. LOGIN PAGE

Create a professional MediReach login screen.

Left side:

* MediReach logo
* Diagnostic Marketing & Lead Management System
* Short tagline:
  "Connect • Visit • Grow"

Right side:

* Welcome Back
* Email/Username input
* Password input
* Show/hide password icon
* Remember me checkbox
* Forgot password text
* Login button

For the demo, use simple mock authentication.

Example login:

Email:
[admin@medireach.com](mailto:admin@medireach.com)

Password:
admin123

After successful login navigate to /dashboard.

Show an error message for incorrect login.

---

# 7. DASHBOARD PAGE

Create a complete professional dashboard.

Header:

Dashboard

"Welcome back, Admin!"

Add a date selector on the right.

## KPI Cards

Create six cards:

1. Total Marketing Managers
   Example: 10

2. Total Industries
   Example: 125

3. Total Visits
   Example: 250

4. Interested Leads
   Example: 85

5. Pending Follow-ups
   Example: 24

6. Converted Leads
   Example: 32

Each card should contain:

* Icon
* Title
* Number
* Small trend indicator

## Charts

Create:

### Visits Overview

Show monthly visits for the last 6 months.

### Lead Response

Show a doughnut/pie chart containing:

* Interested
* Think About It
* Not Interested
* Need More Information
* Converted

### Lead Status

Show:

* New Lead
* Visited
* Interested
* Follow-up
* Negotiation
* Converted
* Not Interested

## Today's Follow-ups

Create a card containing:

* Industry name
* Manager name
* Follow-up time
* Status

Statuses:

* Pending
* Completed
* Overdue

## Recent Visits

Create a table:

Date
Industry
Manager
Response
Status

## Upcoming Follow-ups

Create another table:

Date
Industry
Manager
Purpose
Priority

Priority:

* Hot
* Warm
* Cold

## Quick Actions

Create six buttons/cards:

* Add Manager
* Add Industry
* Record Visit
* View Leads
* Set Follow-up
* View Reports

Clicking each should navigate to the appropriate page.

---

# 8. MARKETING MANAGERS PAGE

Create a page for managing marketing managers.

Header:

Marketing Managers

Add button:

* Add Manager

## Manager Table

Columns:

* Manager ID
* Manager Name
* Employee ID
* Phone
* Email
* Assigned Area
* Status
* Actions

Actions:

* View
* Edit
* Delete

## Add/Edit Manager Modal or Form

Fields:

* Manager Name
* Employee ID
* Phone Number
* Email
* Assigned Area
* Joining Date
* Status

Status dropdown:

* Active
* Inactive

Validation:

* Required fields
* Valid email
* Phone number should contain 10 digits

Buttons:

Save
Update
Cancel
Clear

Store data using LocalStorage.

---

# 9. INDUSTRIES PAGE

Create an Industry/Client management page.

Header:

Industries

Button:

* Add Industry

## Industry Table

Columns:

* Industry ID
* Company Name
* Industry Type
* City
* Contact Person
* Designation
* Phone
* Email
* Employees
* Status
* Actions

Industry types:

* IT
* Manufacturing
* Hospital
* School
* College
* Pharma
* Banking
* Corporate
* Retail
* Other

## Add Industry Form

Fields:

* Industry/Company Name
* Industry Type
* Address
* City
* Contact Person
* Designation
* Phone Number
* Email
* Number of Employees
* Website
* Status

Validation should be included.

When a new industry is added, store it in LocalStorage.

---

# 10. VISITS PAGE

This is the most important page.

Title:

Visit & Marketing Details

Create a well-designed form divided into sections.

## Section 1 – Visit Information

Fields:

* Marketing Manager
* Industry/Company
* Visit Date
* Visit Time

The Manager and Industry fields should be dropdowns populated from stored data.

## Section 2 – Contact Information

Fields:

* Contact Person
* Designation
* Contact Phone
* Email

When an existing industry is selected, automatically populate contact information.

## Section 3 – Purpose of Visit

Dropdown:

* Corporate Health Checkup
* Diagnostic Services
* Employee Wellness Program
* Health Camp
* Partnership
* General Introduction
* Other

## Section 4 – Services Explained

Use checkboxes:

* Blood Tests
* Full Body Checkup
* Corporate Health Checkup
* Home Sample Collection
* Preventive Health Packages
* Specialized Diagnostic Tests
* Health Camp
* Employee Wellness Program

Allow multiple selections.

## Section 5 – Customer Response

Response dropdown:

* Interested
* Very Interested
* Will Think About It
* Need More Information
* Asked for Quotation
* Not Interested
* Contact Later

## Section 6 – Interest Level

Dropdown:

* High
* Medium
* Low

## Section 7 – Lead Priority

Dropdown:

* Hot
* Warm
* Cold

## Section 8 – Remarks

Large textarea.

Example:

"Client requested quotation for 500 employees."

## Section 9 – Follow-up

Fields:

Follow-up Required:
Yes / No

Next Follow-up Date

Follow-up Time

## Section 10 – Lead Status

Dropdown:

* New Lead
* Visited
* Interested
* Follow-up
* Negotiation
* Converted
* Not Interested
* Closed

Buttons:

Save Visit
Clear

After saving, show a success message:

"Visit recorded successfully."

Store visit information in LocalStorage.

---

# 11. LEADS & FOLLOW-UPS PAGE

Create a combined lead and follow-up management page.

Header:

Leads & Follow-ups

## Summary Cards

Show:

* Total Leads
* Hot Leads
* Pending Follow-ups
* Overdue Follow-ups
* Converted Leads

## Search and Filters

Add:

Search by Industry

Manager dropdown

Lead Status dropdown

Priority dropdown

Response dropdown

Date filter

Search button

Reset button

## Lead Table

Columns:

* ID
* Industry
* Manager
* Visit Date
* Response
* Priority
* Lead Status
* Follow-up Date
* Actions

Actions:

* View
* Edit
* Add Follow-up
* Close Lead

Use colored badges for status.

Examples:

Interested = green

Think About It = orange

Not Interested = red

Follow-up = blue

Converted = green

Overdue = red

## Lead Details

When View is clicked, open a modal or details page.

Display:

Company information

Manager information

Visit information

Services explained

Customer response

Priority

Lead status

Remarks

Follow-up date

---

# 12. FOLLOW-UP HISTORY

Inside the Lead Details view, create a timeline.

Example:

03-Sep-2026
First Visit
Interested

10-Sep-2026
Follow-up Call
Client requested quotation

17-Sep-2026
Follow-up Meeting
Negotiation started

24-Sep-2026
Final Discussion
Converted

Display the timeline visually.

Add:

* Add Follow-up

Follow-up form:

* Follow-up Date
* Follow-up Type
* Discussion
* Customer Response
* Next Follow-up Date
* Status
* Remarks

Follow-up types:

* Phone Call
* Meeting
* Email
* WhatsApp
* Site Visit

---

# 13. REPORTS PAGE

Create a professional reports dashboard.

Header:

Reports & Analytics

Add date filter:

Today
This Week
This Month
Custom Date

## Summary

Display:

Total Visits
Interested Leads
Follow-ups
Converted Leads
Not Interested

## Charts

Create:

### 1. Visits by Manager

Bar chart.

### 2. Lead Response

Doughnut chart.

### 3. Monthly Visits

Line chart.

### 4. Lead Status

Bar chart.

## Manager Performance Table

Columns:

Manager
Total Visits
Interested Leads
Follow-ups
Converted
Conversion Count

## Industry Performance Table

Columns:

Industry
Visits
Interested
Follow-ups
Converted
Status

Add an Export Report button.

For the first version, it can export the visible table to CSV.

---

# 14. SETTINGS PAGE

Create a simple settings page.

Sections:

## Profile

* Name
* Email
* Phone
* Role

## Application Settings

* Notifications toggle
* Email reminders toggle
* Dark mode toggle

## Account

* Change Password
* Logout

Keep this page simple.

---

# 15. DATA MODELS

Create mock data files or JavaScript arrays.

Marketing Manager object:

{
id: 1,
name: "Priya Kumar",
employeeId: "MM101",
phone: "9876543210",
email: "[priya@medireach.com](mailto:priya@medireach.com)",
area: "Visakhapatnam",
joiningDate: "2026-06-01",
status: "Active"
}

Industry object:

{
id: 1,
name: "ABC Industries",
type: "Manufacturing",
address: "Industrial Area",
city: "Visakhapatnam",
contactPerson: "Suresh Kumar",
designation: "HR Manager",
phone: "9988776655",
email: "[hr@abc.com](mailto:hr@abc.com)",
employees: 500,
status: "Active"
}

Visit object:

{
id: 1,
managerId: 1,
industryId: 1,
visitDate: "2026-09-03",
visitTime: "11:30 AM",
purpose: "Corporate Health Checkup",
services: [
"Blood Tests",
"Full Body Checkup",
"Corporate Health Checkup"
],
response: "Interested",
interestLevel: "High",
priority: "Hot",
remarks: "Asked for quotation",
followUpRequired: true,
nextFollowUpDate: "2026-09-10",
status: "Follow-up"
}

Follow-up object:

{
id: 1,
visitId: 1,
followUpDate: "2026-09-10",
type: "Phone Call",
discussion: "Client requested quotation",
response: "Interested",
nextFollowUpDate: "2026-09-17",
status: "Completed",
remarks: "Quotation sent"
}

---

# 16. COMPONENT STRUCTURE

Create reusable components.

Suggested structure:

src/

components/

Sidebar.jsx
Header.jsx
KpiCard.jsx
StatusBadge.jsx
Modal.jsx
SearchBar.jsx
DataTable.jsx
ConfirmDialog.jsx
FollowUpTimeline.jsx

pages/

Login.jsx
Dashboard.jsx
Managers.jsx
Industries.jsx
Visits.jsx
Leads.jsx
Reports.jsx
Settings.jsx

data/

managers.js
industries.js
visits.js
followups.js

services/

storageService.js

styles/

global.css
sidebar.css
dashboard.css
forms.css
tables.css

App.jsx
main.jsx

---

# 17. REUSABLE COMPONENTS

Create reusable components wherever possible.

For example:

<KpiCard
title="Total Visits"
value="250"
icon="..."
/>

<StatusBadge status="Interested" />

<DataTable />

<Modal />

Do not repeat the same HTML unnecessarily.

---

# 18. LOCAL STORAGE

Use LocalStorage for:

* Managers
* Industries
* Visits
* Follow-ups
* Login session

Create helper functions:

saveData()
getData()
updateData()
deleteData()

Use JSON.stringify() and JSON.parse().

When the application starts:

* Load existing data from LocalStorage
* If no data exists, load sample data

---

# 19. FORM VALIDATION

Add simple validation.

Manager:

* Name required
* Employee ID required
* Phone must be 10 digits
* Email must be valid

Industry:

* Company name required
* Industry type required
* Contact person required
* Phone must be 10 digits

Visit:

* Manager required
* Industry required
* Visit date required
* Response required

Show validation messages below inputs.

Example:

"Manager name is required."

"Enter a valid 10-digit phone number."

---

# 20. SEARCH AND FILTERING

All tables should support search and filtering.

For example:

Managers:
Search by name or employee ID.

Industries:
Search by company name, city, or industry type.

Visits:
Search by company or manager.

Leads:
Search by company and filter by status/priority.

Reports:
Filter by date.

Filtering should happen dynamically using React state.

---

# 21. RESPONSIVE DESIGN

The website must work on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop:

Sidebar permanently visible.

Mobile:

Sidebar collapses.

Tables should become horizontally scrollable.

Forms should change from two columns to one column on smaller screens.

---

# 22. UI DETAILS

Use:

* Rounded cards
* Soft shadows
* Consistent spacing
* Clear headings
* Blue primary buttons
* Green success badges
* Orange warning badges
* Red danger badges
* Gray neutral badges

Use icons wherever appropriate.

Do not make the interface overly colorful.

Keep it professional and easy to use.

---

# 23. BUSINESS LOGIC

Implement these rules:

1. A manager can record multiple visits.

2. An industry can have multiple visits.

3. A visit can have multiple follow-ups.

4. If response is "Interested", lead status can become "Interested".

5. If response is "Will Think About It", automatically suggest a follow-up date.

6. If Follow-up Required is "No", do not require a follow-up date.

7. If a follow-up date is before today's date and status is not Completed, display it as "Overdue".

8. If lead status becomes "Converted", increase the converted lead count on the dashboard.

9. When selecting an existing industry in the Visit form, automatically populate its contact details.

10. When selecting a manager, display the manager's assigned area.

---

# 24. DASHBOARD CALCULATIONS

Do not hard-code dashboard numbers.

Calculate them dynamically from LocalStorage data.

For example:

Total Managers =
managers.length

Total Industries =
industries.length

Total Visits =
visits.length

Interested Leads =
visits.filter(v => v.response === "Interested").length

Pending Follow-ups =
followups.filter(f => f.status === "Pending").length

Converted Leads =
visits.filter(v => v.status === "Converted").length

Use real stored data for dashboard cards and charts.

---

# 25. NAVIGATION

Use React Router.

Sidebar links:

Dashboard → /dashboard

Marketing Managers → /managers

Industries → /industries

Visits → /visits

Leads & Follow-ups → /leads

Reports → /reports

Settings → /settings

Logout → /login

Use NavLink so the active menu item is highlighted.

---

# 26. USER EXPERIENCE

Add:

* Loading states where appropriate
* Empty states
* Success notifications
* Error messages
* Confirmation before deleting
* Confirmation before closing a lead
* Form reset after successful submission

Example empty state:

"No industries found."

Button:

"+ Add Industry"

---

# 27. SAMPLE DATA

Create realistic sample data for:

10 marketing managers

20 industries

30 visits

20 follow-ups

Use Indian names, Indian phone number format, Indian cities, and realistic company names.

Example cities:

* Hyderabad
* Visakhapatnam
* Vijayawada
* Bengaluru
* Chennai

Do not use real sensitive customer information.

---

# 28. IMPORTANT UI FLOW

The main business flow should be:

LOGIN
↓
DASHBOARD
↓
MARKETING MANAGER
↓
INDUSTRY
↓
RECORD VISIT
↓
CUSTOMER RESPONSE
↓
LEAD CREATED
↓
FOLLOW-UP
↓
NEGOTIATION
↓
CONVERTED / NOT INTERESTED

The UI should make this workflow easy to understand.

---

# 29. FINAL REQUIREMENTS

Build the project step-by-step.

First create:

1. React/Vite project structure
2. Routing
3. Main layout
4. Sidebar
5. Header
6. Dashboard
7. Managers page
8. Industries page
9. Visits page
10. Leads & Follow-ups page
11. Reports page
12. Settings page
13. LocalStorage
14. Form validation
15. Search/filtering
16. Responsive CSS

Make sure all pages are connected and functional.

Do not create static screenshots.

Create actual working React components.

Do not put everything into App.jsx.

Keep components separate and reusable.

Use simple JavaScript that a beginner learning React can understand.

Add comments to important sections explaining what the code does.

The final MediReach application should look like a professional diagnostic company's internal CRM/marketing management portal.
