import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export const PagesList = ({total_pages, dispatch, getUserWithThunk}) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">

            {
          Array.from({length: total_pages})
            .map((_, index) => (<Button
              onClick={() => {
                dispatch(getUserWithThunk(index + 1));
              }}
            >
              {index + 1}
            </Button>))}

        </ButtonGroup>
      </Box>
    );
  }