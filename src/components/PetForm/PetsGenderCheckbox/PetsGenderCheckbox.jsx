import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function PetsGenderCheckbox({radio, idx, petGender, setPetGender}) {
  
  return (
    <ButtonGroup>
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant="outline-primary"
          name="radio"
          value={radio.value}
          checked={petGender === radio.value}
          onChange={(e) => setPetGender(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
    </ButtonGroup>
  );
}
