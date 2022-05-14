import React from 'react'

export default function PetsGenderCheckbox() {
    function ToggleButtonExample() {
        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
      
        const radios = [
          { name: 'Мужской', value: '1' },
          { name: 'Женский', value: '2' },
        ];
  return (      
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
              variant="outline-primary"
                        name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
        );
      }
}
