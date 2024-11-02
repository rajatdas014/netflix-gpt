export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg";

export const NETFLIX_ICON = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const SIGN_OUT_ICON = 'https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';

export const DUMMY_PROFILE = 'https://www.home.5star.ng/wp-content/uploads/2020/12/testimonials2.jpeg';


export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

export const VIDEO_CARD_IMG = 'https://image.tmdb.org/t/p/w500/'

 
export const SUPPORTED_LANGUAGE = [
    {
        identifier: "en",
        value: "English"
    },
    {
        identifier: "hindi",
        value: "Hindi"
    },
    {
        identifier: "bengali",
        value: "Bengali"
    },
];



export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY
