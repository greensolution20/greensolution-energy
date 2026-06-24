export default function SuryaGharDetails() {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white">
      <h1 className="text-4xl font-black text-[#0f1c2c] mb-6">PM Surya Ghar </h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        
        {/* Introduction */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-2">Introduction</h3>
          <p>
            Launched by Prime Minister Narendra Modi in February 2024, the PM Surya Ghar: Muft Bijli Yojana is a landmark initiative 
            aimed at providing free electricity to residential households through solar energy. The scheme targets the installation 
            of rooftop solar systems in 1 crore households across India by 2027.
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-2">Aims and Objectives</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To promote sustainable energy and reduce reliance on conventional power sources.</li>
            <li>To provide up to 300 units of free electricity per month to eligible households.</li>
            <li>To significantly reduce carbon emissions and combat climate change.</li>
            <li>To ease the financial burden of electricity bills on common citizens.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section>
          <h3 className="font-black text-[#f26822] uppercase text-sm tracking-widest mb-2">Key Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Substantial Subsidy:</strong> Direct financial assistance provided for rooftop solar installation.</li>
            <li><strong>Reduced Bills:</strong> Drastic reduction or total elimination of monthly electricity costs.</li>
            <li><strong>Direct Benefit Transfer:</strong> Subsidy amount is credited directly to the beneficiary's bank account.</li>
            <li><strong>Easy Financing:</strong> Low-interest loan facilities available for system installation.</li>
          </ul>
        </section>

        {/* Framework */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-2">Implementation Framework</h3>
          <p>
            The scheme is managed through a centralized National Portal. Applicants can register, track their application, 
            and apply for subsidy disbursement online. The implementation is coordinated by the Ministry of New and 
            Renewable Energy (MNRE) in collaboration with state-level agencies to ensure seamless execution.
          </p>
        </section>
      </div>

      {/* Optional: Back Button */}
      <div className="mt-10">
        <a href="/subsidy" className="text-[#f26822] font-bold hover:underline">← Back to Subsidy Calculator</a>
      </div>
    </div>
  );
}