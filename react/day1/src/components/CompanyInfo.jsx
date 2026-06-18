function CompanyInfo() {
  const company = {
    name: "OpenAI",
    location: "San Francisco, USA",
    founder: "Sam Altman",
    establishedYear: 2015,
  };

  return (
    <div className="border p-3">
      <h2>Company Information</h2>
      <hr></hr>
      <p>
        <strong>Company Name:</strong> {company.name}
      </p>

      <p>
        <strong>Location:</strong> {company.location}
      </p>

      <p>
        <strong>Founder:</strong> {company.founder}
      </p>

      <p>
        <strong>Established Year:</strong> {company.establishedYear}
      </p>
    </div>
  );
}

export default CompanyInfo;