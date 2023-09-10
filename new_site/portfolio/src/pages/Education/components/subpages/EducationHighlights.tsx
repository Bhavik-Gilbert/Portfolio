import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function EducationHighlights() {
  const title = "Formal Education".split("");
  
  return (
    <div className="marginTop marginBottom">
      <div className="marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
            <div className="h3 byLetter marginBottom" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
            onClick={(() => {
                toggleClass("pagesTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
            })}>
                {titleChar}
            </div>
        ))}
      </div>

      <div>
        <div className="highlightBox marginBottom">
          <img className="skeleton highlightBoxImage" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>Undegraduate</h5>
            <h6>Computer Science BSc(Hons)</h6>
            <br/>
            <h6>King's College London</h6>
            <h6>Sep 2021 - May 2024</h6>
          </div>
            
        </div>
        
        <div className="highlightBox marginBottom">
          <img className="skeleton highlightBoxImage" src="./images/companyLogos/LeytonXIFormCollege.png" alt="Leyton XI Form College" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>A Levels</h5>
            <h5>4 A Levels</h5>
            <br/>
            <h6>Leyton Sixth Form College</h6>
            <h6>Sep 2019 - May 2021</h6>
          </div>
        </div>

        <div className="highlightBox">
          <img className="skeleton highlightBoxImage" src="./images/companyLogos/StAloy.jpg" alt="St Aloysius R.C College" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>GCSEs</h5>
            <h6>12 GCSEs</h6>
            <br/>
            <h6>St.Aloysius R.C College</h6>
            <h6>Sep 2014 - Jun 2019</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationHighlights;