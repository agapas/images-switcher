import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

const ToggleController = () => {
  const [checked, setChecked] = useState(false);
  return (
      <ToggleSwitch
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
  );
}

export default ToggleController;
