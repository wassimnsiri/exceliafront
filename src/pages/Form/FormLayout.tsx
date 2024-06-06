import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const FormLayout = () => {
  const [companySize, setCompanySize] = useState<string>('');
  const [geographicalCoverage, setGeographicalCoverage] = useState<string>('');
  const [collaboratedWithExcelia, setCollaboratedWithExcelia] = useState<string>('');
  const [recruitmentOptions, setRecruitmentOptions] = useState<string[]>([]);
  const [employerBrandOptions, setEmployerBrandOptions] = useState<string[]>([]);
  const [competenceAcquisitionOptions, setCompetenceAcquisitionOptions] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCheckboxChange = (option: string, setOptions: React.Dispatch<React.SetStateAction<string[]>>) => {
    setOptions(prevOptions =>
      prevOptions.includes(option) ? prevOptions.filter(o => o !== option) : [...prevOptions, option]
    );
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Layout" />

      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div className="form-group">
            <label className="block text-gray-700">1. Quelle est la taille de votre entreprise?</label>
            <select value={companySize} onChange={(e) => setCompanySize(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option value="">Sélectionnez une option</option>
              <option value="TPE">TPE</option>
              <option value="PME">PME</option>
              <option value="EPI">EPI</option>
              <option value="Grande entreprise">Grande entreprise</option>
            </select>
          </div>
          <div className="form-group">
            <label className="block text-gray-700">2. Quelle est votre couverture géographique?</label>
            <select value={geographicalCoverage} onChange={(e) => setGeographicalCoverage(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option value="">Sélectionnez une option</option>
              <option value="Régionale">Régionale</option>
              <option value="Nationale">Nationale</option>
              <option value="Internationale">Internationale</option>
            </select>
          </div>
          <div className="form-group">
            <label className="block text-gray-700">3. Avez-vous déjà collaboré avec Excelia?</label>
            <div className="radio-group mt-1">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="Oui"
                  checked={collaboratedWithExcelia === 'Oui'}
                  onChange={(e) => setCollaboratedWithExcelia(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Oui</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Non"
                  checked={collaboratedWithExcelia === 'Non'}
                  onChange={(e) => setCollaboratedWithExcelia(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Non</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="block text-gray-700">4. De quoi avez-vous besoin en recrutement?</label>
            <div className="checkbox-group mt-1">
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Être orienté dans l’identification du juste profil pour chacun de vos recrutements', setRecruitmentOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Être orienté dans l’identification du juste profil pour chacun de vos recrutements</span>
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Rencontrer et attirer les talents dont vous avez besoin dans votre entreprise', setRecruitmentOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Rencontrer et attirer les talents dont vous avez besoin dans votre entreprise</span>
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Accompagner et fidéliser vos alternants', setRecruitmentOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Accompagner et fidéliser vos alternants</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="block text-gray-700">5. Qu’est-ce qui selon vous favoriserait le rayonnement de votre marque employeur ?</label>
            <div className="checkbox-group mt-1">
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Gagner en visibilité / désirabilité auprès de la Génération Z', setEmployerBrandOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Gagner en visibilité / désirabilité auprès de la Génération Z</span>
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Créer un lien privilégié et exclusif avec les étudiants de vos territoires', setEmployerBrandOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Créer un lien privilégié et exclusif avec les étudiants de vos territoires</span>
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Faire connaitre votre entreprise, vos métiers et expertises', setEmployerBrandOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Faire connaitre votre entreprise, vos métiers et expertises</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="block text-gray-700">6. Quels seraient vos leviers privilégiés d’acquisition de compétences innovantes ?</label>
            <div className="checkbox-group mt-1">
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Challenger votre entreprise grâce au regard neuf de la Génération Z', setCompetenceAcquisitionOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Challenger votre entreprise grâce au regard neuf de la Génération Z</span>
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('Embarquer votre entreprise dans la transformation digitale', setCompetenceAcquisitionOptions)}
                  className="form-checkbox"
                />
                <span className="ml-2">Embarquer votre entreprise dans la transformation digitale</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm">Envoyer</button>
        </form>
        {submitted && (
          <div className="results mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Vos réponses:</h3>
            <p className="mt-2">1. Taille de votre entreprise: {companySize}</p>
            <p className="mt-2">2. Couverture géographique: {geographicalCoverage}</p>
            <p className="mt-2">3. Collaboration avec Excelia: {collaboratedWithExcelia}</p>
            <p className="mt-2">4. Besoins en recrutement:</p>
            <ul className="list-disc list-inside ml-4">
              {recruitmentOptions.includes('Être orienté dans l’identification du juste profil pour chacun de vos recrutements') && <li>Le Talent Centre, partenaire de vos recrutements</li>}
              {recruitmentOptions.includes('Rencontrer et attirer les talents dont vous avez besoin dans votre entreprise') && <li>Événements de recrutement</li>}
              {recruitmentOptions.includes('Accompagner et fidéliser vos alternants') && <li>Tutorat d’alternance augmenté</li>}
            </ul>
            <p className="mt-2">5. Rayonnement de votre marque employeur:</p>
            <ul className="list-disc list-inside ml-4">
              {employerBrandOptions.includes('Gagner en visibilité / désirabilité auprès de la Génération Z') && <li>Plan media 360</li>}
              {employerBrandOptions.includes('Créer un lien privilégié et exclusif avec les étudiants de vos territoires') && <li>Parrainage</li>}
              {employerBrandOptions.includes('Faire connaitre votre entreprise, vos métiers et expertises') && <li>Événements marque employeur</li>}
            </ul>
            <p className="mt-2">6. Acquisition de compétences innovantes:</p>
            <ul className="list-disc list-inside ml-4">
              {competenceAcquisitionOptions.includes('Challenger votre entreprise grâce au regard neuf de la Génération Z') && <li>Incubateur d’idées</li>}
              {competenceAcquisitionOptions.includes('Embarquer votre entreprise dans la transformation digitale') && <li>XL Factory</li>}
            </ul>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
