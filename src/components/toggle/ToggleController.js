import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

function ToggleController() {
  const [checked, setChecked] = useState(false);
  return (
      <ToggleSwitch
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
  );
}

export default ToggleController;
