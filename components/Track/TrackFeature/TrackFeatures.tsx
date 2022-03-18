import {Box, IconButton} from "@mui/material";
import {FeaturesContainer, TrackArtist, TrackFeaturesContainer} from "../Track.styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {FC} from "react";
import Link from 'next/link'

type TrackFeaturesProps = {
  album: string | null;
  id: string | null;
}

const TrackFeatures:FC<TrackFeaturesProps> = ({album, id}) => {
  return (
    <TrackFeaturesContainer justifyContent={album && id ? {xs:'flex-end',md:'space-between'} : 'flex-end'}>
      <Box display={album && id ? {xs: 'none', md: 'block'} : 'none'}>
        <Link href={`/albums/${id}`} passHref>
          <TrackArtist>{album}</TrackArtist>
        </Link>
      </Box>
      <FeaturesContainer width={{xs:'auto', tiny: '100px'}}>
        <IconButton disableRipple color={'inherit'} sx={{marginRight: {xs:'0', tiny:'15px'}}}>
          <FavoriteIcon sx={{fontSize: '18px'}}/>
        </IconButton>
        <Box display={{xs: 'none', tiny: 'block'}} fontWeight={'300'} color={'rgba(255,255,255,0.7)'}>14:52</Box>
      </FeaturesContainer>
    </TrackFeaturesContainer>
  );
};

export default TrackFeatures