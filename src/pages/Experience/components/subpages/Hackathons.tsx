import React, {useEffect} from 'react';

import HackathonsInfo from './infoOverlays/HackathonsInfo';
import  { openElements, toggleCollapsible, collapseEventListeners } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Hackathons() {
  const title = "Hackathons".split("");
  
  useEffect(() => {
    collapseEventListeners(["hackathonsScrollBox"]);
  }, []);

  return (
    <>
      <div className="textBox marginTop cardScrollBox">
        <div className="marginTop marginBottom">
          {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h3 byLetter marginBottom" id={"hackathonsTitle" + titleCharIndex + titleChar} key={"hackathonsTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("hackathonsTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                  toggleCapitalise("hackathonsTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
        </div>

        <div className="file button marginBottom" id="hackathonsScrollBoxCollapseButton" onClick={(e) => toggleCollapsible("hackathonsScrollBox", "scrollBox")}>
            Expand
        </div>

        <div className="scrollBox" id="hackathonsScrollBox">
          <div className="card long m-3" onClick={(e) => openElements(["hackathonsOverlay", "codeForGood"])}>
              <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
              <h5>Code For Good</h5>
              <br/>
              <h6>J.P Morgan Chase & Co</h6>
              <h6>Nov 2022</h6>
              <br/>
              <div className="file button marginTop">
                  More Info
              </div>
          </div>

          <div className="card long m-3" onClick={(e) => openElements(["hackathonsOverlay", "polygonxEasyA"])}>
              <img className="skeleton header" src="./images/companyLogos/Polygon.jpg" alt="Polygon" loading="lazy"/>
              <h5>Polygon x Easy A</h5>
              <br/>
              <h6>Polygon</h6>
              <h6>Oct 2022</h6>
              <br/>
              <div className="file button marginTop">
                  More Info
              </div>
          </div>

          <div className="card long m-3" onClick={(e) => openElements(["hackathonsOverlay", "metaGlobalHackathon2022"])}>
              <img className="skeleton header" src="./images/companyLogos/Meta.png" alt="Meta" loading="lazy"/>
              <h5>Meta Global Hackathon</h5>
              <br/>
              <h6>Meta</h6>
              <h6>Sept 2022</h6>
              <br/>
              <div className="file button marginTop">
                  More Info
              </div>
          </div>
        </div>
      </div>

      <HackathonsInfo/>
    </>
  );
}

export default Hackathons;