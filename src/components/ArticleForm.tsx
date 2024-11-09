import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ArticleForm() {
    return (
        <Box
            component="form"
            sx={{ width: '100%'}}
            // noValidate
            autoComplete="off"
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap={2}
            padding={2}
            
        >
            <TextField
                required
                id="link"
                label="Article Link"
                size='small'
                sx={{ width: '100%' }}
            />
            <Button variant="contained" type='submit'>Submit</Button>
        </Box>
    )
}
