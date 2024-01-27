import { PROMOTIONS } from '../../app/shared/PROMOTIONS.js'

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured)
};




// go to file for logic dealing with promotions data