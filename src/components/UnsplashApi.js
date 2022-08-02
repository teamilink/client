import { usestate } from 'react';
import { Button, TextField } from "@mui/material";
import axios from 'axios'

const UnsplashApi = () => {

    const fetchAPI = async () => {
        // access key to unsplash api
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=TXaG_nMau4rphryLFAF6wEefIo5JucV-qEOf5Yw4Q9Y');
        console.log(response.data)
        const data = await response.data;
    }

    return (
        <div>
        <Button variant="outlined" type="button" onClick={fetchAPI} color="primary">
          UnsplashApi
        </Button>
        </div>
    );

}

export default UnsplashApi