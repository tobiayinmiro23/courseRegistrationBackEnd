 const getCookie = (req) => {
    const cookies = req.headers.cookie.split(';');

    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === 'sptoken')return cookieValue;
    }
    return null;
};
module.exports=getCookie