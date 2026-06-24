export default function KusumDetails() {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white">
      <h1 className="text-4xl font-black text-[#0f1c2c] mb-6">PM KUSUM Yojana</h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        
        {/* Introduction */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-2">Introduction</h3>
          <p>
            Launched in 2019, the Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) is a flagship scheme 
            by the Ministry of New and Renewable Energy (MNRE). It aims to provide energy security to farmers by promoting 
            solar power in the agricultural sector and helping them transition away from diesel-based irrigation.
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-2">Aims and Objectives</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide reliable and clean daytime energy for irrigation.</li>
            <li>To de-dieselize the farm sector and reduce environmental pollution.</li>
            <li>To empower farmers to become "Urjadata" (energy producers) by utilizing barren or fallow land for solar plants.</li>
            <li>To reduce the subsidy burden on electricity distribution companies (DISCOMs).</li>
          </ul>
        </section>

        {/* Key Components */}
        <section>
          <h3 className="font-black text-[#f26822] uppercase text-sm tracking-widest mb-2">Key Components</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Component A:</strong> Installation of decentralized grid-connected solar power plants on barren lands.</li>
            <li><strong>Component B:</strong> Installation of standalone solar-powered agriculture pumps.</li>
            <li><strong>Component C:</strong> Solarization of existing grid-connected agriculture pumps to reduce grid dependence.</li>
          </ul>
        </section>

        {/* Guidelines */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-2">Scheme Guidelines</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Financial Support:</strong> Central and State governments provide up to 60% of the system cost as subsidy.</li>
            <li><strong>Loan Access:</strong> Bank financing is available, requiring farmers to pay as little as 10% of the total cost upfront.</li>
            <li><strong>Land Utilization:</strong> Farmers can lease unused land for solar plant development, creating a steady stream of income.</li>
          </ul>
        </section>

      </div>
      
      {/* Optional: Back Button */}
      <div className="mt-10">
        <a href="/subsidy" className="text-[#f26822] font-bold hover:underline">← Back to Subsidy Calculator</a>
      </div>
    </div>
  );
}