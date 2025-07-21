import {List, ListItem} from "@mui/material";
import {
    LocalOfferRounded,
    CardGiftcardRounded,
    StarsRounded,
    LocalShippingRounded
} from '@mui/icons-material';


export default function HeadSpace() {
    return(
        <div className="bg-blue-400 h-10 px-10 flex justify-between items-center rounded-xl">
            <div className="flex items-center">
                <a href="/" className="text-white hover:text-blue-950">Find What to Read Next </a>
            </div>
            <div>
                <List className="flex space-x-4">
                    <ListItem className="text-white">
                        <LocalOfferRounded className="text-white font-medium"/>
                        Deals</ListItem>
                    <ListItem className="text-white">
                        <StarsRounded className="text-white font-medium"/>
                        Rewards
                    </ListItem>
                    <ListItem className="text-white">
                        <CardGiftcardRounded className="text-white font-medium"/>
                        Gifts</ListItem>
                    <ListItem className="text-white">
                        <LocalShippingRounded className="text-white font-medium"/>
                        Shipping
                    </ListItem>


                </List>
            </div>
        </div>)
}