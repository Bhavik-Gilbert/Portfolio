import React, { useEffect } from 'react';

import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';
import { pageNames } from '../../setup/router/pages';
import Theme from './components/Theme';

function Settings() {
  const title = "Settings".split("");
  
  useEffect(() => {
    document.title = 'Settings';
  });

  return (
    <div className={pageNames.Settings}>
      <div className="marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h1 byLetter" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("pagesTitle" + titleCharIndex + titleChar, "h1 byLetter", "h1Hold byLetter");
                  toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
      </div>

      <Theme/>
    </div>
  );
}

export default Settings;