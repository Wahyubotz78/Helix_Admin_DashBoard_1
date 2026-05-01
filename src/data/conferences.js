export const conferences = [
  { id: 1, name: "MEDICLAVE 2026", url: "https://mediclave.helixconferences.com/" },
  { id: 2, name: "FOODMEET - 2026", url: "https://foodmeet.helixconferences.com/" },
  { id: 3, name: "FOODMICRO-2026", url: "https://foodmicro.helixconferences.com/" },
  { id: 4, name: "AGRIREGEN-2026", url: "https://agriregen.helixconferences.com/" },
  { id: 5, name: "FOODTECH-2026", url: "https://foodtech.helixconferences.com/" },
  { id: 6, name: "MILLETS-2026", url: "https://millets.helixconferences.com/" },
  { id: 7, name: "DIGIPATH-2026", url: "https://digipath.helixconferences.com/" },
  { id: 8, name: "PRECISIONMEDICINE-2026", url: "https://precisionmedicine.helixconferences.com/" },
  { id: 9, name: "AESTHETICA-2026", url: "https://aesthetica.helixconferences.com/" },
  { id: 10, name: "BIOCON-2026", url: "https://biocon.helixconferences.com/" },
  { id: 11, name: "SYNBIO-2026", url: "https://synbio.helixconferences.com/" },
  { id: 12, name: "MICROBIOME-2026", url: "https://microbiome.helixconferences.com/" },
  { id: 13, name: "RAREDISEASE-2026", url: "https://raredisease.helixconferences.com/" },
  { id: 14, name: "QUANTUMTECH-2026", url: "https://quantumtech.helixconferences.com/" },
  { id: 15, name: "ZEROTRUSTAI-2026", url: "https://zerotrustai.helixconferences.com/" },
  { id: 16, name: "SMARTMATERIALS-2026", url: "https://smartmaterials.helixconferences.com/" },
  { id: 17, name: "MATENERGY-2026", url: "https://matenergy.helixconferences.com/" },
  { id: 18, name: "PHARMATECH-2026", url: "https://pharmatech.helixconferences.com/" },
  { id: 19, name: "AIDRUG-2026", url: "https://aidrug.helixconferences.com/" },
  { id: 20, name: "CELLGENE-2026", url: "https://cellgene.helixconferences.com/" },
  { id: 21, name: "PHARMACCESS-2026", url: "https://pharmaccess.helixconferences.com/" },
  { id: 22, name: "NURSESUMMIT-2026", url: "https://nursesummit.helixconferences.com/" },
  { id: 23, name: "AINURSE-2026", url: "https://ainurse.helixconferences.com/" },
  { id: 24, name: "ER-SUMMIT-2026", url: "https://er-summit.helixconferences.com/" },
  { id: 25, name: "NURSELEAD-2026", url: "https://nurselead.helixconferences.com/" },
];

export const generateMockContactData = (conferenceName) => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    subject: `Inquiry about ${conferenceName}`,
    message: "I am interested in attending this conference. Please send more details.",
    date: new Date().toISOString().split('T')[0],
  }));
};

export const generateMockAbstractData = (conferenceName) => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Abstract Title ${i + 1} for ${conferenceName}`,
    author: `Dr. Researcher ${i + 1}`,
    affiliation: "University of Science",
    status: i % 2 === 0 ? "Under Review" : "Accepted",
    submissionDate: new Date().toISOString().split('T')[0],
  }));
};
