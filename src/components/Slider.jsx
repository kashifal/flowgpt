import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

// Create a custom styled Slider component
const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#ffffff', // Set the color to white
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${theme.palette.primary.main}40`, // Custom hover and focus styles for the thumb
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${theme.palette.primary.main}40`, // Custom active style for the thumb
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.3, // Adjust the opacity of the rail
  },
  '& .MuiSlider-track': {
    backgroundColor: '#ffffff', // Use the primary color for the track
  },
}));

export default function SliderSizes() {
  const [slider, setSlider] = useState(30); // Change initial value to a number

  const handleSliderChange = (event, newValue) => {
    setSlider(newValue); // Update the state with the new value
  };

  return (
    <Box as="div" className="w-3/4 flex gap-4 items-center">
      <CustomSlider
        size="small"
        value={slider} // Use the value prop instead of defaultValue
        aria-label="Small"
        onChange={handleSliderChange} // Use the onChange event to update the state
        valueLabelDisplay="auto"
      />
      <h1 className='text-xs text-white'>{slider}</h1>
    </Box>
  );
}
