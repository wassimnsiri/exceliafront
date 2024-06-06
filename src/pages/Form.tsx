import React, { useState } from 'react';


const Form: React.FC = () => {
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>1. Quelle est la taille de votre entreprise?</label>
          <select value={companySize} onChange={(e) => setCompanySize(e.target.value)}>
            <option value="">Sélectionnez une option</option>
            <option value="TPE">TPE</option>
            <option value="PME">PME</option>
            <option value="EPI">EPI</option>
            <option value="Grande entreprise">Grande entreprise</option>
          </select>
        </div>
        <div className="form-group">
          <label>2. Quelle est votre couverture géographique?</label>
          <select value={geographicalCoverage} onChange={(e) => setGeographicalCoverage(e.target.value)}>
            <option value="">Sélectionnez une option</option>
            <option value="Régionale">Régionale</option>
            <option value="Nationale">Nationale</option>
            <option value="Internationale">Internationale</option>
          </select>
        </div>
        <div className="form-group">
          <label>3. Avez-vous déjà collaboré avec Excelia?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Oui"
                checked={collaboratedWithExcelia === 'Oui'}
                onChange={(e) => setCollaboratedWithExcelia(e.target.value)}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                value="Non"
                checked={collaboratedWithExcelia === 'Non'}
                onChange={(e) => setCollaboratedWithExcelia(e.target.value)}
              />
              Non
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>4. De quoi avez-vous besoin en recrutement?</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" onChange={() => handleCheckboxChange('Être orienté dans l’identification du juste profil pour chacun de vos recrutements', setRecruitmentOptions)} />
              Être orienté dans l’identification du juste profil pour chacun de vos recrutements
            </label>
            <label>
              <input type="checkbox" onChange={() => handleCheckboxChange('Rencontrer et attirer les talents dont vous avez besoin dans votre entreprise', setRecruitmentOptions)} />
              Rencontrer et attirer les talents dont vous avez besoin dans votre entreprise
            </label>
            <label>
              <input type="checkbox" onChange={() => handleCheckboxChange('Accompagner et fidéliser vos alternants', setRecruitmentOptions)} />
              Accompagner et fidéliser vos alternants
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>5. Qu’est-ce qui selon vous favoriserait le rayonnement de votre marque employeur ?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('Gagner en visibilité / désirabilité auprès de la Génération Z', setEmployerBrandOptions)}
              />
              Gagner en visibilité / désirabilité auprès de la Génération Z
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('Créer un lien privilégié et exclusif avec les étudiants de vos territoires', setEmployerBrandOptions)}
              />
              Créer un lien privilégié et exclusif avec les étudiants de vos territoires
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('Faire connaitre votre entreprise, vos métiers et expertises', setEmployerBrandOptions)}
              />
              Faire connaitre votre entreprise, vos métiers et expertises
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>6. Quels seraient vos leviers privilégiés d’acquisition de compétences innovantes ?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('Challenger votre entreprise grâce au regard neuf de la Génération Z', setCompetenceAcquisitionOptions)}
              />
              Challenger votre entreprise grâce au regard neuf de la Génération Z
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('Embarquer votre entreprise dans la transformation digitale', setCompetenceAcquisitionOptions)}
              />
              Embarquer votre entreprise dans la transformation digitale
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
      {submitted && (
        <div className="results">
          <h3>Vos réponses:</h3>
          <p>1. Taille de votre entreprise: {companySize}</p>
          <p>2. Couverture géographique: {geographicalCoverage}</p>
          <p>3. Collaboration avec Excelia: {collaboratedWithExcelia}</p>
          <p>4. Besoins en recrutement:</p>
          <ul>
            {recruitmentOptions.includes('Être orienté dans l’identification du juste profil pour chacun de vos recrutements') && <li>Le Talent Centre, partenaire de vos recrutements</li>}
            {recruitmentOptions.includes('Rencontrer et attirer les talents dont vous avez besoin dans votre entreprise') && <li>Événements de recrutement</li>}
            {recruitmentOptions.includes('Accompagner et fidéliser vos alternants') && <li>Tutorat d’alternance augmenté</li>}
          </ul>
          <p>5. Rayonnement de votre marque employeur:</p>
          <ul>
            {employerBrandOptions.includes('Gagner en visibilité / désirabilité auprès de la Génération Z') && <li>Plan media 360</li>}
            {employerBrandOptions.includes('Créer un lien privilégié et exclusif avec les étudiants de vos territoires') && <li>Parrainage</li>}
            {employerBrandOptions.includes('Faire connaitre votre entreprise, vos métiers et expertises') && <li>Événements marque employeur</li>}
          </ul>
          <p>6. Acquisition de compétences innovantes:</p>
          <ul>
            {competenceAcquisitionOptions.includes('Challenger votre entreprise grâce au regard neuf de la Génération Z') && <li>Incubateur d’idées</li>}
            {competenceAcquisitionOptions.includes('Embarquer votre entreprise dans la transformation digitale') && <li>XL Factory</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Form;
