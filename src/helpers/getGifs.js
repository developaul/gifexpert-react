const getGifs = async category => {
    const url       = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=oPLaZHexmz9uvLIHl8olW3ltjyRiZ8o9`;
    const resp      = await fetch( url );
    const { data }  = await resp.json();

    const gifs = data.map( ({ id, title, images }) => (
        { 
            url: images?.downsized_medium.url,
            id, title
        }
    ));

    return gifs;
}

export default getGifs;