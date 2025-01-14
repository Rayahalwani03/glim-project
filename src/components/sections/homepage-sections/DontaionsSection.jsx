const HomePageDontaionsSection = () => {

  const donations = [
    { title: 'University Fees for Kofi', description: 'Support Kofi in becoming the first in his family to attend university.' },
    { title: 'Safe Shelter for Women', description: 'Help provide a safe haven for women in crisis.' },
    { title: 'Research Fund for Women\'s Health', description: 'Support vital research into women\'s health issues.' }
  ];
  return (
    <div >
      <section className="py-16 bg-white-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Donations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donations.map((donation, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{donation.title}</h3>
              <p className="text-gray-600">{donation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomePageDontaionsSection
